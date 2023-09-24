import React, { forwardRef } from "react";
import Label from "./Label";

const TextInput = forwardRef(
  (
    {
      label,
      placeholder,
      isRequired,
      labelClass,
      textInputClass,
      containerClass,
      error,
      ...rest
    },
    ref
  ) => {
    return (
      <div className={`${containerClass} mt-6 text-left`}>
        <Label label={label} isRequired={isRequired} labelClass={labelClass} />
        <input
          ref={ref}
          type="text"
          placeholder={placeholder}
          className={`${textInputClass} rounded-[5px] border border-mercury bg-white text-boulder px-3 py-2 w-full text-sm font-normal focus-visible:outline-none leading-5`}
          {...rest} // Spreading any other props passed to the component.
        />
        {error && <span className="text-roman text-sm mt-1">{error}</span>}
      </div>
    );
  }
);

export default TextInput;
