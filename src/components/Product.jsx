import React from "react";
import { Button } from "./Button";
import { useHistory } from "react-router";
import { priceConverter } from "../utils/priceConverter";
const Product = React.forwardRef(({ image, title, price, item }, ref) => {
  const history = useHistory();

  /**
   * Change the price to Rial and seprate with comma's
   */

  /**
   *
   * @param {*} item
   * defining the handleGoToDetailesPage function
   */
  const handleGoToDetailesPage = (item) => {
    const newTitle = item.title.split(" ").join("-");
    history.push(`/product/${item.id}/${newTitle}`);
  };
  return (
    <article
      ref={ref}
      className="product-card"
      onClick={() => handleGoToDetailesPage(item)}
    >
      <figure className="product-card__image">
        <img className="product-card__image__img" src={image} alt="product" />
        <figcaption>{title}</figcaption>
      </figure>
      <div className="product-card__actions">
        <p className="product-card__actions__content">
          {priceConverter(price)}&nbsp; تومان
        </p>
        <Button className="product-card__actions__button">+</Button>
      </div>
    </article>
  );
});

export default Product;
