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

const _ = require('underscore');

export default class MassChart extends Component {
  constructor(props) {
    super(props);
    this.state={
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
    ).start(this._animateIn);
  };

  render() {
    let { bounceValue } = this.state;
    let { meteorGrouping } = this.props;
    console.log('meteorGrouping', meteorGrouping);

    let meteorCircles = [];
    Object.values(meteorGrouping).forEach((sizeGroup, i) => {
      let massHeight = sizeGroup.meteors.length ? sizeGroup.meteors.length : 2;
      meteorCircles.push(
          <View key={i}>
            <Animated.View style={[{transform: [{scale: bounceValue}], height: (massHeight / 2), width: (massHeight / 2), backgroundColor: sizeGroup.scoreColor}, styles.circle]} />
            <Text style={styles.label}>{sizeGroup.label}</Text>
          </View>
      )
    })

    return(
      <ScrollView horizontal={true}>
        <View style={styles.massChart}>
          {meteorCircles}
        </View>
      </ScrollView>
    );
  }
}

// Object.values(this.props.meteorGrouping).forEach((sizeGroup) => {
//             let massHeight = sizeGroup.meteors.length ? sizeGroup.meteors.length : 2;
//             console.log('sizeGroup.meteors.length', sizeGroup.meteors.length)
//             console.log('massHeight', massHeight)
//             console.log('label', sizeGroup.label)
// })

const styles = StyleSheet.create({
  massChart: {
    height: 275,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    top: 20,
  },
  circle: {
    borderRadius: 100,
  },
  label: {
    color: 'white',
  }
});
