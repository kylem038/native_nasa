import { connect } from 'react-redux';
import { actionCreators } from '../actions/meteorActions';

const mapStateToProps = (state) => {
  return { meteors: state.meteors };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMeteors: (meteors) => {
       dispatch(actionCreators.getMeteors(meteors));
     }
  };
};

export default connect(mapStateToProps, mapDispatchToProps);
