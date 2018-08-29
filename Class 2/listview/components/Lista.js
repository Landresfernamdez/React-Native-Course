import React, { Component } from 'react';
import Modal from 'react-native-modalbox'
import {FlatList, Text, View ,Image,Button} from 'react-native';
import  styles from '../styles/styles.js';
export default class Lista extends Component {
  constructor(props){
      super(props);
      this.state={
        dataSource:this.props.dataSource,
        modalVisible:this.props.modalVisible,
        imagen:this.props.imagen
      };
  }
  componentWillMount(){
      console.log("entro al hijito");
      this.props.cargarListaRazas();
  }
  componentWillReceiveProps(newProps){
        console.log("casita");
        console.log(newProps);
        this.actualizar(newProps);
  }
  actualizar=(newState)=>{
    console.log(newState.dataSource)
    this.setState({
      dataSource:newState.dataSource,
      modalVisible:newState.modalVisible,
      imagen:newState.imagen
  })
  }
  render(){
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Text style={styles.item} onPress={this.props.GetListViewItem.bind(this, item.key)}>{item.key} </Text>}
        />
        <Modal
            style={styles.modal}
            position='center'
            backdrop={true}
            isOpen={this.state.modalVisible}
            onClosingState={()=>{
                  this.setState({
                      modalVisible:false
                  })
                  }}>
                  <View style={styles.modalImg}>
                       <Image
                           source={{ uri: this.state.imagen}}
                           style={styles.img}
                        />
                  </View>
                  <Button style={styles.botonModal} title="Cerrar" color="black" onPress={this.props.setStateModalImagen.bind(this)}></Button>
         </Modal>
      </View>
    );
  }
}