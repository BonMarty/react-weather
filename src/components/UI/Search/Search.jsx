import React from 'react';
import { SearchInput } from './SeacrhInput/SearchInput';
import { SearchButton } from './SearchButton/SearchButton';

export const Search = (props) => {
  return (
    <div className="search-wrapper">
      <SearchInput
        type="text"
        placeholder="Enter Location"
        value={props.location}
        onChange={(e) => props.setLocation(e.target.value)}
        onKeyPress={props.searchLocation}
      />
      <SearchButton onClick={props.searchLocation}>Search</SearchButton>
    </div>
  );
};
