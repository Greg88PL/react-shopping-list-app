import React, { useState } from "react";
import styles from "./AddNewProduct.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddNewProduct = (props) => {
  const [enteredProduct, setEnteredProduct] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [isError, setIsError] = useState();

  const productChangeHandler = (e) => {
    setEnteredProduct(e.target.value);
  };
  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
  };

  const addNewProductHandler = (e) => {
    e.preventDefault();

    if (
      enteredProduct.trim().length === 0 ||
      enteredAmount.trim().length === 0
    ) {
      setIsError({
        title: "Invalid input",
        message:
          "Please enter a valid product name and amount (non-empty values).",
      });
      return;
    }
    if (+enteredAmount < 0.01) {
      setIsError({
        title: "Invalid amount",
        message: "Please enter a valid amount (> 0).",
      });
      return;
    }

    props.onAddProduct(enteredProduct, enteredAmount);

    setEnteredProduct("");
    setEnteredAmount("");
  };

  const errorHandler = () => {
    setIsError(null);
  };

  return (
    <div>
      {isError && (
        <ErrorModal
          onCancel={errorHandler}
          title={isError.title}
          message={isError.message}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addNewProductHandler}>
          <label htmlFor="product">Product</label>
          <input
            onChange={productChangeHandler}
            id="product"
            type="text"
            value={enteredProduct}
          ></input>
          <label htmlFor="amount">Amount</label>
          <input
            onChange={amountChangeHandler}
            id="amount"
            type="number"
            value={enteredAmount}
          ></input>
          <Button type="submit">Add New Product</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddNewProduct;
