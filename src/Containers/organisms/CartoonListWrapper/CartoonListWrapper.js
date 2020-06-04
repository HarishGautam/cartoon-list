import { connect } from 'react-redux';
import ToDoApp from '../../../Components/organisms/CartoonWrapper';
import { addCartoonList } from './actions';

const mapDispatchToProps = dispatch => ({
  getCartoonList: () => dispatch(addCartoonList()),
});
const mapStateToProps = state => ({
  cartoonList: state.cartoonState.cartoonList,
  isFetching: state.cartoonState.isFetching,
  filterList: state.filterOptionState,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoApp);
