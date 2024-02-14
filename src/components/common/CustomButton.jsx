import React from "react";

const CustomButton = (props) => {
  return (
    <button
      className={`py-3 px-[45px] border hover:after:bottom-[-1.5px] hover:after:left-[-1.5px] hover:after:opacity-0 border-white rounded-full font-bold text-base text-white relative after:absolute after:-bottom-[6px] after:-left-[6px] after:w-full after:h-full after:bg-[url("/assets/common/button-white-haft-border.svg")] after:bg-no-repeat after:bg-left-bottom after:duration-300 ${props.style} `}
    >
      {props.title}
    </button>
  );
};

export default CustomButton;
