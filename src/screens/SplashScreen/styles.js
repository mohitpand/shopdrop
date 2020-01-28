import { StyleSheet, Dimensions } from 'react-native';
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
import { widthPercentageToDP, heightPercentageToDP } from '../../common/ResponsiveLayout';
import { color } from 'react-native-reanimated';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingVertical: 20,
    },
    progress: {
        margin: 10,
        width: '85%'
    },
    progressbartitle: {
        flexDirection: 'row',
        marginHorizontal: 29,
        justifyContent: 'center',
        alignItems: 'center'
    },
    progressbarView: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flex:1
    },
    imageStyle: {
        resizeMode: 'contain',
        height: undefined,
        width: undefined,
        flex: 1
    },
    imageview: {
        height: heightPercentageToDP('80%'),
        //width: '100%',
        padding: 5,
        flex:2
    },
    perTextStyle:{
        fontSize:heightPercentageToDP("2.1%"),
        fontWeight:'bold'
    },
    logoimageview:{
        height: heightPercentageToDP('8%'),
        width: '70%',
        marginHorizontal:15,
        justifyContent:'center',
        alignSelf:'center',
        padding:10,
        flex:1
    },
    logoimageStyle:{
        resizeMode: 'contain',
        height: undefined,
        width: undefined,
        flex: 1,
    },
    subtitletextstyle:{
        textAlign:'center',
        fontSize:heightPercentageToDP('2.1%'),
        fontWeight:'bold'
    }
})