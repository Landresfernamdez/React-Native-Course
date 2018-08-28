import { StyleSheet,Platform ,Dimensions} from 'react-native';
var screen=Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
    modal:{
      justifyContent:'center',
      borderRadius: Platform.OS==='android'?30:0,
      shadowRadius: 10,
      width:screen.width-80,
      height:280
    },
    img:{
      marginTop: 10,
      marginLeft: 0,
      width: 193,
      height: 110,
    },modalImg: {
      flex: 1,
      justifyContent: 'center',
      marginTop: 10,
      flexDirection: 'column',
    },botonModal:{
      marginBottom:0
    }
  })
  export default styles;