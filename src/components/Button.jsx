import React from "react";

export const Button = ({ onClick, children, className }) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};
