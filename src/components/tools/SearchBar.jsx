import { useState } from "react";

const SearchBar = ({ data, setResults, setSearchQuery }) => {
  const [newQuery, setNewQuery] = useState("");

  const onChange = (event) => {
    const query = event.target.value;
    let searchresults = [];
    setSearchQuery(query);
    setNewQuery(query);

    if (query.length) {
      data.map((item) => {
        if (item.title.toLowerCase().includes(query.toLowerCase())) {
          searchresults.push(item);
        }
      });
      let uniqueSearchResults = [...new Set(searchresults)];
      setResults(uniqueSearchResults);
    } else {
      setResults(data);
    }
  };

  return (
    <div className="searchbar">
      <input
        type="text"
        placeholder="Search ... "
        value={newQuery}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBar;
