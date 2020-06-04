import { changeOption } from './constants';

export const changeOptionsKey = (key, subKey, value) => ({
  type: changeOption,
  key,
  subKey,
  value,
});
