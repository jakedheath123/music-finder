import React, { useState } from "react";

const SearchForm = ({ searchByArtist }) => {
  const [userQuery, setUserQuery] = useState("");

  const onSubmit = event => {
    event.preventDefault();
    const noSpacesQuery = userQuery.split(" ").join("");
    searchByArtist(noSpacesQuery);
    setUserQuery("");
  };

  return (
    <section className="search-form">
      <form onSubmit={onSubmit}>
        <div>
          <input
            type="text"
            name="userInput"
            value={userQuery}
            onChange={event => setUserQuery(event.target.value)}
            placeholder="Search"
            required
          />
          <button className="icon">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
