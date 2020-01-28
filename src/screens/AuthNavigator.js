import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator, DrawerActions } from 'react-navigation-drawer'
import { createStackNavigator } from 'react-navigation-stack';
import { AppNavigator } from '../../App';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import AccountScreen from '../screens/AccountScreen';
import AudienceSettingScreen from '../screens/AudienceSettingScreen';
import BlockScreen from '../screens/BlockScreen';
import ContactUs from '../screens/ContactUs';
import FAQScreen from '../screens/FAQScreen';
import HomeScreen from '../screens/HomeScreen';
import NotificationSettingScreen from '../screens/NotificationSettingScreen';
import Settings from '../screens/Settings';
import FilterScreen from "../screens/FilterScreen";
import EditProfileScreen from "../screens/EditProfileScreen";
import ViewProfilesScreen from "../screens/ViewProfilesScreen";



import TermConditionScreen from "../screens/TermConditionScreen";
import  DrawerScreen  from '../screens/DrawerScreen';

import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';


export class AuthNavigator extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <View />
        );
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row'
    },
    MainContainer: {
        flex: 1, backgroundColor: '#4482b4'
    },
    topView: {
        alignItems: 'center', height: 260, backgroundColor: '#DEDEDE', justifyContent: 'center', alignItems: 'center'
    },
    profileImage: {
        height: 150, width: 150, borderRadius: 75
    },
    userNameText: {
        fontSize: 28,
        marginTop: 10,
        fontWeight: 'bold',
        color: '#00a2e8'
    },
    editPen: {
        color: '#00a2e8', marginLeft: 200
    },
    bottomView: {
        paddingTop: 10
    },
    menuItem: {
        flexDirection: 'row', alignItems: 'center', margin: 10,
        borderBottomColor: '#dedede',
        borderBottomWidth: 1,
        paddingBottom: 10,
        paddingHorizontal: 10
    },
    menuIcon: {
        color: '#fff'
    },
    menuItemText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
        flex: 1
    },
    menuItemValue: {
        color: '#fff',
        fontSize: 18,
    }
});

const HomeStack = createStackNavigator(
    {
        
        HomeScreen: { screen: HomeScreen },
        FilterScreen:{screen: FilterScreen}
    },
    {
        initialRouteName: 'HomeScreen',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#fff',
            },
            headerTintColor: '#000',
            gesturesEnabled: true,
        },
        transitionConfig: transitionConfig,
        navigationOptions: {
            header: null
        }
    }
);

const SettingStack = createStackNavigator(
    {
        Settings: { screen: Settings },
        AudienceSettingScreen: { screen: AudienceSettingScreen },
        AccountScreen: { screen: AccountScreen },
        BlockScreen: { screen: BlockScreen },
        NotificationSettingScreen: { screen: NotificationSettingScreen },
        EditProfileScreen:{screen: EditProfileScreen},
        TermConditionScreen:{screen:TermConditionScreen}
    },
    {
        initialRouteName: 'Settings',
        defaultNavigationOptions: {
            title: 'Grid',
            gesturesEnabled: true,
        },
        transitionConfig: transitionConfig,
        navigationOptions: {
            header: null
        }
    }
);

export const searchStack = createStackNavigator({
    FilterScreen: { screen: FilterScreen }
},
    {
        initialRouteName: 'FilterScreen',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#fff',
            },
            headerTintColor: '#000',
            title: 'CreateGrams',
            gesturesEnabled: true,
        },
        transitionConfig: transitionConfig,
        navigationOptions: {
            header: null
        }
    })

export const messageStack = createStackNavigator({
    ContactUs: ContactUs
},
    {
        initialRouteName: 'ContactUs',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#fff',
            },
            headerTintColor: '#000',
            title: '',
            gesturesEnabled: true,
        },
        transitionConfig: transitionConfig,
        navigationOptions: {
            header: null
        }
    }
);

/* const AuthStack = createStackNavigator({
    LoginScreen:{screen:LoginScreen},
    SignUpScreen:{screen:SignUpScreen},
    ForgotPasswordScreen:{screen:ForgotPasswordScreen}
},
{
    initialRouteName: 'LoginScreen',
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#fff',
        },
        headerTintColor: '#000',
        title: '',
        gesturesEnabled: true,
    },
    transitionConfig: transitionConfig,
    navigationOptions: {
        header: null
    }
}
); */

