import React, { Component } from 'react';
import { AppRegistry,Text, View } from 'react-native';
import axios from 'axios';
import Lista from './components/Lista';
export default class App extends Component {
  constructor(props){
    super(props);
      this.arrayholder=[{key:"Andres"}];
      this.state={
        dataSource:this.arrayholder,
        modalVisible:false,
        imagen:''
      };
  }
  cargarListaRazas=()=>{
    axios.get('https://dog.ceo/api/breeds/list')
    .then(response=>{
      this.arrayholder=response.data.message;
      var listaCiudades=response.data.message;
      for(var x=0;x<listaCiudades.length;x++){
        listaCiudades[x]={key:listaCiudades[x]}
      }
      this.arrayholder=listaCiudades;
      this.setState({
        dataSource: listaCiudades
      }, function() {
        // In this block you can do something with new state.
        this.arrayholder = listaCiudades;
      })
    }).catch(function (error) {
      return error.data
  })
  }
  GetListViewItem(item){
    axios.get("https://dog.ceo/api/breed/"+item+"/images/random")
    .then(response=>{
      console.log(response.data.message);
      this.setState({
        imagen:response.data.message,
        modalVisible:true
      }, function() {
      })
    }).catch(function (error) {
      return error.data
  })
  }
  setStateModalImagen(){
    this.setState({
      modalVisible:false
    })
  }
  render(){
    return (
        <Lista  cargarListaRazas={this.cargarListaRazas} 
        GetListViewItem={this.GetListViewItem} 
        setStateModalImagen={this.setStateModalImagen}
        dataSource={this.state.dataSource}
        imagen={this.state.imagen}
        modalVisible={this.state.modalVisible}
        ></Lista>
    );
  }
}
// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => App);