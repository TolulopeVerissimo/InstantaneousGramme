import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// import { getSearchResults } from "../../Store/user";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  let regex = new RegExp(`w*${query}w*`, "i");
  const searchResults = useSelector((state) =>
    Object.values(state.users).filter((user) => regex.test(user.username))
  );
  console.log(searchResults);

  //state.users.filter((user) => regex.test(user.username))

  useEffect(() => {
    // getSearchResults();
  }, [query]);

  return (
    <div className='navbar__search'>
      <i className='fas fa-search navbar__icon' />
      <input
        type='text'
        placeholder='Search'
        className='navbar__searchfield'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      ></input>
      <ul>
        {searchResults.map((user) => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
