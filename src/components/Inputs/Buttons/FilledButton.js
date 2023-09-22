import React from "react";

const FilledButton = (props) => {
  return (
    <button
      type={props.type || "button"}
      onClick={props.onClick || null}
      className={`${props.className} px-4 py-2 bg-primary rounded-md shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] text-base font-medium text-white leading-[150%]`}
    >
      {props.children}
    </button>
  );
};

export default FilledButton;
