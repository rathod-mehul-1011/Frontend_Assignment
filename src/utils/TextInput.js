import React from "react";

const TextInput = ({ label, placeholder, isRequired }) => {
  return (
    <div className="mt-6 text-left">
      <label
        htmlFor=""
        className="text-sm font-medium leading-5 text-mine-shaft mb-1"
      >
        {label}{isRequired && <span className="text-roman">*</span>}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        className="rounded-[5px] border border-mercury bg-white text-boulder px-3 py-2 w-full text-sm font-normal focus-visible:outline-none leading-5"
      />
    </div>
  );
};

export default TextInput;
