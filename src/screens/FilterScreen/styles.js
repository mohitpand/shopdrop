import { StyleSheet, Dimensions } from 'react-native';
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
import { widthPercentageToDP, heightPercentageToDP } from '../../common/ResponsiveLayout';
import { color } from 'react-native-reanimated';
export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding:12,
        marginBottom:5
      },
      header: {
        alignItems: 'center',
        backgroundColor: '#fff',
        //opacity: 0.8,
        paddingVertical:18,
        paddingHorizontal: '8%',
        flexDirection:'row',
        paddingBottom:5
      },
      HeaderTitle:{
        textAlign:'center',
        marginRight:heightPercentageToDP('10%'),
        fontWeight:'bold',
        flex:3,
        fontSize:heightPercentageToDP('3.8%')
      },
      fullnametextstyle:{
        fontSize:heightPercentageToDP('2.2%'),
        color:'grey',
        padding:10
      },
      genderViewStyle: {
        flexDirection: 'row',
        padding: 5,
        justifyContent: 'flex-start',
      },
    style_button: {
        margin: 5,
        width: '30%',
       
    },
    style_button_bodyshape:{
        margin: 5,
        width: '30%',
        backgroundColor:'#fff',
        borderRadius:0
    },
    style_ethincity:{
        margin: 5,
    },
    heightStyle:{
        width:'28%',
        borderRadius:34
    },
    style_agebutton:{
        margin: 5,
        width: '20%',
    },
    buttonTextStyle:{
        fontSize:heightPercentageToDP('2.0%'),
        fontWeight:'100'
    }
})