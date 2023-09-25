"use client";

function FilterOptions() {
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
