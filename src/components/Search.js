import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [searchTerm, updateSearchTerm] = useState("");
  const [results, updateResults] = useState([]);
  const onSearchSubmit = (e) => {
    updateSearchTerm(e.target.value);
  };

  console.log(results);

  useEffect(() => {
    const search = async () => {
      const result = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          srsearch: searchTerm,
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
        },
      });

      updateResults(result.data.query.search);
    };

    const timeeoutId = setTimeout(() => {
      if (searchTerm) {
        search();
      }
    }, 1300);

    return () => {
      clearTimeout(timeeoutId);
    };
  }, [searchTerm]);

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated div">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            Go to Wiki
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }} />
        </div>
      </div>
    );
  });
  return (
    <div>
      <div
        className="ui form"
        onSubmit={(e) => {
          e.preventDefault();
          console.log(searchTerm);
        }}
        style={{ width: "30%", margin: "20px" }}
      >
        <div className="ui field">
          <label>Enter Search Term</label>
          <input
            className="input"
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={onSearchSubmit}
          />
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;
