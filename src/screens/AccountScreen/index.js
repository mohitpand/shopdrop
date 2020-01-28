import React, { Component } from 'react';
import { Animated, ActivityIndicator, TextInput, View, TouchableOpacity, Text, StyleSheet, Dimensions, ScrollView, Image, ImageBackground } from 'react-native';
import { styles } from './styles';
import {TextBox} from '../../components/TextBox';
import {HalfButton} from '../../components/HalfButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
export class AccountScreen extends Component {
    static navigationOptions = {
        header: null
    };
    constructor(props) {
        super(props);
        this.state = {
            username:'',
            email:'',
            current_pasword:'',
            new_pasword:'',
            confirm_pasword:''
        };
    }

    render() {
        return (
            <ImageBackground source={require('../../assets/images/backgroundImage.png')} style={{ flex: 1 }}>
                <View style={styles.header}>
                    <TouchableOpacity style={{ flex: 1 }}  onPress={() => this.props.navigation.goBack(null)}>
                        <Ionicons name="ios-arrow-back" size={35} color="#000" />
                    </TouchableOpacity>
                    <Text style={styles.HeaderTitle}>Account</Text>
                </View>
                <ScrollView>
                <View style={styles.mainContainer}>
                    <View style={styles.menuBox}>
                        <TextBox 
                            placeholder={'username'}
                            textInputStyle={styles.textInputStyle}
                            onChangeText={(value)=>this.setState({name:value})}
                        />
                        <TextBox 
                            placeholder={'Email'}
                            keyboardType={'email-address'}
                            textInputStyle={styles.textInputStyle}
                            onChangeText={(value)=>this.setState({email:value})}
                        />
                        <Text style={styles.labelStyle}>Change Password</Text>
                        <TextBox 
                            placeholder={'Current password'}
                            textInputStyle={styles.textInputStyle}
                            onChangeText={(value)=>this.setState({current_pasword:value})}
                            secureTextEntry={true}
                        />
                        <TextBox 
                            placeholder={'New password'}
                            textInputStyle={styles.textInputStyle}
                            onChangeText={(value)=>this.setState({new_pasword:value})}
                            secureTextEntry={true}
                        />
                        <TextBox 
                            placeholder={'Confirm new password'}
                            textInputStyle={styles.textInputStyle}
                            onChangeText={(value)=>this.setState({confirm_pasword:value})}
                            secureTextEntry={true}
                        />
                    </View>
                    <HalfButton 
                        buttonText={'Save Changes'}
                    />
                </View>
                </ScrollView>
            </ImageBackground>
        );
    }
}

export default AccountScreen