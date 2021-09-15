import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getAProductById } from "../api/products";
import { Button } from "../components/Button";
import Error from "../components/Error";
import { priceConverter } from "../utils/priceConverter";
import { Loading } from "../components/Loading";
import { MiniLoading } from "../components/Loading";
import { useSelector, useDispatch } from "react-redux";
import { setCart } from "../store/actions/cartActions";
import { toast } from "react-toastify";
const ProductDetailes = () => {
  const { productId } = useParams();
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState({});
  const [error, setError] = useState(false);
  const cart = useSelector((state) => state.cart.singleCart);
  const dispatch = useDispatch();
  useEffect(() => {
    setLoading(true);
    setError(false);
    getAProductById(productId)
      .then((res) => {
        setProduct(res.data.data.product);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
      });
  }, []);
  /**
   * handling add to cart
   */
  const handleAddToCart = (product) => {
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
    <div className="product-detailes-main">
      {loading ? (
        <Loading />
      ) : (
        <>
          {error ? (
            <Error />
          ) : (
            <article className="product-detailes-c">
              <img
                className="product-detailes-c__image"
                src={product?.images?.main}
                alt="product"
              />
              <section className="product-detailes-c__content">
                <div className="product-detailes-c__content__detailes">
                  {loading ? <MiniLoading /> : <h3>{product?.title}</h3>}
                </div>
                <div className="product-detailes-c__content__actions">
                  {loading ? (
                    <MiniLoading />
                  ) : (
                    <h5>
                      {priceConverter(product?.price?.selling_price)} تومان
                    </h5>
                  )}

                  <Button
                    className="product-detailes-c__content__actions__button"
                    onClick={() => handleAddToCart(product)}
                  >
                    افزودن به سبد خرید
                  </Button>
                </div>
              </section>
            </article>
          )}
        </>
      )}
    </div>
  );
};

export default ProductDetailes;
