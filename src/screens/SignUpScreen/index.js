import React, { Component } from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity, SafeAreaView, ScrollView, KeyboardAvoidingView } from 'react-native';
import { TextBoxWithError } from '../../components/TextBoxWithError';
import { FullButton } from '../../components/FullButton';
import { styles } from './styles';
import CheckBox from 'react-native-check-box';
import firebaseApp from '../../common/firebaseApp';
import {Toast,Root} from "native-base";
const textBoxArray = [
    { "placeholder": 'Full name', "value": "", "error": "", "error_message": "Please enter a valid name","keyboardType":"default","secureTextEntry": false },
    { "placeholder": 'Contact number', "value": "", "error": "", "error_message": "Please enter a valid contact number","keyboardType":"number-pad","secureTextEntry": false },
    { "placeholder": 'Username', "value": "", "error": "", "error_message": "Please enter a valid username","keyboardType":"default","secureTextEntry": false },
    { "placeholder": 'Email', "value": "", "error": "", "error_message": "Please enter a valid email","keyboardType":"email-address","secureTextEntry": false },
    { "placeholder": 'Password', "value": "", "error": "", "error_message": "Please enter a valid password","keyboardType":"default","secureTextEntry": true },
]


export default class SignUpScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: false,
            fullname: '',
            phone: '',
            username: '',
            email: '',
            password: '',
            fullnameError: '',
            phoneError: '',
            usernameError: '',
            emailError: '',
            passwordError: '',
            textBoxArray:textBoxArray,
            validated:false,
            loading:false
        }
    }

    onChangeText = (value,index) => {
        let textBoxArray = this.state.textBoxArray
        textBoxArray[index].value = value
        this.setState({textBoxArray})
    }

    validateFields = () => {
        let textBoxArray = this.state.textBoxArray

        //checking if all values are filled or not
        for(let i=0; i<textBoxArray.length; i++){
            if(textBoxArray[i].value === ""){
                textBoxArray[i].error = textBoxArray[i].error_message
            }else{
                textBoxArray[i].error = ""
            }
        }

        //validating phone number
        let phone_number = textBoxArray[1].value
        var is10Digit = /^\d{10}$/.test(phone_number)
        if(phone_number!==""){
            if(is10Digit){
                textBoxArray[1].error = ""
            }else{
                textBoxArray[1].error = "Contact number must have 10 digits"
            }
        }

        //validating email address
        let email = textBoxArray[3].value
        var emailregx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/
        if(email!==""){
            if(emailregx.test(email)){
                textBoxArray[3].error = ""
            }else{
                textBoxArray[3].error = "Please enter a valid email address"
            }
        }

        //validating password
        let password = textBoxArray[4].value
        let passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/
        if(password!==""){
            if(passRegex.test(password)){
                textBoxArray[4].error = ""
            }else{
                textBoxArray[4].error = "password must be at least 8 digits, must contain one special character and one uppercase letter"
            }
        }

        //checking if all fields are validated or not
        let allFields_validated = true
        this.setState({validated:true,textBoxArray},()=>{
            for(let i=0; i<this.state.textBoxArray.length; i++){
                if(this.state.textBoxArray[i].error !== ""){
                    allFields_validated = false
                }
            }
            if(allFields_validated){
                if(this.state.isChecked){
                    this.onSignUp()
                }else{
                    Toast.show({
                        text: "Please agree to the terms and condition!",
                        type: "warning",
                    })
                }
            }else{
                Toast.show({
                    text: "Please validate all fields!",
                    type: "warning",
                })
            }
        })
    }

    onSignUp = () => {
        this.setState({loading:true})
        let textBoxArray = this.state.textBoxArray;
        let FullName = textBoxArray[0].value;
        let Phone = textBoxArray[1].value;
        let UserName = textBoxArray[2].value;
        let Email = textBoxArray[3].value;
        let Password = textBoxArray[4].value;

        firebaseApp.auth().createUserWithEmailAndPassword(Email,Password).then((user) => {
            user  = user.user
            firebaseApp.auth().currentUser.updateProfile({ FullName: "Dummy dummy" });
            firebaseApp.database().ref(`/users/${user.uid}`).set({
                UId: user.uid,
                FullName,
                UserName,
                Email,
                Phone,
                Gender:"",
                DOB:"",
                Address:"",
                Style:"",
                BodyShape:"",
                EthnicityName:"",
                HairColor:"",
                Height:"",
                Audience:"",
                NotificationState:"",
                ProfilePicture:"",
                BeModel:"Yes",
                ShopDropPoints:"",
                ProfileDescription:"I want to be a model.",
            })
            Toast.show({
                text: "You are successfully registered, please login",
                type: "success",
                duration: 2000 
            })
            setTimeout(()=>{
                this.props.navigation.navigate('LoginScreen')
            },2000)
            this.setState({loading:false})
        }).catch((error) => {
            textBoxArray[3].error = error.message;
            this.setState({textBoxArray,loading:false})
            Toast.show({
                text: error.message,
                type: "danger",
            })
        })
    }

    render() {
        const { fullname, phone, username, email, password, fullnameError, phoneError, usernameError, emailError, passwordError } = this.state
        return (
            <Root>
            <ImageBackground source={require('../../assets/images/whitebackground.jpg')} style={styles.MainContainer}>
                <View style={{ flex: 1 }}>
                    <ScrollView contentContainerStyle={{ paddingVertical: 50 }}>
                        <View style={styles.ImageView}>
                            <Image source={require('../../assets/images/logo.png')} style={styles.Imagelogo}></Image>
                        </View>
                        <View style={styles.textBoxContainer}>
                            {
                                textBoxArray.map((item, index) => {
                                    return (
                                        <TextBoxWithError
                                            textInputStyle={item.error === "" ? styles.textInputStyle : styles.textInputStyleWithError}
                                            placeholder={item.placeholder}
                                            errorText={item.error}
                                            value={item.value}
                                            keyboardType={item.keyboardType}
                                            secureTextEntry={item.secureTextEntry}
                                            onChangeText={(value) => this.onChangeText(value,index)}
                                        />
                                    )
                                })
                            }
                        </View>
                        <View style={styles.termsConditionView}>
                            <CheckBox
                                checkBoxColor={'#06fbc7'}
                                checkedCheckBoxColor="#06fbc7"
                                onClick={() => {
                                    this.setState({
                                        isChecked: !this.state.isChecked
                                    })
                                }}
                                isChecked={this.state.isChecked} />
                            <Text style={styles.agreetxt} >Agree to </Text>
                            <TouchableOpacity onPress={() => {this.props.navigation.navigate('TermConditionScreen')}} >
                                <Text style={styles.signinbluetxt}>Terms & conditions.</Text>
                            </TouchableOpacity>
                        </View>
                        <FullButton
                            buttonText={'Create account'}
                            buttonStyle={styles.buttonStyle}
                            onPress={this.validateFields}
                            loading={this.state.loading}
                        />
                        <View style={{ flexDirection: 'row', alignSelf: 'center', justifyContent: 'center', marginVertical: 20 }}>
                            <Text style={styles.signinblktxt} >Already have an account? </Text>
                            <TouchableOpacity onPress={() => this.props.navigation.goBack(null)} style={styles.signinblktxt}>
                                <Text style={styles.signinbluetxt}>Sign in</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
            </ImageBackground>
            </Root>
        );
    }
}
