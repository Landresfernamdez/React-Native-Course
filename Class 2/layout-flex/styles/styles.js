import { StyleSheet } from 'react-native';
  const styles=StyleSheet.create({
    containerFila: {
         flexDirection:'row',justifyContent:'center'
    },
    containerColumna: {
      flex: 1, flexDirection:'column',justifyContent:'center'},
    campoPowderblue:{
      width: 50, 
      height: 50, 
      backgroundColor: 'powderblue'},
    campoSkyblue:{
      width: 50, 
      height: 50, 
      backgroundColor: 'skyblue'},
    campoSteelblue:{
      width: 50, 
      height: 50, 
      backgroundColor: 'steelblue'},
    descriptionText: {
        fontSize: 10,
        fontWeight: 'normal',
      },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
      },
  });
  export default styles;