import { StyleSheet, Dimensions } from 'react-native';
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
import { widthPercentageToDP, heightPercentageToDP } from '../../common/ResponsiveLayout';
export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingVertical:16
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
  userListView: {
    marginVertical:16,
    //paddingHorizontal:18,
    width:'88%',
    alignSelf:'center',
  },
  userItem:{
    flexDirection:'row',
    paddingVertical:16,
    alignItems:'center',
  },
  profileImageView:{
    height: 44, width: 44, borderRadius: 22, justifyContent: 'center',
  },
  profileImageStyle:{
    height: undefined, width: undefined, borderRadius: 50, flex: 1,
  },
  usernameStyle:{
    fontSize:heightPercentageToDP('2.7%'),
    fontWeight:'bold',
    color:'#3d4054',
    marginLeft:16,
    flex:1
  },
  crossIconView:{
    height:heightPercentageToDP('7%'),
    width:heightPercentageToDP('7%'),
    borderRadius:heightPercentageToDP('7%'),
    backgroundColor:'#06fbc7',
    justifyContent:'center',
    alignItems:'center'
  },
});