import { connect } from 'react-redux';
import FilterCartoonList from '../../../Components/molecules/FilterCartoonList';
import { changeOptionsKey } from './actions';

const mapDispatchToProps = dispatch => ({
  filterChanged: (key, subKey, value) =>
    dispatch(changeOptionsKey(key, subKey, value)),
});
const mapStateToProps = state => ({
  filterList: state.filterOptionState,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterCartoonList);
