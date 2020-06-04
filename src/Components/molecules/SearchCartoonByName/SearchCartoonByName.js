/* eslint-disable no-unused-vars */
import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import './SearchCartoonByName.scss';

const SearchCartoonByName = props => {
  const { searchCartoon } = props;
  const wordRef = useRef('');
  return (
    <div className="search-section">
      <input
        className="search-cartoon-input"
        type="text"
        name="searchedCartoonList"
        placeholder="Enter the Cartton Name"
        ref={wordRef}
      />
      <button
        type="button"
        onClick={() => searchCartoon(wordRef.current.value)}
        onKeyPress={() => searchCartoon(wordRef.current.value)}
      >
        Search cartoon
      </button>
    </div>
  );
};
SearchCartoonByName.propTypes = {
  searchCartoon: PropTypes.func.isRequired,
};

export default SearchCartoonByName;
