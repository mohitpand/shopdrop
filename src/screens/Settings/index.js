import React, { Component } from 'react';
import { Animated, ActivityIndicator, TextInput, View, TouchableOpacity, Text, StyleSheet, Dimensions, ScrollView, Image, ImageBackground } from 'react-native';
import { styles } from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
const menu_array = [
    { name: 'Me', default: 'John Doe', icon: '', route: 'EditProfileScreen' },
    { name: 'Notifications', default: 'All', icon: '', route: 'NotificationSettingScreen' },
    { name: 'Account', default: 'johndoe@mail.com', icon: '', route: 'AccountScreen' },
    { name: 'Audience', default: 'Private', icon: '', route: 'AudienceSettingScreen' },
    { name: 'Block', default: 'None', icon: '', route: 'BlockScreen' },
]
export class Settings extends Component {

    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    _onNavigateScreens=(value)=>{
        this.props.navigation.navigate(value)
    }
    render() {
        return (
            <ImageBackground source={require('../../assets/images/backgroundImage.png')} style={{ flex: 1 }}>
                <View style={styles.header}>
                    <TouchableOpacity style={{ flex: 1 }}>
                        <Ionicons name="ios-arrow-back" size={35} color="#000" />
                    </TouchableOpacity>
                    <Text style={styles.HeaderTitle}>Settings</Text>
                </View>
                <View style={styles.mainContainer}>
                    <View style={styles.menuBox}>
                        {
                            menu_array.map((item, index) => {
                                return (
                                    <TouchableOpacity style={styles.menuItem} onPress={()=>{this._onNavigateScreens(item.route)}}>
                                        <View style={styles.menuIconView}>
                                        {index === 0 && <SimpleLineIcons name="pencil" size={20} color="#000" />}
                                        {index === 1 && <SimpleLineIcons name="bell" size={20} color="#000" />}
                                        {index === 2 && <MaterialCommunityIcons name="account-circle-outline" size={22} color="#000"/>}
                                        {index === 3 && <SimpleLineIcons name="lock" size={20} color="#000" />}
                                        {index === 4 && <MaterialCommunityIcons name="block-helper" size={20} color="#000" />}
                                        </View>
                                        <View style={styles.menueTextView}>
                                            <Text style={styles.menuTitleStyle}>{item.name}</Text>
                                            <Text style={styles.menuDefaultValueStyle}>{item.default}</Text>
                                        </View>
                                        <View style={styles.menuRightIconView}>
                                            <Ionicons name="ios-arrow-forward" size={22} color="gray" />
                                        </View>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

export default Settings