import { connect } from 'react-redux';
import { actionCreators } from '../actions/meteorActions';

const mapStateToProps = (state) => {
  const allMeteorsMass = {
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

  function findallMeteorsMass(mass) {
    if (!mass) { return; }
    if(mass <= 100) {
      return allMeteorsMass.AGroup.meteors.push(mass);
    }
    if(mass > 100 && mass <= 1000) {
      return allMeteorsMass.BGroup.meteors.push(mass);
    }
    if(mass > 1000 && mass <= 10000) {
      return allMeteorsMass.CGroup.meteors.push(mass);
    }
    if(mass > 10000 && mass <= 25000) {
      return allMeteorsMass.DGroup.meteors.push(mass);
    }
    if(mass > 25000 && mass <= 50000) {
      return allMeteorsMass.EGroup.meteors.push(mass);
    }
    if(mass > 50000 && mass <= 100000) {
      return allMeteorsMass.FGroup.meteors.push(mass);
    }
    if(mass > 100000 && mass <= 250000) {
      return allMeteorsMass.GGroup.meteors.push(mass);
    }
    if(mass > 250000 && mass <= 500000) {
      return allMeteorsMass.HGroup.meteors.push(mass);
    }
    if(mass > 500000) {
      return allMeteorsMass.IGroup.meteors.push(mass);
    }
  }

  const allMeteorsYears = {
    "AGroup": {
      label: "before 1700",
      scoreColor: '#fff',
      meteors: []
    },
    "BGroup": {
      label: "1700 to 1750",
      scoreColor: '#42c215',
      meteors: []
    },
    "CGroup": {
      label: "1750 to 1800",
      scoreColor: '#8000b4',
      meteors: []
    },
    "DGroup": {
      label: "1800 to 1850",
      scoreColor: '#C21515',
      meteors: []
    },
    "EGroup": {
      label: "1850 to 1900",
      scoreColor: '#FA5732',
      meteors: []
    },
    "FGroup": {
      label: "1900 to 1950",
      scoreColor: '#FED024',
      meteors: []
    },
    "GGroup": {
      label: "1950 to 2000",
      scoreColor: '#6A5',
      meteors: []
    },
    "HGroup": {
      label: "after 2000",
      scoreColor: '#1E77E2',
      meteors: []
    }
  };

  if (state.meteors.toJS().length > 0) {
    state.meteors.toJS().forEach((meteor) => {
      findallMeteorsMass(parseInt(meteor.mass));
      findallMeteorsYears(parseInt(meteor.year));
    });
  }

  function findallMeteorsYears(year) {
    if (!year) { return; }
    if(year <= 1700) { allMeteorsYears.AGroup.meteors.push(year); }
    if(year > 1700 && year <= 1750) { return allMeteorsYears.BGroup.meteors.push(year); }
    if(year > 1750 && year <= 1800) { return allMeteorsYears.CGroup.meteors.push(year);  }
    if(year > 1800 && year <= 1850) { return allMeteorsYears.DGroup.meteors.push(year);  }
    if(year > 1850 && year <= 1900) { return allMeteorsYears.EGroup.meteors.push(year);  }
    if(year > 1900 && year <= 1950) { return allMeteorsYears.FGroup.meteors.push(year); }
    if(year > 1950 && year <= 2000) { return allMeteorsYears.GGroup.meteors.push(year); }
    if(year > 2000) { return allMeteorsYears.HGroup.meteors.push(year); }
  }

  return { meteors: state.meteors, meteorGrouping: allMeteorsMass, meteorYearGrouping: allMeteorsYears };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMeteors: (meteors) => {
       dispatch(actionCreators.getMeteors(meteors));
     }
  };
};

export default connect(mapStateToProps, mapDispatchToProps);
