import React, { Component } from 'react';
import { Animated, ActivityIndicator, TextInput, View, TouchableOpacity, Text, StyleSheet, Dimensions, ScrollView, Image, ImageBackground } from 'react-native';
import { styles } from './styles';
export class ImageButton extends Component {
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
            <TouchableOpacity style={[styles.buttonStyle,this.props.buttonStyle]} onPress={()=>{this.props.onSelecteBodyShape()}}>
                <Image
                    style={{resizeMode:'contain',width:undefined,height:undefined,flex:1}} 
                    source={this.props.source}
                />
                <Text style={[styles.buttonTextStyle,this.props.buttonTextStyle]}>{this.props.buttonText}</Text>
            </TouchableOpacity>
        );
    }
}