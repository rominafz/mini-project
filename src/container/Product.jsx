import React from "react";
import { Button } from "../components/Button";
import { useHistory } from "react-router";
import { priceConverter } from "../utils/priceConverter";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { setCart } from "../store/actions/cartActions";
const Product = React.forwardRef(({ image, title, price, item }, ref) => {
  const history = useHistory();
  const cart = useSelector((state) => state.cart.singleCart);
  const dispatch = useDispatch();
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

  /**
   * handling add a product to cart
   */
  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    const tempCart = { ...cart };
    let tempIndex = cart?.orders.findIndex(
      (item) => item.productId === product.id
    );
    let tempItem = cart.orders[tempIndex];
    if (tempIndex === -1) {
      let newItem = {
        productId: product.id,
        title: product.title,
        price: product?.price?.selling_price,
        quantity: 1,
      };
      tempCart.orders = [...cart.orders, newItem];
      dispatch(setCart(tempCart));
    } else {
      let newQuantity = tempItem.quantity + 1;
      if (newQuantity > product?.rating.count) {
        toast.error("شما نمیتوانید از موجودی محصول بیشتر سفارش دهید ");
      } else {
        tempItem.quantity = newQuantity;
        tempCart.orders[tempIndex] = tempItem;
      }
    }
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
        <Button
          className="product-card__actions__button"
          onClick={(e) => handleAddToCart(e, item)}
        >
          +
        </Button>
      </div>
    </article>
  );
});

export default Product;
