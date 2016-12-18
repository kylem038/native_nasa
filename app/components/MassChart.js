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

export default class MassChart extends Component{
  constructor(props) {
    super(props);
    this.state={};
  }

  render() {
    const { meteors } = this.props;

    return(
      <ScrollView
        style={styles.scrollView}>
        {meteors.map(function(meteor, i) {
          return <Text key={i} meteor={meteor}>Year:
            {moment(meteor.year).format('YYYY')} Mass: {meteor.mass}</Text>}
        )}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    top: 30,
    backgroundColor: '#1E77E2',
    height: 800,
  },
});
