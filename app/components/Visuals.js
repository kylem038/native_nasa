import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Alert,
  Animated,
  Image,
  ScrollView,
  Switch,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';

import MassChart from './MassChart';
import FellPerYearChart from './FellPerYearChart';
import meteorContainer from '../containers/meteorContainer';

class Visuals extends Component {
  constructor (props) {
   super(props);
 }

 render() {
   const { meteors } = this.props;

    return (
      <Image source={require('../assets/space-bkgd.png')} style={styles.container}>
        <Text style={styles.text}>Visuals</Text>
        <ScrollView style={styles.visualsContainer}>
          <View>
            <Text style={styles.title}>Meteorite Mass</Text>
            <MassChart meteors={this.props.meteors} meteorGrouping={this.props.meteorGrouping}/>
          </View>
          <View style={styles.perYear}>
            <Text style={styles.title}>Meteors Per Year</Text>
            <FellPerYearChart meteors={this.props.meteors} meteorYearGrouping={this.props.meteorYearGrouping}/>
          </View>
        </ScrollView>
      </Image>
    )
  }
}

export default meteorContainer(Visuals);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    height: null,
    width: null,
  },
  text: {
    color: 'white',
    fontSize: 35,
    textAlign: 'center',
    top: 70,
  },
  visualsContainer: {
    height: 500,
    top: 80,
  },
  perYear: {
    height: 500,
  },
  title: {
    color: 'white',
    fontSize: 25,
    textAlign: 'center',
  },
  yearsText: {
    color: 'white',
    margin: 5,
  }
});
