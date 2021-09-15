import { useState, useEffect } from "react";
import { getAllProducts } from "../api/products";
const useFilteredData = (pageNumber, query, sort) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [firstLoading, setFirstLoading] = useState(true);
  useEffect(() => {
    setProducts([]);
  }, [query, sort]);
  useEffect(() => {
    setLoading(true);
    getAllProducts(pageNumber, query, sort).then((res) => {
      setProducts((prevProducts) => {
        return [...new Set([...prevProducts, ...res.data.data.products])];
      });
      setHasMore(
        res.data.data.pager.current_page < res.data.data.pager.total_pages
      );
      setFirstLoading(false);
      setLoading(false);
    });
  }, [query, pageNumber, sort]);
  return { firstLoading, loading, products, hasMore };
};

export default useFilteredData;
