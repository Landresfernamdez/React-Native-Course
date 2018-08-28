import React, { Component } from 'react';
import { View,Text,Image } from 'react-native';
import  styles from './styles/styles.js';
export default class FlexDirectionBasics extends Component {
  render(){
    return(
      // Try setting `flexDirection` to `column`.
      <View style={styles.containerFila}>
          <View style={styles.containesColumna}>
            <View style={styles.campoPowderblue} />
            <View style={styles.campoSkyblue}/>
            <View style={styles.campoSteelblue} />
          </View>
          <View style={styles.containesColumna}>
            <View style={styles.campoPowderblue} />
            <View style={styles.campoSkyblue}/>
            <View style={styles.campoSteelblue} />
          </View>
          <View style={styles.containerColumna}>
            <View style={styles.campoPowderblue} />
            <View style={styles.campoSkyblue}/>
            <View style={styles.campoSteelblue} />
          </View>
          <View style={styles.containerColumna}>
                <Image source={{uri: 'https://industriamusical.es/wp-content/uploads/2013/08/Android1.jpg'}} style={{width: 50, height: 50}} />
                <Text style={styles.titleText} > Android </Text>
                <Text style={styles.descriptionText}>Android es un sistema operativo basado en el núcleo Linux. Fue diseñado principalmente para dispositivos móviles con pantalla táctil, como teléfonos inteligentes, tabletas y también para relojes inteligentes, televisores y automóviles.</Text>
          </View>
      </View>
    );
  }
};





