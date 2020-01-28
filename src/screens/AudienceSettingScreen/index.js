import React, { Component } from 'react';
import { Animated, ActivityIndicator, TextInput, View, TouchableOpacity, Text, StyleSheet, Dimensions, ScrollView, Image, ImageBackground } from 'react-native';
import { styles } from './styles';
import { TextBox } from '../../components/TextBox';
import { HalfButton } from '../../components/HalfButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
const radio_array = [
    { name: 'Private' },
    { name: 'Group' },
    { name: 'All users' }
]
export class AudienceSettingScreen extends Component {
    static navigationOptions = {
        header: null
    };
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            current_pasword: '',
            new_pasword: '',
            confirm_pasword: '',
            selectedRadio:2
        };
    }

    selectRadio = (index) => {
        this.setState({selectedRadio:index})
    }

    render() {
        const {selectedRadio} = this.state
        return (
            <ImageBackground source={require('../../assets/images/backgroundImage.png')} style={{ flex: 1 }}>
                <View style={styles.header}>
                    <TouchableOpacity style={{ flex: 1 }} onPress={()=>this.props.navigation.goBack(null)}>
                        <Ionicons name="ios-arrow-back" size={35} color="#000" />
                    </TouchableOpacity>
                    <Text style={styles.HeaderTitle}>Audience</Text>
                </View>
                <ScrollView>
                <View style={styles.mainContainer}>
                    <View style={styles.menuBox}>
                        <Text style={styles.labelStyle}>Audience</Text>
                        <View style={styles.radioView}>
                            {
                                radio_array.map((item, index) => {
                                    return (
                                        <View style={styles.radioItem}>
                                            <TouchableOpacity 
                                                style={selectedRadio === index ? styles.selected_radioLargeCircle : styles.radioLargeCircle}
                                                onPress={()=>this.selectRadio(index)}
                                            >
                                                <View style={selectedRadio === index ? styles.selected_radioSmallCircle : styles.radioSmallCircle} />
                                            </TouchableOpacity>
                                            <Text style={styles.radioLabel}>{item.name}</Text>
                                        </View>
                                    )
                                })
                            }
                        </View>
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

export default AudienceSettingScreen