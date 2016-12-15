import { connect } from 'react-redux';
import { actionCreators } from '../actions/meteorActions';

const mapStateToProps = (state) => {
  return { meteors: state.meteors };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMeteor: (meteors) => {
       dispatch(actionCreators.getMeteor(meteors));
     }
  };
};

export default connect(mapStateToProps, mapDispatchToProps);
