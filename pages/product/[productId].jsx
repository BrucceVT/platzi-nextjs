import React from "react";
import { useRouter } from "next/router";

const ProductItem = () => {

  const {
    query: { productId },
  } = useRouter();

  const router = useRouter()

  return (
    <div>
      <h3>Este es una pagina de prueba de item producto: {productId}</h3>
      <h2>compra mi nuevo producto {productId} en el siguiente enlace</h2>
      <a href="https://www.youtube.com/">Nuevo producto</a>
    </div>
  );
};

export default ProductItem;