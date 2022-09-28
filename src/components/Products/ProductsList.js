import React from "react";
import styles from "./ProductsList.module.css";
import Card from "../UI/Card";

const ProductsList = (props) => {
  return (
    <Card className={styles.products}>
      <ul>
        {props.products.map((product) => (
          <li key={product.id}>{product.item + " " + product.amount + "zł"}</li>
        ))}
      </ul>
    </Card>
  );
};

export default ProductsList;
