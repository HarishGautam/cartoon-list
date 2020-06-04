import { cartoonWrapperActions } from './constants';
import { updateObject } from '../../../shared/Utilities/utility';

const initialState = {
  cartoonList: [],
  isFetching: false,
};

const cartoonReducer = (state = initialState, action) => {
  const { type, cartoonList } = action;

  switch (type) {
    case cartoonWrapperActions.addCartoonList: {
      return updateObject(state, { isFetching: true });
    }
    case cartoonWrapperActions.addCartoonListSucess: {
      return Object.assign(
        { ...state },
        { isFetching: false, cartoonList: [...cartoonList] }
      );
    }
    default:
      return state;
  }
};

export default cartoonReducer;
