import React from "react";
import { AddToCartButton } from "./Button";
const Product = React.forwardRef(({ image, title, price }, ref) => {
  let rialPrice = price.toString().slice(0, -1);
  return (
    <article ref={ref} className="product-card">
      <figure className="product-card__image">
        <img className="product-card__image__img" src={image} alt="product" />
        <figcaption>{title}</figcaption>
      </figure>
      <div className="product-card__actions">
        <p className="product-card__actions__content">
          {rialPrice}&nbsp; تومان
        </p>
        <AddToCartButton className="product-card__actions__button">
          +
        </AddToCartButton>
      </div>
    </article>
  );
});

export default Product;
