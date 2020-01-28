import React, { Component } from 'react';
import { Animated, ActivityIndicator, TextInput, View, TouchableOpacity, Text, StyleSheet, Dimensions, ScrollView, Image, ImageBackground } from 'react-native';
import { styles } from './styles';
import { FullButton } from "../../components/FullButton";


export class ViewProfilesScreen extends Component {
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
            <ImageBackground source={require('../../assets/images/whitebackground.jpg')} style={{ flex: 1 }}>
                <View style={{ flex: 1, backgroundColor: '#06fbc7' }}>
                    <View style={styles.absoluteimage}>
                        <Image
                            style={{ flex: 1, height: undefined, width: undefined, borderRadius: 65 }}
                            source={require('../../assets/images/iconuser.jpeg')}
                        />
                    </View>
                </View>


                <View style={{ flex: 2.3 }}>

                    <View style={{ flexDirection: 'row', height: 100, padding: 5 }}>

                        <View style={{ flex: 1 }}>

                        </View>
                        <View style={styles.viewBoxesStyles}>
                            <Text style={styles.textstyle}>140</Text>
                            <Text style={styles.textstylesmall}>Portfolio</Text>
                        </View>
                        <View style={styles.viewBoxesStyles}>
                            <Text style={styles.textstyle}>24K</Text>
                            <Text style={styles.textstylesmall}>Followers</Text>
                        </View>
                    </View>
                    <View style={styles.deviderline} />
                    <ScrollView>
                        <View style={{ flexDirection: 'row', height: 100, padding: 5 }}>
                            <View style={styles.viewBoxesStyles}>
                                <Text style={styles.textstyle}>Mahammad Momin</Text>
                                <Text style={styles.textstylesmall}>San Francisco, CA</Text>
                            </View>
                            <View style={styles.viewBoxesStyles}>
                                <Text style={styles.textstyle}>Casual</Text>
                                <Text style={styles.textstylesmall}>Age:24 Years</Text>
                            </View>
                            <View style={styles.viewBoxesStyles}>
                                <Text style={styles.textstyle}>Rectangle</Text>
                                <Text style={styles.textstylesmall}>Height: 5 ft 9 inches</Text>
                            </View>

                        </View>
                        <View style={styles.deviderline} />

                        <View style={styles.scrollableviewstyle}>
                            <Text style={styles.textstylesmall}>Hi, I am Mahammad and I love of fashion. I am devopler At India.Help protect your website and its users with clear and fair website terms and conditions. These terms and conditions for a website set out key issues such as acceptable use, privacy, cookies, registration and passwords, intellectual property, links to other sites, termination and disclaimers of responsibility. Terms and conditions are used and necessary to protect a website owner from liability of a user relying on the information or the goods provided from the site then suffering a loss.Help protect your website and its users with clear and fair website terms and conditions. These terms and conditions for a website set out key issues such as acceptable use, privacy, cookies, registration and passwords, intellectual property, links to other sites, termination and disclaimers of responsibility. Terms and conditions are used and necessary to protect a website owner from liability of a user relying on the information or the goods provided from the site then suffering a loss.
                            Help protect your website and its users with clear and fair website terms and conditions. These terms and conditions for a website set out key issues such as acceptable use, privacy, cookies, registration and passwords, intellectual property, links to other sites, termination and disclaimers of responsibility. Terms and conditions are used and necessary to protect a website owner from liability of a user relying on the information or the goods provided from the site then suffering a loss.
                            Help protect your website and its users with clear and fair website terms and conditions. These terms and conditions for a website set out key issues such as acceptable use, privacy, cookies, registration and passwords, intellectual property, links to other sites, termination and disclaimers of responsibility. Terms and conditions are used and necessary to protect a website owner .</Text>
                        </View>
                    </ScrollView>
                    <View style={styles.bottomView}>
                        <FullButton
                            buttonStyle={{ marginBottom: 5 }}
                            buttonText={'Edit Profile'}
                        />
                    </View>
                </View>




            </ImageBackground>
        )
    }
}

export default ViewProfilesScreen