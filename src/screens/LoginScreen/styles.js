import {StyleSheet,Dimensions} from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from "../../common/ResponsiveLayout";
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export const styles = StyleSheet.create(
    {
        safeareaviewcontainer: {
            flex: 1,
          },
        MainContainer:{
            flex:1,
        },
        logoview:{
            width:widthPercentageToDP("100%"),
            height:heightPercentageToDP("9.1%"),
            marginTop:100  
        },
        Imagelogo:{
            flex:1,
            width:undefined,
            height:undefined,
            resizeMode:'contain',      
        },
      DetailBoxView:{
       flex:1,
       marginTop:26
      },
      txtview:{
        flex:1,
       
      },
      txtboxview:{
       //flex:1,
       
      },
      txtbox:{
        borderWidth:1,
        borderRadius:35,
        width:"98%",
        height:50,
        borderColor:'green'
       },
      titletxt:{
          fontSize:heightPercentageToDP("3.1%"),
          fontWeight:'bold',
          alignSelf:'center'
      },
      detailtxt:{
          alignSelf:'center',
          alignContent:'center',
          fontSize:heightPercentageToDP("2.1%"),
          fontWeight:'200',
          marginTop:5,
          textAlign:'center'
      },
      frgtview:{
        marginLeft:90,
        marginRight:90,
        marginTop:11
      },
      btnview:{
        //flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
       
      },
      btn:{
        backgroundColor:'#fff',
        borderRadius:30,
        marginLeft:20,
        marginRight:20
      },
      btntxt:{
        alignSelf:'center',
        fontSize:heightPercentageToDP("1.9%"),
        fontWeight:'500',
        padding:20
      },
      iconbtnview:{
        width:'40%',
        height:50,
        borderRadius: 45,
       marginHorizontal:10,
       backgroundColor:'#fff',
       borderColor:'#dedede',
       elevation:3,
       borderWidth:1,
       justifyContent:'center',
       alignItems:'center'
      },
      imageStyle:{
        height:30,
        width:35
      },
      iconbtn:{
        flex:1,
        width:undefined,
        height:undefined,
        resizeMode:'contain'
      },
      signintxt:{
        alignSelf:'center',
        alignContent:'center',
        fontSize:heightPercentageToDP("2.5%"),
        fontWeight:'400',
        textAlign:'center',
        color:'gray'
      },
      navigatetxtview:{
        flexDirection:'row',
        justifyContent:'center'
      },
      signinblktxt:{
        alignSelf:'center',
        fontSize:heightPercentageToDP("2.4%"),
        textAlign:'center',
        justifyContent:'center',
        color:'gray'
      },
      signinbluetxt:{
        fontSize:heightPercentageToDP("2.6%"),
        fontWeight:'bold',
        textAlign:'center',
        color:'#02A0EC'
      },
      smallLabel:{
        alignSelf:'center',
        fontSize:heightPercentageToDP("2.2%"),
        fontWeight:'400',
        textAlign:'center',
        color:'gray'
      },
      textInputStyle:{
      },
      textInputStyleWithError:{
          borderColor:'red'
      },
      errorTextStyle:{
        color:'red',
        fontSize:heightPercentageToDP('2%'),
        marginHorizontal:'10%',
        marginBottom:'10%'
      },
    exrrorViewstyle: {
      height: 20,
      width: '100%',
      marginBottom: 10
    },
    buttonStyle:{
      marginTop:16
    },
    bottomView: {
      width: '100%',
      backgroundColor:'red',
      height: 70,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      bottom: 0
  },
    
    
    });