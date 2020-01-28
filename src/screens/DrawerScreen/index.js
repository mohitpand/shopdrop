import React, { Component } from 'react';
import { Animated, ActivityIndicator, TextInput, View, TouchableOpacity, Text, StyleSheet, Dimensions, ScrollView, Image, ImageBackground } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { styles } from './styles';
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const menuItem_list =[
    {"name":"Home","image":`${require('../../assets/images/menu_home.png')}`,"route":"HomeScreen"},
    {"name":"Notification","image":`${require('../../assets/images/menu_bell.png')}`,"route":"Notification"},
    {"name":"Protfolio","image":`${require('../../assets/images/menu_portfolio.png')}`,"route":"ProtfolioScreen"},
    {"name":"Groups","image":`${require('../../assets/images/menu_group.png')}`,"route":"Groups"},
    {"name":"ShopDrop Points","image":`${require('../../assets/images/menu_points.png')}`,"route":"ShopDropScreen"},
    {"name":"Contact Us","image":`${require('../../assets/images/menu_contactus.png')}`,"route":"ContactUs"},
    {"name":"FAQ","image":`${require('../../assets/images/menu_faq.png')}`,"route":"FAQScreen"}
];
export class DrawerScreen extends Component {

    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            user_name: 'Mahammad Momin',
            email:'mahammadmomin123@gmail.com',

            
        };
    }

    async componentDidMount() {

    }
    _onNavigateScreen=(value)=>{
        if(value === 'HomeScreen'){
            this.props.navigation.closeDrawer()
        }else{
            this.props.navigation.navigate(value)
        }
        
    }

    render() {
        return (
            <ImageBackground source={require('../../assets/images/backgroundImage.png')} style={{ flex: 1 }}>
                <View style={styles.logoimageview}>
                    <Image 
                    style={styles.logoimageStyle}
                    source={require('../../assets/images/logo.png')}
                    />
                </View>
                <ScrollView>
                   <TouchableOpacity style={styles.mainImageContainer} onPress={()=>this.props.navigation.navigate('ViewProfilesScreen')}>
                        <View style={styles.imageViewContainer}>
                            <Image 
                                style={styles.imageContainer}
                                source={require('../../assets/images/iconuser.jpeg')}
                            />
                        </View>
                        <View style={styles.nameViewContainer}>
                            <Text style={styles.TextNameStyle}>{this.state.user_name}</Text>
                            <Text style={styles.TextEmailStyle}>{this.state.email}</Text>
                        </View>
                   </TouchableOpacity>
                    <View style={{flex:1}}>
                       {
                           menuItem_list.map((item,index)=>{
                                return(
                                    <TouchableOpacity style={styles.logoutButtonStyle} onPress={()=>{this._onNavigateScreen(item.route)}}>
                                    <View style={styles.logoutImageViewStyle}>
                                        <Image
                                             style={styles.logoutImageStyle}
                                            source={item.image}
                                        />
                                    </View>
                                    <View style={{flex:3}}>
                                        <Text style={[styles.TextNameStyle,{textAlign:'left'}]}>{item.name}</Text>
                                    </View>
                                </TouchableOpacity>
                                )
                           })
                       }
                    </View>
                </ScrollView>
                <View style={styles.bottomView}>
                    <TouchableOpacity style={styles.logoutButtonStyle} onPress={()=>this.props.navigation.navigate('LoginScreen')}>
                        <View style={styles.logoutImageViewStyle}>
                            <Image 
                                style={styles.logoutImageStyle}
                                source={require('../../assets/images/menu_logout.png')}
                            />
                        </View>
                        <View style={{flex:2}}>
                            <Text style={styles.TextNameStyle}>Logout</Text>
                        </View>
                        <View style={styles.logoutImageViewStyle}>
                            <Image
                                style={styles.logoutImageStyle}
                                source={require('../../assets/images/menu_logout_arrow.png')}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        );
    }
}

export default DrawerScreen