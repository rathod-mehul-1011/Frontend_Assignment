import React from "react";

const RadioButton = ({ labelClass, radioClass, value1, value2 }) => {
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-1">
        <input
          type="radio"
          className={radioClass}
          name="name"
          value={value1 || "Quick apply"}
        />
        <label
          htmlFor=""
          className={`${labelClass} text-sm font-normal leading-5 text-boulder`}
        >
          {value1 || "Quick apply"}
        </label>
      </div>
      <div className="flex items-center gap-1">
        <input
          type="radio"
          className={radioClass}
          name="name"
          value={value2 || "External apply"}
        />
        <label
          htmlFor=""
          className={`${labelClass} text-sm font-normal leading-5 text-boulder`}
        >
          {value2 || "External apply"}
        </label>
      </div>
    </div>
  );
};

export default RadioButton;
