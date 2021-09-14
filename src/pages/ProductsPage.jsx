import React, { useState, useEffect, useRef, useCallback } from "react";
import { toast, ToastContainer } from "react-toastify";
import { getAllProducts } from "../api/products";
import Input from "../components/Input";
import ProductsList from "../components/ProductsList";
import SortList from "../components/SortList";
import useFilteredData from "../hooks/useFilteredData";
const sortingList = [
  {
    id: 4,
    title: "پربازدیدترین",
  },
  {
    id: 27,
    title: "توصیه مشتریان",
  },
  {
    id: 22,
    title: "محبوب ترین",
  },
];

const ProductsPage = () => {
  // const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [hasMore, setHasMore] = useState(false);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [sort, setSort] = useState(4);
  const observer = useRef();

  /*
   * destructring from useFilteredData Hooks
   */
  const { loading, products, hasMore } = useFilteredData(
    getAllProducts,
    pageNumber,
    query,
    sort
  );

  /**
   * infinite Scroll function
   */
  const lastProductRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  // useEffect(() => {
  //   setProducts([]);
  // }, [query]);
  // useEffect(() => {
  //   setLoading(true);
  //   getAllProducts(pageNumber, null, null)
  //     .then((res) => {
  //       setProducts((prevProducts) => {
  //         return [...new Set([...prevProducts, ...res.data.data.products])];
  //       });
  //       setHasMore(
  //         res.data.data.pager.current_page < res.data.data.pager.total_pages
  //       );
  //       setLoading(false);
  //     })
  //     .catch((err) => toast.error("مشکلی پیش آمده دوباره امتحان کنید"));
  // }, [query, pageNumber, sort]);
  /*
   * handling search after enter key
   */

  const handleSearch = (e) => {
    if (e.keyCode === 13) {
      setQuery(e.target.value);
      setPageNumber(1);
      setSort(4);
      setSearch("");
    }
  };

  return (
    <>
      <ToastContainer />
      <Input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyUp={handleSearch}
      />
      <SortList sortList={sortingList} />

      <ProductsList ref={lastProductRef} products={products} />
      <div>{loading && "Loading..."}</div>
    </>
  );
};

export default ProductsPage;
