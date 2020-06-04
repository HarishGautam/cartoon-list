import React from 'react';
import PropTypes from 'prop-types';
import './FilterOptions.scss';
import { VersatileInput } from '../../atoms/VersatileInput';

const FilterOptions = props => {
  const { filter, changed } = props;
  return (
    <React.Fragment>
      <div className="filter-section">
        <h4 className="filter-grp-heading">{filter.heading}</h4>
        {filter.subOptions.map(item => {
          return (
            <div className="filter-row" key={item.key}>
              <VersatileInput
                elementType="checkbox"
                classList="checkbox-element"
                elementConfig={{
                  type: 'checkbox',
                }}
                checked={item.checked}
                changed={e => {
                  changed(item.key, e.target.checked);
                }}
              />
              <span className="">{item.label}</span>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};
FilterOptions.propTypes = {
  filter: PropTypes.object.isRequired,
  changed: PropTypes.func.isRequired,
};

export default FilterOptions;
