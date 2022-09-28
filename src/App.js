import React, { useState } from "react";
import AddNewProduct from "./components/Products/AddNewProduct";
import ProductsList from "./components/Products/ProductsList";

function App() {
  const [productsList, setProductsList] = useState([]);

  const addProductHandler = (pName, pAmount) => {
    setProductsList((prev) => {
      return [
        {
          item: pName,
          amount: pAmount,
          id: Math.random().toString(),
        },
        ...prev,
      ];
    });
  };

  return (
    <>
      <AddNewProduct onAddProduct={addProductHandler} />
      <ProductsList products={productsList} />
    </>
  );
}

export default App;
