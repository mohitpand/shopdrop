import { StyleSheet, Dimensions } from 'react-native';
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
import { widthPercentageToDP, heightPercentageToDP } from '../../common/ResponsiveLayout';
export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    backgroundColor: '#fff',
    //opacity: 0.8,
    paddingVertical:18,
    paddingHorizontal: '8%',
    flexDirection:'row',
    borderBottomLeftRadius:24,
    borderBottomRightRadius:24
  },
  HeaderTitle:{
    textAlign:'center',
    marginRight:heightPercentageToDP('10%'),
    fontWeight:'bold',
    flex:3,
    fontSize:heightPercentageToDP('3.8%')
  },
  menuBox: {
    backgroundColor:'#fff',
    marginVertical:16,
    paddingTop:16,
    width:'88%',
    alignSelf:'center',
    borderRadius:12,
    elevation:1,
    borderWidth:0.5,
    borderColor:'#dedede'
  },
  textInputStyle:{
    width:'88%',
    elevation:0,
    borderWidth:0.5
  },
  labelStyle:{
    fontWeight:'bold',
    fontSize:heightPercentageToDP('2.5%'),
    marginHorizontal:'6%'
  },
  radioView:{
    width:'88%',
    alignSelf:'center',
    marginBottom:16
  },
  radioItem:{
    flexDirection:'row',
    alignItems:'center',
    marginTop:16
  },
  radioLargeCircle:{
    height:22,
    width:22,
    borderRadius:11,
    borderWidth:0.5,
    borderColor:'gray',
    justifyContent:'center',
    alignItems:'center'
  },
  radioSmallCircle:{
    height:16,
    width:16,
    borderRadius:8,
    backgroundColor:'#fff'
  },
  selected_radioLargeCircle:{
    height:22,
    width:22,
    borderRadius:11,
    borderWidth:1,
    borderColor:'#06fbc7',
    justifyContent:'center',
    alignItems:'center'
  },
  selected_radioSmallCircle:{
    height:16,
    width:16,
    borderRadius:8,
    backgroundColor:'#06fbc7'
  },
  radioLabel:{
    marginLeft:12,
    fontSize:heightPercentageToDP('2.8%')
  }
});