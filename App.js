import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class LotsOfStyles extends Component {
  render() {
    return (
      <View style={{heihgt: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}} >
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={{width: 200, height: 200, backgroundColor: 'powderblue',...styles.center}} >
        <Text style={styles.red}>just red</Text>
        </View>
        <View style={{width: 200, height: 200, backgroundColor: 'skyblue',...styles.center}} >
        <Text style={styles.bigBlue}>just bigBlue</Text>
        </View>
        <View style={{width: 200, height: 200, backgroundColor: 'steelblue',...styles.center}} >
        <Text style={[styles.bigBlue, styles.red]}>bigBlue, then red</Text>
        </View>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  center:{
    display: 'flex', alignItems: 'center', justifyContent: 'center'
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});