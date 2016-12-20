import { connect } from 'react-redux';
import { actionCreators } from '../actions/meteorActions';

const mapStateToProps = (state) => {
  const allMeteors = {
    "AGroup": {
      label: "less than 100g",
      scoreColor: '#fff',
      meteors: []
    },
    "BGroup": {
      label: "100-1,000g",
      scoreColor: '#42c215',
      meteors: []
    },
    "CGroup": {
      label: "1,000-10,000g",
      scoreColor: '#8000b4',
      meteors: []
    },
    "DGroup": {
      label: "10,000-25,000g",
      scoreColor: '#C21515',
      meteors: []
    },
    "EGroup": {
      label: "25,000-50,000g",
      scoreColor: '#FA5732',
      meteors: []
    },
    "FGroup": {
      label: "50,000-100,000g",
      scoreColor: '#FED024',
      meteors: []
    },
    "GGroup": {
      label: "100,000-250,000g",
      scoreColor: '#6A5',
      meteors: []
    },
    "HGroup": {
      label: "250,000-500,000g",
      scoreColor: '#1E77E2',
      meteors: []
    },
    "IGroup": {
      label: "500,000-1Mg",
      scoreColor: '#f14949',
      meteors: []
    }
  };

  if (state.meteors.toJS().length > 0) {
    state.meteors.toJS().forEach((meteor) => {
      findAllMeteors(parseInt(meteor.mass));
    });
  }

  function findAllMeteors(mass) {
    if (!mass) { return; }
    if(mass <= 100) {
      return allMeteors.AGroup.meteors.push(mass);
    }
    if(mass > 100 && mass <= 1000) {
      return allMeteors.BGroup.meteors.push(mass);
    }
    if(mass > 1000 && mass <= 10000) {
      return allMeteors.CGroup.meteors.push(mass);
    }
    if(mass > 10000 && mass <= 25000) {
      return allMeteors.DGroup.meteors.push(mass);
    }
    if(mass > 25000 && mass <= 50000) {
      return allMeteors.EGroup.meteors.push(mass);
    }
    if(mass > 50000 && mass <= 100000) {
      return allMeteors.FGroup.meteors.push(mass);
    }
    if(mass > 100000 && mass <= 250000) {
      return allMeteors.GGroup.meteors.push(mass);
    }
    if(mass > 250000 && mass <= 500000) {
      return allMeteors.HGroup.meteors.push(mass);
    }
    if(mass > 500000) {
      return allMeteors.IGroup.meteors.push(mass);
    }
  }

  return { meteors: state.meteors, meteorGrouping: allMeteors };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMeteors: (meteors) => {
       dispatch(actionCreators.getMeteors(meteors));
     }
  };
};

export default connect(mapStateToProps, mapDispatchToProps);
