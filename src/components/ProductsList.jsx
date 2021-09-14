import React from "react";
import Product from "./Product";
const ProductsList = React.forwardRef(({ products }, ref) => {
  return (
    <div className="container">
      {products?.map((item, index) => {
        if (products.length === index + 1) {
          return (
            <Product
              ref={ref}
              key={item.id}
              image={item.images.main}
              title={item.title}
              price={item.price.selling_price}
            />
          );
        } else {
          return (
            <Product
              key={item.id}
              image={item.images.main}
              title={item.title}
              price={item.price.selling_price}
            />
          );
        }
      })}
    </div>
  );
});

export default ProductsList;
