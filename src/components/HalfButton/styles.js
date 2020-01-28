import { StyleSheet, Dimensions } from 'react-native';
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
import { widthPercentageToDP, heightPercentageToDP } from '../../common/ResponsiveLayout';
export const styles = StyleSheet.create({
  buttonStyle:{
    width:'44%',
    backgroundColor:'#06fbc7',
    alignSelf:'center',
    paddingVertical:12,
    borderRadius:24,
  },
  buttonTextStyle:{
    textAlign:'center',
    fontWeight:'bold',
    fontSize:heightPercentageToDP('2.5%'),
  },
 
});