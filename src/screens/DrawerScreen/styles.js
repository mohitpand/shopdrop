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

    logoimageview: {
        height: heightPercentageToDP('10%'),
        width: '65%',
        marginHorizontal: 15,
        justifyContent: 'center',
        alignSelf: 'flex-start',
        padding: 5,
        marginVertical:11

    },
    logoimageStyle: {
        resizeMode: 'contain',
        height: undefined,
        width: undefined,
        flex: 1,
    },
    mainImageContainer: {
        flexDirection: 'row',
        flex: 1,
        padding: 10
    }
    ,
    imageViewContainer: {
        height: 60,
        width: 60,
        borderRadius: 30
    },
    imageContainer: {
        height: undefined,
        width: undefined,
        flex: 1,
        borderRadius: 30
    },
    nameViewContainer: {
        flex: 1,
        padding: 5,
        justifyContent: 'center'
    },
    TextNameStyle: {
        fontSize: heightPercentageToDP("2.1%"),
        fontWeight: 'bold'
    },
    TextEmailStyle: {
        fontSize: heightPercentageToDP("1.5%"),
        color: 'grey'
    },
    bottomView: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0
    },
    logoutButtonStyle: {
        flexDirection: 'row',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoutImageViewStyle: {
        flex: 1,
        height: 25,
        justifyContent: 'center',
        alignItems:'center',
    },
    logoutImageStyle: {
        resizeMode: 'contain',
        height: undefined,
        flex: 1
    }
})