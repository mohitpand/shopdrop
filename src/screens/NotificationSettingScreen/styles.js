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
    marginVertical:18,
    paddingVertical:16,
    width:'88%',
    alignSelf:'center',
    borderRadius:12,
    elevation:1,
    flexDirection:'row',
    alignItems:'center'
  },
  labelStyle:{
    flex:1,
    fontWeight:'bold',
    fontSize:heightPercentageToDP('2.5%'),
    marginHorizontal:'6%'
  },
  switchStyle:{
    marginRight:'6%'
  }
});