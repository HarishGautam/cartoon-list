/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
/* eslint-disable extra-rules/no-commented-out-code */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import FilterOptions from '../FilterOptions';
import './FilterCartoonList.scss';

const FilterCartoonList = props => {
  const { filterChanged, filterList } = props;
  const [hideFilterList, setHideFilterList] = useState(false);
  const toggleHandler = event => {
    event.stopPropagation();
    setHideFilterList(!hideFilterList);
  };
  return (
    <div
      className={classnames(
        'filter-wrapper',
        `${hideFilterList ? 'expand-filter' : ''}`
      )}
    >
      <div
        role="button"
        onClick={toggleHandler}
        onKeyPrress={toggleHandler}
        className="filter-heading"
      >
        <span>Filters</span>
        <i
          className={classnames(
            'fa',
            `${hideFilterList ? 'fa-minus-circle' : 'fa-plus-circle'}`
          )}
          aria-hidden="true"
        />
      </div>
      {filterList.length > 0 &&
        filterList.map(item => {
          return (
            <FilterOptions
              filter={item}
              key={item.key}
              changed={(subOption, value) =>
                filterChanged(item.key, subOption, value)
              }
            />
          );
        })}
    </div>
  );
};
FilterCartoonList.propTypes = {
  filterChanged: PropTypes.func.isRequired,
  filterList: PropTypes.array.isRequired,
};

export default FilterCartoonList;
