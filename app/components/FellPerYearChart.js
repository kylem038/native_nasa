import React, { Component } from 'react';
const _ = require('underscore');
const moment = require('moment');

import {
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  Easing,
  ScrollView
} from 'react-native';

export default class FellPerYearChart extends Component{
  constructor (props) {
    super(props);
    this.state = {
      bounceValue: new Animated.Value(0.7)
    };
  }

  componentDidMount() {
    requestAnimationFrame(() => {
  		this._animateIn();
    });
  }

  _animateIn = () => {
    Animated.spring(
      this.state.bounceValue,
      {
        toValue: 1,
        friction: 1,
      }
    ).start(this._animateOut);
  }

  _animateOut = () => {
    Animated.spring(
      this.state.bounceValue,
      {
        toValue: 0.8,
        friction: 1,
      }
    );
  };

  render() {
    let { bounceValue } = this.state;
    let { meteorYearGrouping } = this.props;
    let meteorBars = [];
    Object.values(meteorYearGrouping).forEach((sizeGroup, i) => {
      let yearBarHeight = sizeGroup.meteors.length ? sizeGroup.meteors.length : 2;
      meteorBars.push(
          <View key={i}>
            <Animated.View style={[{transform: [{scale: bounceValue}], height: (yearBarHeight / 2), width: (yearBarHeight / 2), backgroundColor: sizeGroup.scoreColor}, styles.bar]} />
            <Text style={styles.label}>{sizeGroup.label}</Text>
          </View>
      )
    })

    return (
      <View style={styles.yearChart}>
        {meteorBars}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  yearChart: {
    flexDirection: 'row',
    height: 100,
    justifyContent: 'center',
    margin: 1,
    top: 5,
  },
  bar: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    marginLeft: 2,
    width: 35,
  },
  label: {
    color: 'white',
    fontSize: 7,
  }
});
