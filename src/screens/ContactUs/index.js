import React, { Component } from 'react';
import { Animated, ActivityIndicator, TextInput, View, TouchableOpacity, Text, StyleSheet, Dimensions, ScrollView, Image, ImageBackground } from 'react-native';
import { styles } from './styles';
import { TextBox } from '../../components/TextBox';
import { FullButton } from '../../components/FullButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
const menu_array = [
    { name: 'Me', default: 'John Doe', icon: '', route: 'Me' },
    { name: 'Notifications', default: 'All', icon: '', route: 'Notifications' },
    { name: 'Account', default: 'johndoe@mail.com', icon: '', route: 'Account' },
    { name: 'Audience', default: 'Private', icon: '', route: 'Audience' },
    { name: 'Block', default: 'None', icon: '', route: 'Block' },
]
export class ContactUs extends Component {

    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            suggestion: ''
        };
    }

    render() {
        return (
            <ImageBackground source={require('../../assets/images/backgroundImage.png')} style={{ flex: 1 }}>
                <View style={styles.header}>
                    <TouchableOpacity style={{ flex: 1 }} onPress={()=>this.props.navigation.goBack(null)}>
                        <Ionicons name="ios-arrow-back" size={35} color="#000" />
                    </TouchableOpacity>
                    <Text style={styles.HeaderTitle}>Contact us</Text>
                </View>
                <ScrollView>
                    <View style={styles.mainContainer}>
                        <TextBox
                            placeholder={'Name'}
                            onChangeText={(value) => this.setState({ name: value })}
                        />
                        <TextBox
                            placeholder={'Email'}
                            keyboardType={'email-address'}
                            onChangeText={(value) => this.setState({ email: value })}
                        />
                        <TextInput
                            placeholder={'Type your suggestion here'}
                            style={styles.textAreaStyle}
                            keyboardType={this.props.keyboardType}
                            onChangeText={(value) => this.setState({ suggestion: value })}
                        />
                        <FullButton
                            buttonText={'Send'}
                        />
                    </View>
                </ScrollView>
            </ImageBackground>
        );
    }
}

export default ContactUs