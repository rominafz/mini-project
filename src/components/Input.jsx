import React from "react";

const Input = ({ value, onChange, onKeyUp }) => {
  return (
    <div className="input-control">
      <input
        className="input-control__input"
        type="text"
        value={value}
        onChange={onChange}
        onKeyUp={onKeyUp}
      />
    </div>
  );
};

export default Input;
