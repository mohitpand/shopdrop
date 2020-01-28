import { StyleSheet, Dimensions } from 'react-native';
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
import { widthPercentageToDP, heightPercentageToDP } from '../../common/ResponsiveLayout';
export const styles = StyleSheet.create({
  textInputStyle:{
    backgroundColor:'#fff',
    height:heightPercentageToDP('8%'),
    width:'88%',
    alignSelf:'center',
    borderRadius:34,
    paddingHorizontal:24,
    marginBottom:16,
    elevation:1,
    borderWidth:1,
    borderColor:'#dedede'
  }
});