import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import cartoonReducer from './Containers/organisms/CartoonListWrapper/reducer';
import filterOptionReducer from './Containers/molecules/FilterCartoonList/reducer';

export default history =>
  combineReducers({
    router: connectRouter(history),
    cartoonState: cartoonReducer,
    filterOptionState: filterOptionReducer,
  });
