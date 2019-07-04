import React from "react";
import "./searchbox.css";

export const SearchBox = ({ placeholder, handleChange }) => (
     <input type="search" className="search-box"
          placeholder={placeholder}
          onChange={handleChange}
     />
)