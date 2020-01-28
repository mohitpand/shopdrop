import React, { Component } from 'react';
import { Animated, ActivityIndicator, TextInput, View, TouchableOpacity, Text, StyleSheet, Dimensions, ScrollView, Image, ImageBackground, SafeAreaView } from 'react-native';
import { styles } from './styles';
import { Icon, Toast, Root, Content } from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { FullButton } from '../../components/FullButton';
import firebaseApp from '../../common/firebaseApp';
import { TextBoxWithError } from '../../components/TextBoxWithError';
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export class LoginScreen extends Component {

    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errormessage: '',
            errorpasswordmessage: '',
            emailerror: false,
            passworderror: false,
            loading: false
        };
    }

    componentDidMount = () => {

    }

    validate = () => {

        var emt = this.state.email;
        var password = this.state.password;
        console.log('Empty email' + JSON.stringify(emt));
        var emailregx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/
        if (emt === "" && password === "") {
            this.setState({ emailerror: true, passworderror: true, errormessage: 'User not found', errorpasswordmessage: 'Password not found' })
        }
        else {
            if (emailregx.test(emt)) {
                this.setState({ emailerror: false, confirmCodeMsg: 'The confirmation code was sent to your email, please enter it here:' });
                console.log("Valid Email");
                this.SingIn(this.state.email, this.state.password);
            } else {
                this.setState({ emailerror: true, errormessage: 'Your email is not valid', loading: false })
            }
        }
    }

    navigationScreen = (naviagteScreen) => {
        this.props.navigation.navigate(naviagteScreen)
    }


    SingIn = (email, password) => {
        this.setState({ loading: true })
        firebaseApp.auth().signInWithEmailAndPassword(email, password).then((response) => {
            this.setState({ loading: false })
            Toast.show({ text: 'SuccessFully Login', type: 'success', duration: 2000 })
            this.props.navigation.navigate('AuthNavigator')
        }).catch((error) => {

            Toast.show({ text: error.message, type: 'danger', duration: 2000 })
            this.setState({ passworderror: true, loading: false })
            //alert(error.message)
        })
    }

    render() {
        return (
                <Root>
                    <ImageBackground source={require('../../assets/images/whitebackground.jpg')} style={styles.MainContainer} >
            <View style={styles.safeareaviewcontainer}>
            <ScrollView contentContainerStyle={{ paddingBottom: 50}}>
                        <View style={styles.logoview} >
                            <Image source={require('../../assets/images/logo.png')} style={styles.Imagelogo}></Image>
                        </View>
                        <View style={styles.DetailBoxView} >
                            <View style={styles.txtboxview}>

                                <TextBoxWithError
                                    textInputStyle={this.state.emailerror === false ? styles.textInputStyle : styles.textInputStyleWithError}
                                    placeholder="Email"
                                    returnKeyType="next"
                                    textContentType="username"
                                    errorText={this.state.errormessage}
                                    value={this.state.email}
                                    onChangeText={(value) => this.setState({ email: value })} />
                                <TextBoxWithError
                                    textInputStyle={this.state.passworderror === false ? styles.textInputStyle : styles.textInputStyleWithError}
                                    placeholder="password"
                                    returnKeyType="go"
                                    secureTextEntry={true}
                                    value={this.state.password}
                                    textContentType="password"
                                    errorText={this.state.errorpasswordmessage}
                                    onChangeText={(value) => this.setState({ password: value })} />

                                <TouchableOpacity onPress={() => this.navigationScreen('ForgotPasswordScreen')} style={styles.frgtview}>
                                    <Text style={styles.signintxt}>Forgot Password?</Text>
                                </TouchableOpacity>

                                <FullButton
                                    buttonStyle={styles.buttonStyle}
                                    buttonText={'Sign in'}
                                    onPress={() => this.validate()/* this.onSignUp()  this.SingIn(this.state.email,this.state.password)*/}
                                    loading={this.state.loading}
                                />

                            </View>
                            <View style={{ flex: 1 }}>
                                <View style={{ flex: 1, marginHorizontal:15,marginVertical:15 }}>
                                    <Text style={[styles.smallLabel, { marginVertical: 10 }]} >or continue with </Text>
                                    <View style={[styles.btnview,{ flex:1,marginHorizontal:10,marginVertical:10}]} >
                                        <TouchableOpacity style={styles.iconbtnview}
                                            onPress={() => { }} >
                                            <View style={[styles.imageStyle, { height: 25 }]}>
                                                <Image source={require('../../assets/images/fblogo.png')} style={styles.iconbtn} />
                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.iconbtnview} onPress={() => { }} >
                                            <View style={styles.imageStyle}>
                                                <Image source={require('../../assets/images/googlepluseicon.png')} style={styles.iconbtn} />
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={[styles.btnview,{marginVertical:10}]}>
                                        <Text style={styles.signinblktxt} >Don't have an account? </Text>
                                        <TouchableOpacity onPress={() => this.navigationScreen('SignUpScreen')} style={styles.signinblktxt}>
                                            <Text style={styles.signinbluetxt}>Sign Up</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>

                            </View>

                        </View>
                        </ScrollView>
            </View>
                    </ImageBackground>
                </Root>
        );
    }

}

export default LoginScreen
