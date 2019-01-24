import React from 'react';

const Search = props => {
  function handleChange(e) {
    console.log(e.target.value);
    props.searchBoxChange(e.target.value);
  }
  function clearTextBox() {
    props.searchBoxChange();
  }
  return (
    <div id="search-bar">
      <form
        onSubmit={e => {
          e.preventDefault();
          console.log('event: ', props.searchValue);
          props.fetchSearchedItems(props.searchValue);
        }}
        onChange={handleChange}
      >
        <input type="search" name="searchbox" size="35" placeholder="search" />
      </form>
    </div>
  );
};

export default Search;
