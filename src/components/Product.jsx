import React from "react";
import { AddToCartButton } from "./Button";
const Product = ({ image, title, price }) => {
  return (
    <article className="product-card">
      <figure className="product-card__image">
        <img
          className="product-card__image__img"
          src={image}
          alt={`this is a photo of supermarket stuffs`}
        />
        <figcaption>{title}</figcaption>
      </figure>
      <div className="product-card__actions">
        <p className="product-card__actions__content"> {price}&nbsp; تومان</p>
        <AddToCartButton className="product-card__actions__button">
          +
        </AddToCartButton>
      </div>
    </article>
  );
};

export default Product;
