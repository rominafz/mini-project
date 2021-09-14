import axios from "axios";
export const getAllProducts = async (pageNumber, query, sort) => {
  let res = await axios({
    method: "get",
    url: "https://www.digikala.com/front-end/search/?&price[min]=0&price[max]=100000&has_selling_stock=1/",
    params: { rows: 24, q: query, page: pageNumber, sort: sort },
    headers: { token: "mpfKW9ghVTCSuBZ7qTkSmEyvL38ShZxv" },
  }).catch((err) => console.log("مشکلی پیش آمده لطفا دوباره تلاش کنید"));
  return res;
};
