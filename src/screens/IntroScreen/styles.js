import { StyleSheet } from 'react-native';
import { widthPercentageToDP, heightPercentageToDP } from '../../common/ResponsiveLayout';
export const colors = {
    black: '#000',
    gray: '#888888',
    background1: '#B721FF',
    background2: '#21D4FD',
    activeDot:'#06fbc7',
    incativeDot:'#ccfcf2'
};

export const styles =  StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: colors.black
    },
    container: {
        flex: 1,
        backgroundColor: colors.background1
    },
    gradient: {
        ...StyleSheet.absoluteFillObject
    },
    scrollview: {
        flex: 1
    },
    nextbutton: {
        backgroundColor: 'transparent',
        alignSelf: 'flex-start',
        padding: 10
    },
    exampleContainer: {
        paddingVertical: 30
    },
    exampleContainerDark: {
        backgroundColor: colors.black
    },
    exampleContainerLight: {
        backgroundColor: 'white'
    },
    title: {
        paddingHorizontal: 30,
        backgroundColor: 'transparent',
        color: 'rgba(255, 255, 255, 0.9)',
        fontSize: heightPercentageToDP('2.1%'),
        fontWeight: 'bold',
        textAlign: 'center'
    },
    titleDark: {
        color: colors.black,
        paddingHorizontal: 30,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    subtitle: {
        marginTop: 5,
        paddingHorizontal: 30,
        backgroundColor: 'transparent',
        color: colors.black,
        fontSize: 13,
        fontStyle: 'italic',
        textAlign: 'center'
    },
    slider: {
        marginTop: 15,
        overflow: 'visible' // for custom animations
    },
    sliderContentContainer: {
        paddingVertical: 10 // for custom animation
    },
    paginationContainer: {
        paddingVertical: 8
    },
    paginationDot: {
        width: 15,
        height: 15,
        borderRadius: 7,
        marginHorizontal: 7
    }
});