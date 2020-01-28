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
    paddingHorizontal: '6%',
    flexDirection:'row',
    borderBottomLeftRadius:24,
    borderBottomRightRadius:24
  },
  HeaderTitle:{
      flex:3,
      marginRight:heightPercentageToDP('7%'),
    textAlign:'center',
    fontWeight:'bold',
    fontSize:heightPercentageToDP('3.8%')
  },
  menuBox: {
    backgroundColor:'#fff',
    marginVertical:8,
    paddingLeft:18,
    paddingVertical:12,
    width:'95%',
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
  menueTextView:{
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