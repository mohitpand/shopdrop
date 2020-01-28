import { StyleSheet, Dimensions } from 'react-native';
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
import { widthPercentageToDP, heightPercentageToDP } from '../../common/ResponsiveLayout';
export const styles = StyleSheet.create({
  buttonStyle:{
    width:'30%',
    height:heightPercentageToDP('20%'),
    backgroundColor:'#06fbc7',
    alignSelf:'center',
    padding:5
  },
  buttonTextStyle:{
    textAlign:'center',
    fontWeight:'bold',
    fontSize:heightPercentageToDP('1.5%'),
  },
 
});