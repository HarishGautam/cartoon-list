import { cartoonWrapperActions } from './constants';

export const addCartoonList = () => ({
  type: cartoonWrapperActions.addCartoonList,
});

export const addCartoonListSucess = cartoonList => ({
  type: cartoonWrapperActions.addCartoonListSucess,
  cartoonList,
});
