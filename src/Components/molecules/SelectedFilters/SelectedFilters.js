/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable extra-rules/no-commented-out-code */
/* eslint-disable no-unused-vars */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { changeOptionsKey } from '../../../Containers/molecules/FilterCartoonList/actions';
import './SelectedFilters.scss';

const SelectedFilters = props => {
  const { filterObj, removeFilter } = props;
  let checkedFilterList = [];
  Object.keys(filterObj).forEach(key => {
    checkedFilterList = checkedFilterList.concat([...filterObj[key]]);
  });
  return (
    <React.Fragment>
      <div className="selected-filters-heading">Selected Filters </div>
      <div className="selected-filters">
        {checkedFilterList.length > 0 &&
          checkedFilterList.map(item => (
            <div
              onClick={() => removeFilter(item.mainKey, item.subKey, false)}
              onKeyPress={() => removeFilter(item.mainKey, item.subKey, false)}
              key={item}
              className="selected-item"
            >
              <span className="filter-label">{item.label}</span>
              <span className="">X</span>
            </div>
          ))}
      </div>
    </React.Fragment>
  );
};
SelectedFilters.propTypes = {
  removeFilter: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  removeFilter: (key, subKey, value) =>
    dispatch(changeOptionsKey(key, subKey, value)),
});

export default connect(
  null,
  mapDispatchToProps
)(SelectedFilters);
