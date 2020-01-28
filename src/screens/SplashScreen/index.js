import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Dimensions, ScrollView, ImageBackground, Image,BackHandler } from 'react-native';
import { styles } from './styles';
import * as Progress from 'react-native-progress';


export class SplashScreen extends Component {
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
    componentDidMount(){
        this.animate();
      /*   this.backButton = BackHandler.addEventListener('hardwareBackPress', () =>{
          BackHandler.exitApp()
          return true;
          }); */
      }
     /*  componentWillUnmount(){
      this.backButton.remove();
      } */
    
    
    animate() {
        let progress = this.state.progress;
        this.setState({ progress },()=>{
            console.log('here'+JSON.stringify(progress))
        });
        setTimeout(() => {
            this.setState({ indeterminate: false });
           /*  setInterval(() => {
                progress += Math.random() / 5;
                if (progress > 1) {
                    progress = 1;
                    //this.props.navigation.navigate('LoginScreen')
                }
                this.setState({ progress });
                
            }, 500); */
            setTimeout(() => {
                progress += 0.2;
                this.setState({ progress },()=>{
                    setTimeout(() => {
                        progress += 0.3;
                        this.setState({ progress },()=>{
                            setTimeout(() => {
                                progress += 0.5;
                                this.setState({ progress },()=>{
                                    console.log('here'+progress)
                                    setTimeout(() => {
                                        this.props.navigation.navigate('IntroScreen')
                                    }, 1000);
                                    
                                });
                                
                            }, 500);
                        });
                        
                    }, 500);
                });
            }, 500);
            
        }, 1500);
    }
    render() {
        return (
            <ImageBackground source={require('../../assets/images/background_splash.png')} style={{ flex: 1 }}>

                <View style={styles.logoimageview}>
                    <Image 
                    style={styles.logoimageStyle}
                    source={require('../../assets/images/logo.png')}
                    />
                <Text style={styles.subtitletextstyle}>Bringing Together Lovers of Fashion</Text>
                </View>
                <View style={styles.imageview}>
                    <Image
                        style={styles.imageStyle}
                        source={require('../../assets/images/helpmodel_homescreen.png')}
                    />
                </View>
                <View style={styles.progressbarView}>
                    <Progress.Bar
                        style={styles.progress}
                        progress={this.state.progress}
                        indeterminate={this.state.indeterminate}
                        color={['#06fbc7']}
                        width={500}
                    />
                    <View style={styles.progressbartitle}>
                        <View style={{ flex: 3 }}>
                            <Text>Loading......</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'flex-end' }}>
                            <Text style={styles.perTextStyle}>{(this.state.progress * 100).toFixed(0)}%</Text>
                        </View>
                    </View>
                </View>

            </ImageBackground>
        )
    }
}

export default SplashScreen;