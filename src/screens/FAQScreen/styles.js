import { StyleSheet, Dimensions } from 'react-native';
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
import { widthPercentageToDP, heightPercentageToDP } from '../../common/ResponsiveLayout';
export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingVertical:12
  },
  header: {
    alignItems: 'center',
    backgroundColor: '#fff',
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
    marginVertical:8,
    paddingLeft:18,
    paddingVertical:12,
    width:'88%',
    alignSelf:'center',
    borderRadius:12,
    elevation:2,
    borderWidth:0.5,
    borderColor:'#dedede'
  },
  menuItem:{
    flexDirection:'row',
    alignItems:'center'
  },
  menuRightIconView:{
    paddingHorizontal:18,
    justifyContent:'center',
    alignItems:'center',
  },
  menuTextView:{
    flex:1
  },
  qusetionStyle:{
    fontSize:heightPercentageToDP('2.7%'),
    fontWeight:'bold',
    color:'#3d4054'
  },
  answerView:{
    paddingRight:18
  },
  answerStyle:{
    fontSize:heightPercentageToDP('2%'),
    color:'gray',
    marginTop:5,
  }
});