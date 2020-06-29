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
        <input
          type="text"
          name="userInput"
          value={userInput}
          onChange={handleChange}
        />

        <button>Search</button>
      </form>
    </div>
  );
};

export default SearchForm;
