import { StyleSheet, Dimensions } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from "../../common/ResponsiveLayout";
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export const styles = StyleSheet.create(
    {
        MainContainer: {
            flex:1
        },
        ImageView:{
            width: widthPercentageToDP("100%"),
            height: heightPercentageToDP("9.1%")
        },
        Imagelogo: {
            flex:1,
            width: undefined,
            height: undefined,
            resizeMode:'contain',
        },
        textBoxContainer:{
            marginTop:16
        },
        agreetxt:{
            marginLeft:15,
            fontSize: heightPercentageToDP("2.0%"),
            fontWeight: 'bold',
        },
        signintxt: {
            alignSelf: 'center',
            alignContent: 'center',
            fontSize: heightPercentageToDP("2.5%"),
            fontWeight: '400',
            textAlign: 'center',
            color: '#02A0EC'
        },
        signinblktxt: {
            fontSize: heightPercentageToDP("2.4%"),
            alignSelf:'center',
            textAlign:'center',
            color:'gray'
        },
        signinbluetxt: {
            fontSize: heightPercentageToDP("2.6%"),
            fontWeight: 'bold',
            textAlign: 'center',
            color: '#02A0EC'
        },
        termsConditionView:{
            flexDirection:'row',marginHorizontal:24,alignItems: 'center',marginTop:10
        },
        buttonStyle:{
            marginVertical:16
        },
        textInputStyle:{
        },
        textInputStyleWithError:{
            borderColor:'red'
        }
    });