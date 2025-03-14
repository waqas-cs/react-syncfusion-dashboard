import React, { useEffect, useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

import { useStateContext } from "../contexts/ContextProvider";
import { cartData } from "../data/dummy";
import { Button } from ".";

const SingleItem = ({ item, setTotalPrice }) => {
  const [itemCount, setItemCount] = useState(0);
  const [itemPrice, setItemPrice] = useState(0);

  const minusItemHandler = () => {
    setItemCount((prevCount) => (prevCount <= 0 ? prevCount : prevCount - 1));
  };

  const addItemHandler = () => {
    setItemCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    setTotalPrice((prevTotalPrice) => prevTotalPrice + item.price * itemCount);
  }, [itemCount, item.price, setTotalPrice]);

  useEffect(() => {
    setTotalPrice((prevTotalPrice) => prevTotalPrice - item.price * itemCount);
  }, [itemCount, item.price, setTotalPrice]);

  useEffect(() => {
    setItemPrice(item.price * itemCount);
  }, [itemCount, item.price]);

  return (
    <div>
      <div>
        <div className="flex items-center leading-8 gap-5 border-b-1 border-color dark:border-gray-600 p-4">
          <img
            className="rounded-lg h-80 w-24"
            src={item.image}
            alt="Product img"
          />
          <div>
            <p className="font-semibold">{item.name}</p>
            <p className="text-gray-600 dark:text-gray-400 text-sm font-semibold">
              {item.category}
            </p>
            <div className="flex gap-4 mt-2 items-center">
              <p className="font-semibold text-lg w-12">${itemPrice}</p>
              <div className="flex items-center border-1 border-r-0 border-color rounded">
                <p
                  className="p-2 border-r-1 dark:border-gray-600 border-color text-red-600 cursor-pointer"
                  onClick={minusItemHandler}
                >
                  <AiOutlineMinus />
                </p>
                <p className="p-2 border-r-1 border-color dark:border-gray-600 text-green-600">
                  {itemCount}
                </p>
                <p
                  className="p-2 border-r-1 border-color dark:border-gray-600 text-green-600 cursor-pointer"
                  onClick={addItemHandler}
                >
                  <AiOutlinePlus />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Cart = () => {
  const { currentColor } = useStateContext();
  const [totalPrice, setTotalPrice] = useState(0);
  return (
    <div className="bg-half-transparent w-full fixed nav-item top-0 right-0 ">
      <div className="float-right h-screen  duration-1000 ease-in-out dark:text-gray-200 transition-all dark:bg-[#484B52] bg-white md:w-400 p-8">
        <div className="flex justify-between items-center">
          <p className="font-semibold text-lg">Shopping Cart</p>
          <Button
            icon={<MdOutlineCancel />}
            color="rgb(153, 171, 180)"
            bgHoverColor="light-gray"
            size="2xl"
            borderRadius="50%"
          />
        </div>
        {cartData?.map((item, index) => {
          return (
            <SingleItem key={index} item={item} setTotalPrice={setTotalPrice} />
          );
        })}
        <div className="mt-3 mb-3">
          <div className="flex justify-between items-center">
            <p className="text-gray-500 dark:text-gray-200">Sub Total</p>
            <p className="font-semibold">{totalPrice}</p>
          </div>
          <div className="flex justify-between items-center mt-3">
            <p className="text-gray-500 dark:text-gray-200">Total</p>
            <p className="font-semibold">{totalPrice}</p>
          </div>
        </div>
        <div className="mt-5">
          <Button
            color="white"
            bgColor={currentColor}
            text="Place Order"
            borderRadius="10px"
            width="full"
          />
        </div>
      </div>
    </div>
  );
};

export default Cart;
