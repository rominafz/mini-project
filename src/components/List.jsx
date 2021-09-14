import React from "react";

const List = ({ className, children, onClick }) => {
  return (
    <li className={className} onClick={onClick}>
      {children}
    </li>
  );
};

export default List;
