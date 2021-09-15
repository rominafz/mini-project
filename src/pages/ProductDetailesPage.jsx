import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getAProductById } from "../api/products";
import { Button } from "../components/Button";
import { priceConverter } from "../utils/priceConverter";
import { Loading } from "../components/Loading";
import { MiniLoading } from "../components/Loading";
const ProductDetailesPage = () => {
  const { productId } = useParams();
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState({});
  useEffect(() => {
    setLoading(true);
    getAProductById(productId)
      .then((res) => {
        setProduct(res.data.data.product);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <article className="product-detailes-c">
          <img
            className="product-detailes-c__image"
            src={product?.images?.main}
            alt="product"
          />
          <section className="product-detailes-c__content">
            <div className="product-detailes-c__content__detailes">
              {loading ? <MiniLoading /> : <h4>{product?.title}</h4>}
            </div>
            <div className="product-detailes-c__content__actions">
              {loading ? (
                <MiniLoading />
              ) : (
                <h5>{priceConverter(product?.price?.selling_price)} تومان</h5>
              )}

              <Button className="product-detailes-c__content__actions__button">
                افزودن به سبد خرید
              </Button>
            </div>
          </section>
        </article>
      )}
    </>
  );
};

export default ProductDetailesPage;
