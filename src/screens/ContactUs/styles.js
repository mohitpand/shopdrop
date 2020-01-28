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
  menuBox: {
    backgroundColor:'#fff',
    marginVertical:16,
    paddingHorizontal:18,
    width:'88%',
    alignSelf:'center',
    borderRadius:12,
    elevation:3,
    borderWidth:0.5,
    borderColor:'#dedede'
  },
  menuItem:{
    paddingVertical:12,
    flexDirection:'row',
    borderBottomWidth:0.5,
    borderBottomColor:'#dedede',
    alignItems:'center'
  },
  textAreaStyle:{
    backgroundColor:'#fff',
    height:heightPercentageToDP('9%'),
    width:'88%',
    height:200,
    alignSelf:'center',
    borderRadius:24,
    paddingHorizontal:24,
    marginBottom:16,
    elevation:1,
    borderWidth:1,
    borderColor:'#dedede',
    textAlignVertical: 'top',
    paddingVertical:16
  }
});