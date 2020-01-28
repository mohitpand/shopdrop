import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Dimensions, ScrollView, ImageBackground, Image } from 'react-native';
import { styles } from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
export class TermConditionScreen extends Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            progress: 0,
            indeterminate: true,
        };
    }

    render(){
        return(
            <ImageBackground source={require('../../assets/images/backgroundImage.png')} style={{ flex: 1 }}>
              <View style={styles.header}>
              <TouchableOpacity style={{ flex: 1 }} onPress={()=> this.props.navigation.goBack(null)}>
              <Ionicons name="ios-arrow-back" size={35} color="#000" />
                    </TouchableOpacity>
                    <Text style={styles.HeaderTitle}>Terms & Conditions</Text>
                </View>

                <ScrollView style={styles.menuBox}>
                    <Text>
                        Help protect your website and its users with clear and fair website terms and conditions. These terms and conditions for a website set out key issues such as acceptable use, privacy, cookies, registration and passwords, intellectual property, links to other sites, termination and disclaimers of responsibility. Terms and conditions are used and necessary to protect a website owner from liability of a user relying on the information or the goods provided from the site then suffering a loss.
                        Help protect your website and its users with clear and fair website terms and conditions. These terms and conditions for a website set out key issues such as acceptable use, privacy, cookies, registration and passwords, intellectual property, links to other sites, termination and disclaimers of responsibility. Terms and conditions are used and necessary to protect a website owner from liability of a user relying on the information or the goods provided from the site then suffering a loss.
                        Other than the content you own, under these Terms, Company Name and/or its licensors own all the intellectual property rights and materials contained in this Website.

    You are granted limited license only for purposes of viewing the material contained on this Website.
    Terms and Conditions for Company Name
    Introduction
    These Website Standard Terms and Conditions written on this webpage shall manage your use of our website, Webiste Name accessible at Website.com.

    These Terms will be applied fully and affect to your use of this Website. By using this Website, you agreed to accept all terms and conditions written in here. You must not use this Website if you disagree with any of these Website Standard Terms and Conditions.

    Minors or people below 18 years old are not allowed to use this Website.

    Intellectual Property Rights
    Other than the content you own, under these Terms, Company Name and/or its licensors own all the intellectual property rights and materials contained in this Website.

    You are granted limited license only for purposes of viewing the material contained on this Website.

    Restrictions
    You are specifically restricted from all of the following:

    publishing any Website material in any other media;
    selling, sublicensing and/or otherwise commercializing any Website material;
    publicly performing and/or showing any Website material;
    using this Website in any way that is or may be damaging to this Website;
    using this Website in any way that impacts user access to this Website;
    using this Website contrary to applicable laws and regulations, or in any way may cause harm to the Website, or to any person or business entity;
    engaging in any data mining, data harvesting, data extracting or any other similar activity in relation to this Website;
    using this Website to engage in any advertising or marketing.
    Certain areas of this Website are restricted from being access by you and Company Name may further restrict access by you to any areas of this Website, at any time, in absolute discretion. Any user ID and password you may have for this Website are confidential and you must maintain confidentiality as well.
    Terms and Conditions for Company Name
    Introduction
    These Website Standard Terms and Conditions written on this webpage shall manage your use of our website, Webiste Name accessible at Website.com.

    These Terms will be applied fully and affect to your use of this Website. By using this Website, you agreed to accept all terms and conditions written in here. You must not use this Website if you disagree with any of these Website Standard Terms and Conditions.

    Minors or people below 18 years old are not allowed to use this Website.

    Intellectual Property Rights
    Other than the content you own, under these Terms, Company Name and/or its licensors own all the intellectual property rights and materials contained in this Website.

    You are granted limited license only for purposes of viewing the material contained on this Website.

    Restrictions
    You are specifically restricted from all of the following:

    publishing any Website material in any other media;
    selling, sublicensing and/or otherwise commercializing any Website material;
    publicly performing and/or showing any Website material;
    using this Website in any way that is or may be damaging to this Website;
    using this Website in any way that impacts user access to this Website;
    using this Website contrary to applicable laws and regulations, or in any way may cause harm to the Website, or to any person or business entity;
    engaging in any data mining, data harvesting, data extracting or any other similar activity in relation to this Website;
    using this Website to engage in any advertising or marketing.
    Certain areas of this Website are restricted from being access by you and Company Name may further restrict access by you to any areas of this Website, at any time, in absolute discretion. Any user ID and password you may have for this Website are confidential and you must maintain confidentiality as well.
                    </Text>
                </ScrollView>
               
            </ImageBackground>
        )
    }
}

export default TermConditionScreen;