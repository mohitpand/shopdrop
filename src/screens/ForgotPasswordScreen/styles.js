import { StyleSheet, Dimensions } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from "../../common/ResponsiveLayout";
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export const styles = StyleSheet.create(
  {
    safeareaviewcontainer: {
      flex: 1,
    },
    MainContainer: {
     flex:1
    },
    headerview: {
      margin:16,
      justifyContent: 'center'
    },
    leftbtn: {
    },
    Imagelogo: {
      width: widthPercentageToDP("4.0%"),
      height: heightPercentageToDP("3.0%"),
      justifyContent: 'center',
      margin: 5,
      marginLeft: 25

    },
    DetailBoxView: {
      justifyContent: 'center',
    },
    txtview: {
      padding: 10
    },
    txtboxview: {
      marginTop: 10
    },
    titletxt: {
      fontSize: heightPercentageToDP("3.1%"),
      fontWeight: 'bold',
      alignSelf: 'center',
    },
    detailtxt: {
      alignSelf: 'center',
      alignContent: 'center',
      fontSize: heightPercentageToDP("2.2%"),
      fontWeight: '200',
      marginTop: 16,
      marginHorizontal:16,
      textAlign: 'center',
      color:'gray'
    },
    btnview: {
      flex: 1,
    },
    btn: {
      backgroundColor: '#06FBC7',
      borderRadius: 30,
      padding: 10,
    },
    btntxt: {
      alignSelf: 'center',
      fontSize: heightPercentageToDP("1.9%"),
      fontWeight: '500',
    },
    signintxt: {
      alignSelf: 'center',
      fontSize: heightPercentageToDP("2.5%"),
      fontWeight: '400',
      marginTop: 10,
      textAlign: 'center',
      color: '#02A0EC'
    },
    textInputStyle: {
    },
    textInputStyleWithError: {
      borderColor: 'red'
    },
    errorTextStyle:{
      color:'red',
      fontSize:heightPercentageToDP('2%'),
      marginHorizontal:'10%',
      marginBottom:'10%'
    }
  });