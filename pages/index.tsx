import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { json } from "stream/consumers";

const HomePage = () => {
  const [productList, setProductList] = useState<TProduct[]>([]);

  useEffect(() => {
    window
      .fetch("api/avo")
      .then((response) => response.json())
      .then(({ length, data }) => setProductList(data));
  }, []);

  return (
    <div>
      <h1>HOLA MUNDO!!</h1>
      {productList.map((product) => (
        <div>{product.name}</div>
      ))}
    </div>
  );
};

export default HomePage;
