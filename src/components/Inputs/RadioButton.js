import React from "react";

const RadioButton = ({ labelClass, radioClass, value, name, ...rest }) => {
  return (
    <div className="flex items-center gap-1">
      <input
        type="radio"
        className={radioClass}
        name={name}
        value={value}
        {...rest}
      />
      <label
        htmlFor=""
        className={`${labelClass} text-sm font-normal leading-5 text-boulder`}
      >
        {value}
      </label>
    </div>
  );
};

export default RadioButton;
