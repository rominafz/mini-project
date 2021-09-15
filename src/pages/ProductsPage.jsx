import React, { useState, useRef, useCallback } from "react";
import { ToastContainer } from "react-toastify";
import Input from "../components/Input";
import ProductsList from "../components/ProductsList";
import SortList from "../components/SortList";
import useFilteredData from "../hooks/useFilteredData";
import { Loading } from "../components/Loading";
import { SORTINGLIST } from "../constant/SortList";
const ProductsPage = () => {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [sort, setSort] = useState(SORTINGLIST[0]?.id);
  const observer = useRef();

  /*
   * destructring from useFilteredData Hooks
   */
  const { firstLoading, loading, products, hasMore } = useFilteredData(
    pageNumber,
    query,
    sort
  );

  /*
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
  /**
   * handle sorting item
   */
  const handleSort = (item) => {
    setSort(item.id);
  };

  return (
    <>
      {firstLoading ? (
        <Loading />
      ) : (
        // <div>loading...</div>
        <div className="container">
          <ToastContainer />
          <section className="container__filter">
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyUp={handleSearch}
            />
            <SortList sortList={SORTINGLIST} onClick={handleSort} sort={sort} />
          </section>
          <section className="container__products">
            <ProductsList ref={lastProductRef} products={products} />
          </section>
          {loading && (
            <Loading />
            // <div>loading...</div>
          )}
        </div>
      )}
    </>
  );
};

export default ProductsPage;
