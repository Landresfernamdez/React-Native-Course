import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import  './styles/styles';
export default class FlexDirectionBasics extends Component {
  render() {
    return (
      // Try setting `flexDirection` to `column`.
      
      <View style={styles.containerColumna}>
          <View style={styles.containesFila}>
            <View style={styles.campoPowderblue} />
            <View style={styles.campoSkyblue}/>
            <View style={styles.campoSteelblue} />
          </View>
          <View style={styles.containesFila}>
            <View style={styles.campoPowderblue} />
            <View style={styles.campoSkyblue}/>
            <View style={styles.campoSteelblue} />
          </View>
          <View style={styles.containerFila}>
            <View style={styles.campoPowderblue} />
            <View style={styles.campoSkyblue}/>
            <View style={styles.campoSteelblue} />
          </View>
      </View>
    );
  }
};


