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
    <section>
      <form onSubmit={onSubmit}>
        <div style={{ border: "1px solid black" }}>
          <input
            type="text"
            name="userInput"
            value={userQuery}
            onChange={event => setUserQuery(event.target.value)}
            style={{ border: "none", textAlign: "center" }}
            placeholder="Search"
            required
          />
          <button style={{ padding: "0", border: "0" }}>
            <i className="fas fa-search"></i>
          </button>
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
