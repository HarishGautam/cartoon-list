import { changeOption } from './constants';

const initialState = [
  {
    heading: 'Species',
    key: 'species',
    subOptions: [
      { key: 'Human', label: 'Human', checked: false },
      {
        key: 'Mythology',
        label: 'Mythology',
        checked: false,
      },
      {
        key: 'Alien',
        label: 'Other Species',
        checked: false,
      },
    ],
  },
  {
    heading: 'Gender',
    key: 'gender',
    subOptions: [
      { key: 'Male', label: 'Male', checked: false },
      { key: 'Female', label: 'Female', checked: false },
    ],
  },
  {
    heading: 'Origin',
    key: 'origin',
    subOptions: [
      { key: 'unknown', label: 'Unknown', checked: false },
      {
        key: 'post-Acopalytic',
        label: 'Post-Acopalytic earth',
        checked: false,
      },
      { key: 'Nuptia4', label: 'Nuptia 4', checked: false },
      { key: 'Other Origins', label: 'Other Origins..', checked: false },
    ],
  },
];
const filterOptionReducer = (state = initialState, action) => {
  const { key, subKey, value, type } = action;

  switch (type) {
    case changeOption: {
      const index = state.findIndex(item => item.key === key);
      const subIndex = state[index].subOptions.findIndex(
        item => item.key === subKey
      );
      const newObj = {
        ...state[index].subOptions[subIndex],
        ...{ checked: value },
      };
      const newSubOptions = Object.assign([...state[index].subOptions], {
        [subIndex]: newObj,
      });
      const newKeyObj = { ...state[index], ...{ subOptions: newSubOptions } };
      return Object.assign([...state], { [index]: newKeyObj });
    }
    default: {
      return state;
    }
  }
};

export default filterOptionReducer;
