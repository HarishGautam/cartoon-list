import { put, takeLatest, call } from 'redux-saga/effects';
import { addCartoonListSucess } from './actions';
import { cartoonWrapperActions } from './constants';
import ServiceUtil from '../../../shared/Utilities/fetch';
import { api } from '../../../shared/Constants/api';

export function* loadCartoonListkSaga() {
  try {
    const data = yield call(ServiceUtil.fetched, api.getCartoonList);
    yield put(addCartoonListSucess(data.results));
  } catch (err) {
    console.log(err);
  }
}

export default function* fetchCartoonListSaga() {
  yield takeLatest(cartoonWrapperActions.addCartoonList, loadCartoonListkSaga);
}
