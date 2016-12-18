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
      <ScrollView horizontal={true}>
        <View style={styles.massChart}>
        {meteors.sort(function(a,b) {
          let aHeight = a.mass ? a.mass : 0
          let bHeight = b.mass ? b.mass : 0
          return bHeight - aHeight
        }).map(function(meteor, i) {
          let meteorMassHeight = meteor.mass ? Math.round(meteor.mass / 10) : 2
          if(meteorMassHeight >= 1000) {
            scoreColor = '#1E77E2'
          }
          if(meteorMassHeight > 500 && meteorMassHeight < 1000) {
            scoreColor = '#6A5'
          }
          if(meteorMassHeight > 200 && meteorMassHeight < 500) {
            scoreColor = '#FED024'
          }
          if(meteorMassHeight > 50 && meteorMassHeight < 200) {
            scoreColor = '#FA5732'
          }
          if(meteorMassHeight < 50) {
            scoreColor = '#C21515'
          }
          return (
            <View style={styles.massChart} key={i}>
              <View style={[{height: meteorMassHeight, backgroundColor: scoreColor}, styles.bar, styles.barPageCount]}>
              </View>
             {/* <Animated.View
               style={[{transform: [{scale: bounceValue}], height: meteorMassHeight,backgroundColor:scoreColor}, styles.bar, styles.barPageCount]}
             /> */}
            </View>
          )}
        )}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  massChart: {
    top: 5,
    height: 500,
    flexDirection: 'row',
    flex: 1,
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
});
