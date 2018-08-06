import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

class PrimerComponentes extends Component {
  constructor(props) {
    super(props);
    this.state = {isShowingText: true};

    // Toggle the state every second
    setInterval(() => {
      this.setState(previousState => {
        return { isShowingText: !previousState.isShowingText };
      });
    }, 1000);
  }
  render() {
    let display = this.state.isShowingText ? this.props.text : ' ';
    return (
      <Text>{display}</Text>
    );
  }
}
export default class SegundoComponente extends Component {
  render() {
    return (
      <View>
        <PrimerComponentes text='My firs experience with React Native' />
        <PrimerComponentes text='Coool' />
        <PrimerComponentes text='Why did they ever take this out of HTML' />
        <PrimerComponentes text='Look at me look at me look at me' />
      </View>
    );
  }
}
// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => SegundoComponente);