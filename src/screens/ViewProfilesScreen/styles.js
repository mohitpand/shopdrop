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
  menuIconView:{
    height:heightPercentageToDP('7%'),
    width:heightPercentageToDP('7%'),
    borderRadius:heightPercentageToDP('7%'),
    backgroundColor:'#e6fef9',
    marginRight:12,
    justifyContent:'center',
    alignItems:'center'
  },
  menueTextView:{
    flex:1
  },
  menuTitleStyle:{
    fontSize:heightPercentageToDP('2.7%'),
    fontWeight:'bold',
    color:'#3d4054'
  },
  menuDefaultValueStyle:{
    fontSize:heightPercentageToDP('2%'),
    color:'gray'
  },
  textstyle:{
      fontSize:heightPercentageToDP('2.1%'),
      fontWeight:'bold'
  },
  textstylesmall:{
    fontSize:heightPercentageToDP('1.8%'),
    fontWeight:'100'
  },
    viewBoxesStyles: {
        flex: 1,
        backgroundColor: '#fff',
        margin: 2,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0
    },
    deviderline: {
        borderWidth: 1,
        borderColor: '#dedede',
        height: 0,
        width: '98%',
        paddingHorizontal: 5
    },
    bottomView: {
        width: '100%',
        backgroundColor:'transparent',
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0
    },
  absoluteimage: {
    height: 100,
    width: 100,
    borderRadius: 65,
    backgroundColor: 'red',
    position:'absolute',
    bottom: -50,
    zIndex: 9,
    left: 5
  },
  scrollableviewstyle:{ 
    flex: 1, 
    padding: 5, 
    marginVertical: 10, 
    marginHorizontal: 10,
    marginBottom:60 
  }

});