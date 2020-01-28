import React, { Component } from 'react';

import { View, TextInput, Text, ImageBackground, Image, TouchableOpacity, Button, SafeAreaView, Alert } from 'react-native';
import firebaseApp from '../../common/firebaseApp';
import { styles } from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TextBoxWithError } from '../../components/TextBoxWithError';
import { Toast, Root } from "native-base";
import { FullButton } from '../../components/FullButton';
import { ScrollView } from 'react-native-gesture-handler';

export class ForgotPasswordScreen extends Component {

  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      emailerror: false,
      errormessage: '',

    };
  }
  validate = () => {

    var emt = this.state.email;
    console.log('Empty email' + JSON.stringify(emt));
    var emailregx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/
    if (emt === "") {
      this.setState({ emailerror: true, errormessage: 'Email not found' })
    }
    else {
      if (emailregx.test(emt)) {
        this.setState({ emailerror: false, confirmCodeMsg: 'The confirmation code was sent to your email, please enter it here:' });
        console.log("Valid Email");
        this.SendEmailForForgotPassword(this.state.email)
      } else {
        this.setState({ emailerror: true, errormessage: 'Your email is not valid' })
      }
    }
  }

  SendEmailForForgotPassword = (email) => {
    this.setState({ loading: true })
    firebaseApp.auth().sendPasswordResetEmail(email).then(() => {
      Toast.show({ text: 'Please check your email...', type: 'success', duration: 2000 })
      this.setState({ loading: false })
    }).catch((error) => {
      this.setState({ loading: false })
      Toast.show({ text:error.message, type: 'danger', duration: 2000 })
    })
  }

  render() {
    return (
      <Root>
        <View style={styles.safeareaviewcontainer}>
          <ImageBackground source={require('../../assets/images/whitebackground.jpg')} style={styles.MainContainer}>
            <ScrollView>
              <View style={styles.headerview} >
                <TouchableOpacity style={styles.leftbtn} onPress={() => this.props.navigation.goBack()}>
                  <Ionicons name="ios-arrow-back" size={35} color="#000" />
                </TouchableOpacity>
              </View>

              <View style={styles.DetailBoxView} >
                <View style={styles.txtview} >
                  <Text style={styles.titletxt}>Forgot Password</Text>
                  <Text style={styles.detailtxt}>Please enter your email address below to retrieve your password.</Text>
                </View>

                <TextBoxWithError
                  textInputStyle={this.state.emailerror === false ? styles.textInputStyle : styles.textInputStyleWithError}
                  placeholder="Email"
                  value={this.state.email}
                  errorText={this.state.errormessage}
                  onChangeText={(value) => this.setState({ email: value })} />

                <FullButton
                  buttonStyle={{ marginTop: 16 }}
                  onPress={() => { this.validate() }}
                  buttonText={'Send'} 
                  loading={this.state.loading} 
                  />

                <TouchableOpacity onPress={() => this.props.navigation.goBack(null)}>
                  <Text style={styles.signintxt}>
                    Back to Sign in
                      </Text>
                </TouchableOpacity>

              </View>

            </ScrollView>
          </ImageBackground>
        </View>
      </Root>
    );
  }
}
export default ForgotPasswordScreen;