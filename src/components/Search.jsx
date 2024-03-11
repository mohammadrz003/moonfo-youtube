import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

const Search = ({ className, onSearchKeyword }) => {
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearchKeyword({ searchKeyword });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex flex-col gap-y-2.5 relative ${className}`}
    >
      <div className="relative">
        <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 text-[#959EAD]" />
        <input
          className="placeholder:font-bold font-semibold text-dark-soft placeholder:text-[#959EAD] rounded-lg pl-12 pr-3 w-full py-3 focus:outline-none shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] md:py-4"
          type="text"
          placeholder="Search article"
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="w-full bg-primary text-white font-semibold rounded-lg px-5 py-3 md:absolute md:right-2 md:top-1/2 md:-translate-y-1/2 md:w-fit md:py-2"
      >
        Search
      </button>
    </form>
  );
};

export default Search;
