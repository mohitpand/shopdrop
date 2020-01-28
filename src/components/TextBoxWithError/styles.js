import { StyleSheet, Dimensions } from 'react-native';
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
import { widthPercentageToDP, heightPercentageToDP } from '../../common/ResponsiveLayout';
export const styles = StyleSheet.create({
  textBoxWithError:{
    
  },
  textInputStyle:{
    backgroundColor:'#fff',
    height:heightPercentageToDP('8%'),
    width:'88%',
    alignSelf:'center',
    borderRadius:34,
    paddingHorizontal:24,
    marginTop:16,
    marginBottom:5,
    elevation:1,
    borderWidth:1,
    borderColor:'#dedede'
  },
  errorTextStyle:{
    color:'red',
    fontSize:heightPercentageToDP('2%'),
    marginHorizontal:'10%'
  }
});