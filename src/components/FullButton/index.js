import React, { Component } from 'react';
import { Animated, ActivityIndicator, TextInput, View, TouchableOpacity, Text, StyleSheet, Dimensions, ScrollView, Image, ImageBackground } from 'react-native';
import { styles } from './styles';
export class FullButton extends Component {
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
            <TouchableOpacity style={[styles.buttonStyle, this.props.buttonStyle]} onPress={this.props.onPress}>
                {
                    this.props.loading ?
                        <ActivityIndicator color='#fff' style={{}} />
                        :
                        <Text style={[styles.buttonTextStyle, this.props.buttonTextStyle]}>{this.props.buttonText}</Text>
                }
            </TouchableOpacity>
        );
    }
}