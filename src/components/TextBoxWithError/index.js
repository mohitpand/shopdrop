import React, { Component } from 'react';
import { Animated, ActivityIndicator, TextInput, View, TouchableOpacity, Text, StyleSheet, Dimensions, ScrollView, Image, ImageBackground } from 'react-native';
import { styles } from './styles';
export class TextBoxWithError extends Component {
    static navigationOptions = {
        header: null
    };
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.textBoxWithError}>
                <TextInput
                    placeholder={this.props.placeholder}
                    style={[styles.textInputStyle, this.props.textInputStyle]}
                    keyboardType={this.props.keyboardType}
                    onChangeText={(value) => this.props.onChangeText(value)}
                    secureTextEntry={this.props.secureTextEntry}
                    value={this.props.value}
                />
                {(this.props.errorText!==undefined && this.props.errorText!= "") && <Text style={styles.errorTextStyle}>{this.props.errorText}</Text>}
            </View>
        );
    }
}