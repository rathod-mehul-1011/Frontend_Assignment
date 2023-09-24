import React from "react";

const Button = ({ type, onClick, className, children, ...rest }) => {
  return (
    <button
      type={type || "button"}
      onClick={onClick || null}
      className={`${className} px-4 py-2 rounded-md text-base font-medium leading-[150%]`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
