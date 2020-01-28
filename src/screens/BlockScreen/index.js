import React, { Component } from 'react';
import { Animated, ActivityIndicator, TextInput, View, TouchableOpacity, Text, StyleSheet, Dimensions, ScrollView, Image, ImageBackground } from 'react-native';
import { styles } from './styles';
import { TextBox } from '../../components/TextBox';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const user_listArray = [
    { name: 'John', profileImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2aI9JzurL92T5EZ6c3Fq1Xnc7sIXVNZMV1WIOb0G_ILOFXvqS&s' },
    { name: 'Maria', profileImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvKwestX7dElmlCPFShkYdNGNQOMrOzaY53DGIn1iKQJyvZKtpBA&s' },
    { name: 'Denny', profileImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7OD0VF3v5SmJG-CclAds2drBOdSc_NQCcI1O5EXQezqRh5gNAEQ&s' },
    { name: 'Alina', profileImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMzGEiGRhyALIUPmfWh5NsjrAhFJdJNOc31_lKyBROz8PCb7kY-A&s' },
    { name: 'Keya', profileImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEZ3tT_9W2VN3l0-2ma5k0xnAPgQRdvJETCrIeCYyvQ4b1F7XM8g&s' },
]
export class BlockScreen extends Component {

    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            search: '',
            user_list: user_listArray
        };
    }

    removeItem = (index) => {
        let user_list = this.state.user_list
        user_list.splice(index, 1);
        this.setState({ user_list })
    }

    searchUser = (value) => {
        let user_list = user_listArray
        let updated_list = []
        for (let i = 0; i < user_list.length; i++) {
            if (user_list[i].name.includes(value))
                updated_list.push(user_list[i])
        }
        this.setState({ user_list: updated_list })
    }

    render() {
        const { user_list } = this.state
        return (
            <ImageBackground source={require('../../assets/images/backgroundImage.png')} style={{ flex: 1 }}>
                <View style={styles.header}>
                    <TouchableOpacity style={{ flex: 1 }} onPress={() => this.props.navigation.goBack(null)}>
                        <Ionicons name="ios-arrow-back" size={35} color="#000" />
                    </TouchableOpacity>
                    <Text style={styles.HeaderTitle}>Block</Text>
                </View>
                <View style={styles.mainContainer}>
                    <TextBox
                        placeholder={'Search'}
                        onChangeText={(value) => this.searchUser(value)}
                    />
                    <ScrollView>
                        <View style={styles.userListView}>
                            {
                                user_list.map((item, index) => {
                                    return (
                                        <View style={styles.userItem}>
                                            <View style={styles.profileImageView}>
                                                <Image
                                                    source={{ uri: item.profileImg }}
                                                    style={styles.profileImageStyle}
                                                />
                                            </View>
                                            <Text style={styles.usernameStyle}>{item.name}</Text>
                                            <TouchableOpacity
                                                style={styles.crossIconView}
                                                onPress={() => this.removeItem(index)}
                                            >
                                                <MaterialCommunityIcons name="close" size={22} color="#000" />
                                            </TouchableOpacity>
                                        </View>
                                    )
                                })
                            }
                        </View>
                    </ScrollView>
                </View>
            </ImageBackground>
        );
    }
}

export default BlockScreen