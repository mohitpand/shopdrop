import React, { Component } from 'react';
import { Animated, ActivityIndicator, TextInput, View, TouchableOpacity, Text, StyleSheet, Dimensions, ScrollView, Image, ImageBackground } from 'react-native';
import { styles } from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
const questions_array = [
    { question: 'How to Be a Model', answer: 'Help protect your website and its users with clear and fair website terms and conditions. These terms and conditions for a website set out key issues such as acceptable use, privacy, cookies, registration and passwords, intellectual property, links to other sites, termination and disclaimers of responsibility. Terms and conditions are used and necessary to protect a website owner from liability of a user relying on the information or the goods provided from the site then suffering a loss.Making your own terms and conditions for your website is hard, not impossible, to do. It can take a few hours to few days for a person with no legal background to make. But worry no more; we are here to help you out.All you need to do is fill up the blank spaces and then you will receive an email with your personalized terms and conditions.Looking for a Privacy Policy? Check out Privacy Policy Generator.The accuracy of the generated document on this website is not legally binding. Use at your own risk.', isExpanded: false },
    { question: 'How Help Model works ', answer: 'Help protect your website and its users with clear and fair website terms and conditions. These terms and conditions for a website set out key issues such as acceptable use, privacy, cookies, registration and passwords, intellectual property, links to other sites, termination and disclaimers of responsibility. Terms and conditions are used and necessary to protect a website owner from liability of a user relying on the information or the goods provided from the site then suffering a loss.Making your own terms and conditions for your website is hard, not impossible, to do. It can take a few hours to few days for a person with no legal background to make. But worry no more; we are here to help you out.All you need to do is fill up the blank spaces and then you will receive an email with your personalized terms and conditions.Looking for a Privacy Policy? Check out Privacy Policy Generator.The accuracy of the generated document on this website is not legally binding. Use at your own risk.', isExpanded: false },
    { question: 'How ShopDrop works', answer: 'Help protect your website and its users with clear and fair website terms and conditions. These terms and conditions for a website set out key issues such as acceptable use, privacy, cookies, registration and passwords, intellectual property, links to other sites, termination and disclaimers of responsibility. Terms and conditions are used and necessary to protect a website owner from liability of a user relying on the information or the goods provided from the site then suffering a loss.Making your own terms and conditions for your website is hard, not impossible, to do. It can take a few hours to few days for a person with no legal background to make. But worry no more; we are here to help you out.All you need to do is fill up the blank spaces and then you will receive an email with your personalized terms and conditions.Looking for a Privacy Policy? Check out Privacy Policy Generator.The accuracy of the generated document on this website is not legally binding. Use at your own risk.', isExpanded: false },
    {
        question: 'Ways to earn ShopDrop points',
        answer:
        {
            question1: 'Be a Model', answer1: 'Any addition to or of any terms on any Source Code of the font ("Embedded Fonts"). Embedded Fonts are used only in or among You, Apple or any part thereof, and wants to make reasonable conjectures as to satisfy the requirements of this software and its terms, do not conflict with standard executables and testcases with their corresponding Standard Version (2) You may apply any procedure that produces a Derived Program with other (possibly commercial) software distribution system, which is intellectual property rights or otherwise. As a condition to exercising the rights granted by that Participant.If You distribute must include a licensing fee for the Program (or any work of your choice that may contain terms different from this software for any other intellectual property right is granted to You a world-wide, royalty-free, non-exclusive license, to the text of the Work. If you assert a patent infringement against You in that place. In the case where You are in your license (except to note that you create or to which the editorial revisions, annotations, elaborations, or other property right claims or Losses relating to the text of this license.',
            question2: 'Help a Model', answer2: 'Any addition to or of any terms on any Source Code of the font ("Embedded Fonts"). Embedded Fonts are used only in or among You, Apple or any part thereof, and wants to make reasonable conjectures as to satisfy the requirements of this software and its terms, do not conflict with standard executables and testcases with their corresponding Standard Version (2) You may apply any procedure that produces a Derived Program with other (possibly commercial) software distribution system, which is intellectual property rights or otherwise. As a condition to exercising the rights granted by that Participant.If You distribute must include a licensing fee for the Program (or any work of your choice that may contain terms different from this software for any other intellectual property right is granted to You a world-wide, royalty-free, non-exclusive license, to the text of the Work. If you assert a patent infringement against You in that place. In the case where You are in your license (except to note that you create or to which the editorial revisions, annotations, elaborations, or other property right claims or Losses relating to the text of this license.',
        },
        isExpanded: false
    },
]
export class FAQScreen extends Component {

    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            questions_array: questions_array
        };
    }

    toggleAnswer = (index) => {
        let questions_array = this.state.questions_array
        questions_array[index].isExpanded = !questions_array[index].isExpanded
        this.setState({ questions_array })
    }

    render() {
        const { questions_array } = this.state
        return (
            <ImageBackground source={require('../../assets/images/backgroundImage.png')} style={{ flex: 1 }}>
                <View style={styles.header}>
                    <TouchableOpacity style={{ flex: 1 }} onPress={()=>this.props.navigation.goBack(null)}>
                        <Ionicons name="ios-arrow-back" size={35} color="#000" />
                    </TouchableOpacity>
                    <Text style={styles.HeaderTitle}>FAQ</Text>
                </View>
                <ScrollView>
                    <View style={styles.mainContainer}>
                        {
                            questions_array.map((item, index) => {
                                return (
                                    <View style={styles.menuBox}>
                                        <View style={styles.menuItem}>
                                            <View style={styles.menuTextView}>
                                                <Text style={styles.qusetionStyle}>{item.question}</Text>
                                            </View>
                                            <TouchableOpacity
                                                style={styles.menuRightIconView}
                                                onPress={() => this.toggleAnswer(index)}
                                            >
                                                <Ionicons name={item.isExpanded ? "ios-arrow-up" : "ios-arrow-forward"} size={25} color="gray" />
                                            </TouchableOpacity>
                                        </View>
                                        {
                                            item.isExpanded ?
                                                typeof (item.answer) !== 'object' ?
                                                    <View style={styles.answerView}>
                                                        <Text style={styles.answerStyle}>{item.answer}</Text>
                                                    </View>
                                                    :
                                                    <View>
                                                        <View style={styles.menuSubTextView}>
                                                            <Text style={styles.qusetionStyle}>{item.answer.question1}</Text>
                                                        </View>
                                                        <View style={styles.answerView}>
                                                            <Text style={styles.answerStyle}>{item.answer.answer1}</Text>
                                                        </View>
                                                        <View style={styles.menuSubTextView}>
                                                            <Text style={styles.qusetionStyle}>{item.answer.question2}</Text>
                                                        </View>
                                                        <View style={styles.answerView}>
                                                            <Text style={styles.answerStyle}>{item.answer.answer2}</Text>
                                                        </View>
                                                    </View>
                                                :
                                                null
                                        }
                                    </View>
                                )
                            })
                        }
                    </View>
                </ScrollView>
            </ImageBackground>
        );
    }
}

export default FAQScreen