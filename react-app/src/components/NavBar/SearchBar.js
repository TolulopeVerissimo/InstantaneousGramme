import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// import { getSearchResults } from "../../Store/user";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  let regex = new RegExp(`w*${query}w*`, "i");
  const searchResults = useSelector((state) =>
    Object.values(state.users).filter((user) => regex.test(user.username))
  );

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
      {query && (
        <ul className='search-results__dropdown'>
          {searchResults.map((user) => (
            <li key={user.id}>
              <div className='search-results__user-card'>
                <div className='search-results__pic-container'>
                  <img
                    className='search-results__pic'
                    src={user.profilePicture}
                    alt='profile'
                  />
                </div>
                <div>{user.username}</div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;