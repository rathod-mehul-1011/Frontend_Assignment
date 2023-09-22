import React from "react";
import Label from "./Label";

const TextInput = ({
  label,
  placeholder,
  isRequired,
  labelClass,
  textInputClass,
  containerClass
}) => {
  return (
    <div className={`${containerClass} mt-6 text-left`}>
      <Label label={label} isRequired={isRequired} labelClass={labelClass} />
      <input
        type="text"
        placeholder={placeholder}
        className={`${textInputClass} rounded-[5px] border border-mercury bg-white text-boulder px-3 py-2 w-full text-sm font-normal focus-visible:outline-none leading-5`}
      />
    </div>
  );
};

export default TextInput;
