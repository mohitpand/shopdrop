import React, { Component } from 'react';
import { Animated, ActivityIndicator, TextInput, View, TouchableOpacity, Text, StyleSheet, Dimensions, ScrollView, Image, ImageBackground,BackHandler } from 'react-native';
import { styles } from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
export class HomeScreen extends Component {

    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            text: '',
            user_name: 'dhaval.shah',
            phone_no: '',
            activeTab: 0,
            password: 'Dhaval@123',
            loading: false
        };
    }

    /* componentDidMount(){
        //this.animate();
        this.backButton = BackHandler.addEventListener('hardwareBackPress', () =>{
          BackHandler.exitApp()
          return true;
          });
      }
      componentWillUnmount(){
      this.backButton.remove();
      } */

    render() {
        return (
            <ImageBackground source={require('../../assets/images/backgroundImage.png')} style={{ flex: 1 }}>
                
                <View style={styles.header}>
                    <View style={{flex:1}}>
                        <TouchableOpacity style={styles.menuCircle} onPress={() => this.props.navigation.openDrawer()}>
                            {/* <MaterialIcons name="clear-all" size={40} color="#000" /> */}
                            <Image
                                style={{flex:1,height:undefined,width:undefined}}
                                source={require('../../assets/images/menu_green.png')}
                            />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.HeaderTitle}>Home</Text>
                </View>
                <ScrollView>
                <View style={styles.mainContainer}>

                    <TouchableOpacity style={styles.optionBox} >
                        <Image 
                            source={require('../../assets/images/beModel.png')}
                            style={styles.boxImageStyle}
                        />
                        <Text style={styles.boxText}>Be a Model</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.optionBox} >
                        <Image 
                            source={require('../../assets/images/helpModel.png')}
                            style={styles.boxImageStyle}
                        />
                        <Text style={styles.boxText}>Help a Model</Text>
                    </TouchableOpacity>

                </View>
                </ScrollView>
            </ImageBackground>
        );
    }
}

export default HomeScreen