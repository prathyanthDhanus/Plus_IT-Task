import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-neutral-200 text-center dark:bg-neutral-700 lg:text-left">
      <div className="p-4 text-center text-neutral-700 dark:text-neutral-200">
        © 2024 Copyright:
        <a className="text-white" href="https://e-commerce.com/">E-commerce</a>
      </div>
      <div className="text-center p-4">
        <ul className="list-none flex justify-center">
          <li className="mr-3">
            <a className="text-neutral-700 dark:text-neutral-200" href="#!">Link 1</a>
          </li>
          <li className="mr-3">
            <a className="text-neutral-700 dark:text-neutral-200" href="#!">Link 2</a>
          </li>
          <li className="mr-3">
            <a className="text-neutral-700 dark:text-neutral-200" href="#!">Link 3</a>
          </li>
          <li>
            <a className="text-neutral-700 dark:text-neutral-200" href="#!">Link 4</a>
          </li>
        </ul>
      </div>
      <div className="p-4 text-center bg-black bg-opacity-20">
        <p className="text-white">Some additional information here</p>
      </div>
    </footer>
  );
}