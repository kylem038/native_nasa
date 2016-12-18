import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  Easing,
  ScrollView
} from 'react-native';

const moment = require('moment');

export default class MassChart extends Component {
  constructor(props) {
    super(props);
    this.state={};
  }

  render() {
    const { meteors } = this.props;

    return(
      <View style={styles.massChart}>
      {this.props.meteors.sort(function(a,b) {
        let aHeight = a.mass ? a.mass : 0
        let bHeight = b.mass ? b.mass : 0
        return bHeight - aHeight
      }).map(function(meteor, i) {
        let meteorMass = meteor.mass ? Math.round(meteor.mass / 10) : 2
        if(meteorMass >= 1000) {
          scoreColor = '#1E77E2'
        }
        if(meteorMass > 500 && meteorMass < 1000) {
          scoreColor = '#6A5'
        }
        if(meteorMass > 200 && meteorMass < 500) {
          scoreColor = '#FED024'
        }
        if(meteorMass > 50 && meteorMass < 200) {
          scoreColor = '#FA5732'
        }
        if(meteorMass < 50) {
          scoreColor = '#C21515'
        }
        return (
          <View style={styles.massChart} key={i}>
            <View style={[{height: meteorMass, backgroundColor: scoreColor}, styles.bar, styles.barPageCount]}>
            </View>
           {/* <Animated.View
             style={[{transform: [{scale: bounceValue}], height: meteorMass,backgroundColor:scoreColor}, styles.bar, styles.barPageCount]}
           /> */}
          </View>
        )}
      )}
      </View>
      // <ScrollView
      //   style={styles.scrollView}>
      //   {meteors.map(function(meteor, i) {
      //     return <Text key={i} meteor={meteor}>Year:
      //       {moment(meteor.year).format('YYYY')} Mass: {meteor.mass}</Text>}
      //   )}
      // </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  massChart: {
    top: 10,
    height: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 1,
  },
  bar: {
    width: 10,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    marginLeft: 2,
  },
  barPageCount: {
  }
  // scrollView: {
  //   top: 30,
  //   backgroundColor: '#1E77E2',
  //   height: 800,
  // },
});
