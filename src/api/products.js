import axios from "axios";
export const getAllProducts = async () => {
  let res = await axios({
    method: "get",
    url: "https://www.digikala.com/front-end/search/?page=1&rows=25&price[min]=0&price[max]=100000/",
    headers: { token: "mpfKW9ghVTCSuBZ7qTkSmEyvL38ShZxv" },
  }).catch((err) => console.log("مشکلی پیش آمده لطفا دوباره تلاش کنید"));
  return res;
};
