import React from "react";
import { CgSearch } from "react-icons/cg";

const Input = ({ value, onChange, onKeyUp }) => {
  return (
    <div className="input-control">
      <CgSearch className="input-control__icon" />
      <input
        className="input-control__input"
        type="text"
        value={value}
        onChange={onChange}
        onKeyUp={onKeyUp}
        placeholder="جستجو در دیجی کالا..."
      />
    </div>
  );
};

export default Input;
