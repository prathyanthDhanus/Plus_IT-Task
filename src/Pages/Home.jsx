import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import axios from "../Utils/Axios";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Navbar from "../Components/Navbar";
import Loader from "../Components/Loader";
import Footer from "../Components/Footer";





const Home = () => {

  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);

  //---------- fetching data -------------

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/items");

        if (response.status === 200) {
          setItem(response.data);
          setLoading(false); // Set loading to false after data is fetched
        }
      } catch (error) {
        swal("Error!", "Something went wrong", "error");
        setLoading(false); // Set loading to false in case of error
      }
    };
    fetchData();
  }, []);

  //-------------- onClick for add to cart & wishlist -----------------

  const handleClick = (action) => {
    let message;
    if (action === "cart") {
      message = "Product added to cart";
    } else if (action === "wishlist") {
      message = "Product added to wishlist❤️";
    }
    swal("Success!", message, "success");
  };

  return (
    <>
      {loading ? (
        <Loader /> // Show Loader component if loading is true
      ) : (
        <>
          <Navbar />
          <div className="mb-10 mt-9 p-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 place-items-center hr-1">
              {item?.map((data, index) => (
                <div
                  key={data.id}
                  className={`mx-5 ${index !== 0 ? "mt-7" : ""}`}
                >
                  <div className="relative  bg-grey rounded-md p-1">
                    <LazyLoadImage
                      src={data.image}
                      alt={`Product ${data.id}`}
                      effect="hide"
                      width="100%"
                      className="h-[180px] w-[350px] object-fill rounded-md "
                    />
                  </div>
                  <div className="leading-7 flex justify-between p-3 ">
                    <div>
                      <h2 className="font-bold">{data.title}</h2>
                      <h2 className="font-semibold">${data.price}</h2>
                    </div>
                  </div>
                  <div className="flex justify-center md:justify-start mt-4">
                    <button
                      className="bg-green-500 relative h-10 px-3 ml-6 text-white rounded-lg "
                      onClick={() => handleClick("cart")}
                    >
                      Add To Cart🛒
                    </button>
                    <button
                      className="bg-yellow-500 relative h-10 px-3  text-white rounded-lg ml-20"
                      onClick={() => handleClick("wishlist")}
                    >
                      {" "}
                      Wishlist❤️
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Footer/>
          
        </>
      )}
    </>
  );
};

export default Home;
