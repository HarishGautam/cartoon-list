import React from 'react';
import PropTypes from 'prop-types';
import { VersatileInput } from '../../atoms/VersatileInput';
import './SortList.scss';

const SortList = props => {
  const { sortByVal } = props;
  return (
    <div className="sortby-section">
      <span className="sortby-label">Sort By</span>
      <VersatileInput
        elementType="select"
        elementConfig={{
          options: [
            {
              value: 'ascending',
              displayValue: 'Ascending Order',
            },
            {
              value: 'descending',
              displayValue: 'Descending Order',
            },
          ],
        }}
        changed={e => sortByVal(e.target.value)}
      />
    </div>
  );
};
SortList.propTypes = {
  sortByVal: PropTypes.func.isRequired,
};

export default SortList;
