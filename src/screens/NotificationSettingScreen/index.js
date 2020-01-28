import React, { Component } from 'react';
import { Animated, ActivityIndicator, Switch, View, TouchableOpacity, Text, StyleSheet, Dimensions, ScrollView, Image, ImageBackground } from 'react-native';
import { styles } from './styles';
import { HalfButton } from '../../components/HalfButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
export class NotificationSettingScreen extends Component {
    static navigationOptions = {
        header: null
    };
    constructor(props) {
        super(props);
        this.state = {
            notification_ONOFF: true
        };
    }

    toggleSwitch = () => {
        this.setState({ notification_ONOFF: !this.state.notification_ONOFF })
    }

    render() {
        const { notification_ONOFF } = this.state
        return (
            <ImageBackground source={require('../../assets/images/backgroundImage.png')} style={{ flex: 1 }}>
                <View style={styles.header}>
                    <TouchableOpacity style={{ flex: 1 }} onPress={()=>this.props.navigation.goBack(null)}>
                        <Ionicons name="ios-arrow-back" size={35} color="#000" />
                    </TouchableOpacity>
                    <Text style={styles.HeaderTitle}>Notifications</Text>
                </View>
                <ScrollView>
                    <View style={styles.mainContainer}>
                        <View style={styles.menuBox}>
                            <Text style={styles.labelStyle}>Notifications</Text>
                            <Switch
                                style={styles.switchStyle}
                                trackColor={{ true: '#06fbc7', false: '#dedede' }}
                                thumbColor={this.state.notification_ONOFF ? '#fff' : '#06fbc7'}
                                onValueChange={this.toggleSwitch}
                                value={this.state.notification_ONOFF} />
                        </View>
                    </View>
                </ScrollView>
            </ImageBackground>
        );
    }
}

export default NotificationSettingScreen