import { StyleSheet, Dimensions } from 'react-native';
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
import { widthPercentageToDP, heightPercentageToDP } from '../../common/ResponsiveLayout';
export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom:10
  },
  header: {
    alignItems: 'center',
    backgroundColor: '#e6fef9',
    //opacity: 0.8,
    paddingVertical:12,
    paddingHorizontal: '8%',
    flexDirection:'row'
  },
  menuCircle:{
    height:heightPercentageToDP('8%'),
    width:heightPercentageToDP('8%'),
    borderRadius:heightPercentageToDP('8%')/2,
  },
  imageview:{
    flex:1,
    height:undefined,
    width:undefined,
    borderRadius:heightPercentageToDP('8%')/2
  },
  HeaderTitle:{
    textAlign:'center',
    marginRight:heightPercentageToDP('10%'),
    fontWeight:'bold',
    flex:3,
    fontSize:heightPercentageToDP('3.8%')
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  optionBox: {
    backgroundColor: '#fff',
    width: '84%',
    height: heightPercentageToDP('38%'),
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical:25
  },
  boxImageStyle: {
    height: heightPercentageToDP('17%'),
    width: heightPercentageToDP('17%')
  },
  boxText: {
    marginTop: 20,
    fontSize: heightPercentageToDP('3%'),
    fontWeight: 'bold'
  },
});