import React from 'react';
import PropTypes from 'prop-types';
import './CartoonListItems.scss';
import { getTimeInyrs } from '../../../shared/Utilities/dateFunctions';

const CartoonListItems = props => {
  const { cartoonList } = props;
  return (
    <div className="cartoon-list-items">
      {cartoonList.map(item => (
        <div className="cartoon-list-item">
          <div className="img-container">
            <img alt={item.name} className="" src={item.image} />
            <div className="img-title">
              <div className="cartoon-name">{item.name}</div>
              <span className="">
                {`id: ${item.id} - created ${getTimeInyrs(
                  item.created
                )} years ago`}
              </span>
            </div>
          </div>
          <div className="carton-info">
            <div className="info-row">
              <span className="label">Status</span>
              <span className="value-txt">{item.status}</span>
            </div>
            <div className="info-row">
              <span className="label">Species</span>
              <span className="value-txt">{item.species}</span>
            </div>
            <div className="info-row">
              <span className="label">Gender</span>
              <span className="value-txt">{item.gender}</span>
            </div>
            <div className="info-row">
              <span className="label">origin</span>
              <span className="value-txt">{item.origin.name}</span>
            </div>
            <div className="info-row">
              <span className="label">Last Loocation</span>
              <span className="value-txt">{item.location.name}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
CartoonListItems.propTypes = {
  cartoonList: PropTypes.array.isRequired,
};

export default CartoonListItems;
