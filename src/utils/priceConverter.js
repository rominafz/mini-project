/**
 * Change the price to Rial and seprate with comma's
 */
export const priceConverter = (price) => {
  let newPrice = price?.toString().slice(0, -1);
  newPrice = Number(newPrice).toLocaleString();
  return newPrice;
};
