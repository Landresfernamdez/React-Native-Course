import React, { Component } from 'react';
import { AppRegistry, Text, View ,StyleSheet,Image} from 'react-native';

class Greeting extends Component {
  render() {
    let img={uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/PNG_transparency_demonstration_2.png/300px-PNG_transparency_demonstration_2.png'}
    if(this.props.name=='Miguelito'){
      img={uri:'https://i.pinimg.com/564x/79/6c/72/796c725d1911d35698b6be8be98e5562.jpg'};
    }
    if(this.props.name=='Marvin'){
      img={uri:'http://images.gofreedownload.net/marvin-martian-angry-30439.jpg'};
    }
    if(this.props.name=='Pedro'){
      img={uri:'https://1.bp.blogspot.com/_yrKWohmMfcs/R7nqgAojKuI/AAAAAAAAAAY/a8_4uzuKLm4/s200/pedro%2Bpicapiedra.gif'};
    }
    return (
      <View>
        <Text style={styles.blue}>Hello {this.props.name}!</Text>
        <Text style={styles.red}>Hello {this.props.name}!</Text>
        <Image source={img} style={{width: 110, height:113}}/>
      </View>
    );
  }
}

export default class LotsOfGreetings extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Greeting name='Miguelito' />
        <Greeting name='Marvin' />
        <Greeting name='Pedro' />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  blue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});
// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => LotsOfGreetings);
