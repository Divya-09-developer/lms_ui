'use client';

import { coursesData } from "../data/courses";
import { events } from "../data/events";
import { productData } from "../data/products";
import React, { useContext, useState } from "react";

const dataContext = React.createContext();

export const useContextElement = () => {
  return useContext(dataContext);
};

export default function Context({ children }) {
  const [cartProducts, setCartProducts] = useState([]);
  const [cartCourses, setCartCourses] = useState([]);
  const [cartEvents, setCartEvents] = useState([]);

  const addCourseToCart = (id) => {
    if (!cartCourses.some((elm) => elm.id === id)) {
      const item = { ...coursesData.find((elm) => elm.id === id), quantity: 1 };
      setCartCourses((prev) => [...prev, item]);
    }
  };

  const isAddedToCartCourses = (id) => {
    return cartCourses.some((elm) => elm.id === id);
  };

  const addProductToCart = (id) => {
    if (!cartProducts.some((elm) => elm.id === id)) {
      const item = { ...productData.find((elm) => elm.id === id), quantity: 1 };
      setCartProducts((prev) => [...prev, item]);
    }
  };

  const isAddedToCartProducts = (id) => {
    return cartProducts.some((elm) => elm.id === id);
  };

  const addEventToCart = (id) => {
    if (!cartEvents.some((elm) => elm.id === id)) {
      const item = { ...events.find((elm) => elm.id === id), quantity: 1 };
      setCartEvents((prev) => [...prev, item]);
    }
  };

  const isAddedToCartEvents = (id) => {
    return cartEvents.some((elm) => elm.id === id);
  };

  const contextElement = {
    cartProducts,
    setCartProducts,
    addProductToCart,
    isAddedToCartProducts,
    addCourseToCart,
    isAddedToCartCourses,
    cartCourses,
    setCartCourses,
    cartEvents,
    setCartEvents,
    addEventToCart,
    isAddedToCartEvents,
  };

  return (
    <dataContext.Provider value={contextElement}>
      {children}
    </dataContext.Provider>
  );
}