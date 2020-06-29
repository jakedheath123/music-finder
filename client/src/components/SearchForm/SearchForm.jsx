import React, { useState } from "react";

const SearchForm = ({ searchByArtist }) => {
  const [userInput, setUserInput] = useState("");

  const handleChange = event => {
    const { value } = event.target;
    setUserInput(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const noSpacesInput = userInput.split(" ").join("");
    searchByArtist(noSpacesInput);
    setUserInput("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div style={{ border: "1px solid black" }}>
          <input
            type="text"
            name="userInput"
            value={userInput}
            onChange={handleChange}
            style={{ border: "none", textAlign: "center" }}
            placeholder="Search"
          />

          <button style={{ padding: "0", border: "0" }}>
            <i className="fas fa-search"></i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
