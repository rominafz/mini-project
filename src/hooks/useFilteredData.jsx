import React, { useState, useEffect } from "react";
import { getAllProducts } from "../api/products";
const useFilteredData = (apicallFunction, pageNumber, query, sort) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setProducts([]);
  }, [query]);
  useEffect(() => {
    setLoading(true);
    apicallFunction(pageNumber, query, sort)
      .then((res) => {
        setProducts((prevProducts) => {
          return [...new Set([...prevProducts, ...res.data.data.products])];
        });
        setHasMore(
          res.data.data.pager.current_page < res.data.data.pager.total_pages
        );
        setLoading(false);
      })
      .catch((err) => {
        setLoading(true);
        console.log("مشکلی پیش آمده دوباره امتحان کنید");
      });
  }, [query, pageNumber, sort]);
  return { loading, products, hasMore };
};

export default useFilteredData;
