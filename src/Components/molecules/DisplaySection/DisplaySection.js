/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SelectedFilters from '../SelectedFilters/SelectedFilters';
import SearchCartoonByName from '../SearchCartoonByName';
import SortList from '../SortList';
import CartoonListItems from '../CartoonListItems';

import './DisplaySection.scss';

const DisplaySection = props => {
  const { cartoonList, filterList } = props;
  const [searchKeyWord, setSearchKeyWord] = useState('');
  const [sortingOrder, setSortingOrder] = useState('');
  const filterObj = {};
  filterList.forEach(element => {
    filterObj[element.key] = [];
    element.subOptions.forEach(item => {
      if (item.checked) {
        const obj = {
          label: item.label,
          subKey: item.key,
          mainKey: element.key,
        };
        filterObj[element.key].push(obj);
      }
    });
    if (!filterObj[element.key].length) {
      delete filterObj[element.key];
    }
  });
  let newCartoonList = cartoonList.filter(item => {
    for (const key in filterObj) {
      let testValue = item[key];
      if (key === 'origin') {
        testValue = item.origin.name;
      }
      const possibleValues = filterObj[key].map(element => element.subKey);
      if (!possibleValues.includes(testValue)) {
        return false;
      }
    }
    return true;
  });
  if (searchKeyWord) {
    newCartoonList = newCartoonList.filter(item => {
      return item.name.toLowerCase().indexOf(searchKeyWord.toLowerCase()) > -1;
    });
  }
  if (sortingOrder) {
    newCartoonList.sort((itemA, itemB) => {
      return sortingOrder === 'ascending'
        ? itemA.id - itemB.id
        : itemB.id - itemA.id;
    });
  }

  return (
    <div className="display-list-wrapper">
      <SelectedFilters filterObj={filterObj} />
      <div className="search-sort-container">
        <SearchCartoonByName searchCartoon={value => setSearchKeyWord(value)} />
        <SortList sortByVal={value => setSortingOrder(value)} />
      </div>
      <CartoonListItems cartoonList={newCartoonList} />
    </div>
  );
};
DisplaySection.propTypes = {
  cartoonList: PropTypes.array.isRequired,
  filterList: PropTypes.array.isRequired,
};

export default DisplaySection;