export const MyProfileStack = createStackNavigator({
    ViewProfilesScreen:{screen:ViewProfilesScreen},
    
},
    {
        initialRouteName: 'ViewProfilesScreen',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#fff',
            },
            headerTintColor: '#000',
            title: '',
            gesturesEnabled: true,
        },
        transitionConfig: transitionConfig,
        navigationOptions: {
            header: null
        }
    }
);

const transitionConfig = () => ({
    transitionSpec: {
        duration: 300,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
    },
    screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps;
        const { index } = scene;

        const height = layout.initHeight;
        const translateX = position.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [height, 0, 0],
        });

        const opacity = position.interpolate({
            inputRange: [index - 1, index - 0.99, index],
            outputRange: [0, 1, 1],
        });

        return { opacity, transform: [{ translateX }] };
    },
})

const navigationOptions = {
    gestureResponseDistance: {
        horizontal: 25,
        vertical: 200,
    }
}



const MainApp = createMaterialBottomTabNavigator(
    {
        "Home": { screen: HomeStack },
        "Settings": { screen: SettingStack },
        "Search": { screen: searchStack },
        "Message": { screen: messageStack },
        "MyProfile": { screen: MyProfileStack }
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let icon = null
                if (routeName === 'Home') {
                    return (
                        <View style={{height:28,width:28}}>
                        <Image 
                        style={{flex:1,height:undefined,width:undefined,resizeMode:'contain'}}
                        source={require('../assets/images/menu_homeTab.png')}
                        />
                    </View>
                    );/**menu_home.png */
                } else if (routeName === 'Settings') {
                    return (<View style={{height:28,width:28}}>
                        <Image 
                        style={{flex:1,height:undefined,width:undefined}}
                        source={require('../assets/images/setting_tabbar_icon.png')}
                        />
                    </View>
                        );/**setting_tabbar_icon */
                } else if (routeName === 'Search') {
                    return <View style={{height:28,width:28}}>
                    <Image 
                    style={{flex:1,height:undefined,width:undefined}}
                    source={require('../assets/images/search_tabbar_icon.png')}
                    />
                </View>
                } else if (routeName === 'Message') {
                    return (
                        <View style={{height:28,width:28}}>
                        <Image 
                        style={{flex:1,height:undefined,width:undefined}}
                        source={require('../assets/images/msg_tabbar_icon.png')}
                        />
                    </View>
                    );/**msg_tabbar_icon.png */
                } else if (routeName === 'MyProfile') {
                    return (<View style={{height:28,width:28}}>
                        <Image 
                        style={{flex:1,height:undefined,width:undefined,borderRadius:15}}
                        source={require('../assets/images/iconuser.jpeg')}
                        />
                    </View>);
                    ;
                }
            },
        }),
        tabBarOptions: {
            labeled: false,
            /* activeColor: 'red',
            inactiveColor:"yellow", */
            /* inactiveBackgroundColor:'#e8e6e7', */
        },
        labeled: false,
        activeColor: 'red',
        inactiveColor: "yellow",
        barStyle: {
            borderWidth: 0.5,
            borderBottomWidth: 1,
            backgroundColor: '#fff',
            borderTopLeftRadius: 35,
            borderTopRightRadius: 35,
            borderBottomLeftRadius: 35,
            borderBottomRightRadius: 35,
            borderColor: 'transparent',
            overflow: 'hidden',
            paddingVertical: 5
        },
        style: { backgroundColor: '#bef9ed' }
    }
);

const MyDrawerNavigator = createDrawerNavigator({
    MainApp
}, {
    contentComponent: DrawerScreen,
    drawerPosition: 'left',
    drawerOpacity: 1,
    defaultNavigationOptions: {
        header: null
    },
    navigationOptions: ({ navigation }) => ({
        header: null
    })
}

);

const StackNavigator = createStackNavigator({
   
    MyDrawerNavigator: {
        screen: MyDrawerNavigator
    },
    
});

export default createAppContainer(StackNavigator);