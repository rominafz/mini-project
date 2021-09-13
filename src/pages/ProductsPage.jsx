import React, { useState, useEffect } from "react";
import Product from "../components/Product";
import { getAllProducts } from "../api/products";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getAllProducts()
      .then((res) => setProducts(res.data.data.products))
      .then((res) => setLoading(false));
  }, []);
  console.log(products);
  const renderedProducts = products.map((item, index) => {
    return (
      <Product
        key={item.id}
        image={item.images.main}
        title={item.title}
        price={item.price.selling_price}
      />
    );
  });
  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <main className="container">{renderedProducts}</main>
      )}
    </>
  );
};

export default ProductsPage;
