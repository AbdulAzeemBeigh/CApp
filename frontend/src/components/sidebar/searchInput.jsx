/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { IoSearchCircleSharp } from "react-icons/io5";

const searchInput = () => {
  return (
    <form className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search…"
        className="input input-bordered rounded-full"
      />
      <button type="submit" className="btn btn-circle bg-sky-500 text-white">
        <IoSearchCircleSharp />
      </button>
    </form>
  );
};
// eslint-disable-next-line no-undef
export default searchInput;
