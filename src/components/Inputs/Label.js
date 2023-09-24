import React from "react";

const Label = ({ label, isRequired, labelClass, ...rest }) => {
  return (
    <label
      htmlFor=""
      className={`${labelClass} text-sm font-medium leading-5 text-mine-shaft mb-1`}
      {...rest}
    >
      {label}
      {isRequired && <span className="text-roman">*</span>}
    </label>
  );
};

export default Label;
