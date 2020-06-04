import { all } from 'redux-saga/effects';
import fetchCartoonListSaga from '../src/Containers/organisms/CartoonListWrapper/saga';
export default function* rootSaga() {
  yield all([fetchCartoonListSaga()]);
}
