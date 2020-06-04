import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import FilterCartoonList from '../../../Containers/molecules/FilterCartoonList/FilterCartoonList';
import DisplaySection from '../../molecules/DisplaySection';

import './CartoonWrapper.scss';

const CartoonWrapper = ({
  cartoonList,
  isFetching,
  getCartoonList,
  filterList,
}) => {
  useEffect(() => {
    getCartoonList();
  }, []);
  const getCartoonComponent = () => {
    return (
      <div className="cartoon-app-wrapper">
        <FilterCartoonList />
        <DisplaySection cartoonList={cartoonList} filterList={filterList} />
      </div>
    );
  };
  return (
    <div className="cartoon-app-wrapper">
      {isFetching ? (
        <div className="is-loading">Loading.....</div>
      ) : (
        getCartoonComponent()
      )}
    </div>
  );
};
export default CartoonWrapper;
CartoonWrapper.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  cartoonList: PropTypes.array.isRequired,
  getCartoonList: PropTypes.func.isRequired,
  filterList: PropTypes.array.isRequired,
};
