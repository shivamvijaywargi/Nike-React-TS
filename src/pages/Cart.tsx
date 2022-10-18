import { useState } from "react";

const Cart = () => {
  const [notice, setNotice] = useState(true);

  return (
    <div>
      <div className="mt-12 container mx-auto px-4 md:px-0 md:flex md:gap-4">
        <div className="md:w-8/12 space-y-6">
          {notice && (
            <p className="bg-gray-100 p-2 text-xs transition duration-300 font-semibold flex justify-between items-center">
              It's taking us a bit longer than usual to get your order to you.
              Thank you for your patience.{" "}
              <span
                className="cursor-pointer ml-4"
                onClick={() => setNotice(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
            </p>
          )}
          <h2 className="text-2xl">Bag</h2>
          <div className="flex justify-between">
            <div className="flex">
              <img
                className="w-36 h-36"
                src="/shoe3.webp"
                alt="Nike Just Do it"
              />
              <div className="ml-4 space-y-2">
                <h3>Product Title</h3>
                <p className="text-gray-500">Product Category</p>
                <p className="text-gray-500">
                  Quantity{" "}
                  <select name="quantity" id="quantity">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </p>
                <p className="text-gray-500 hover:text-black cursor-pointer">
                  Delete
                </p>
              </div>
            </div>
            <p>Price</p>
          </div>

          <hr />
        </div>
        <div className="md:w-1/3">
          <h2 className="text-2xl mt-8 md:mt-0">Summary</h2>

          <div className="mt-8 space-y-3">
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p>Subtotal Price</p>
            </div>
            <div className="flex justify-between">
              <p>Estimated Delivery & Handling</p>
              <p>Estimated Delivery & Handling</p>
            </div>
            <hr />
            <div className="flex justify-between">
              <p>Total</p>
              <p>Total</p>
            </div>
            <hr />
            <div className="flex flex-col space-y-3">
              <a
                href="#"
                className="bg-black/95 hover:bg-black/60 transition duration-200 text-white text-center p-4 rounded-full"
              >
                Guest Checkout
              </a>
              <a
                href="#"
                className=" bg-black/95 hover:bg-black/60 transition duration-200 text-white text-center p-4 rounded-full"
              >
                Member Checkout
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
