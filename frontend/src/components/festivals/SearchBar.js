import React, { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { loadFestivals } from "../../actions/festivals";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const input = useRef(null);
  const dispatch = useDispatch();

  const searchValue = () => {
    setSearchTerm(input.current.value);
  };

  useEffect(() => {
    dispatch(loadFestivals(searchTerm));
  }, [searchTerm]);

  return (
    <form className="search-form" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        placeholder="Search for your festival"
        onChange={searchValue}
        ref={input}
        spellcheck="false"
      />
    </form>
  );
};

export default SearchBar;
