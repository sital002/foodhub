"use client";
import { useState } from "react";

// npm install --save-dev @types/react-range-slider-input
// import RangeSlider from "react-range-slider-input";
// import "react-range-slider-input/dist/style.css";

function FilterOptions() {
  // const [value, setValue] = useState(0);
  // console.log(value);

  return (
    <div className="block sm:hidden lg:block">
      <div className="my-3">
        {/* <RangeSlider value={value} onInput={setValue} /> */}
      </div>
      <button className="px-4 py-2 bg-sky-700 text-white rounded ml-3">
        Reset Filter
      </button>
      <button className="px-4 py-2 bg-red-500 text-white rounded ml-3">
        Apply Filter
      </button>
    </div>
  );
}

export default FilterOptions;
