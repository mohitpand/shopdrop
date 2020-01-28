import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Dimensions, ScrollView, ImageBackground,Image } from 'react-native';
import { styles ,colors } from './styles';
import { HalfButton } from "../../components/HalfButton";
import { FullButton } from "../../components/FullButton";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { heightPercentageToDP } from '../../common/ResponsiveLayout';

const Data =[
    {
        "image" :`${require('../../assets/images/intro_model.png')}`,
        "title" : "Be a Model",
        "detail": "Try on cloth, atke a selfie and be helped by other fashiion lovers."
    },
    {
        "image" :`${require('../../assets/images/intro_2.png')}`,
        "title" : "Help Models",
        "detail": "Recommends clothes to models by swiping right and left."
    },
    {
        "image" :`${require('../../assets/images/intro_3.png')}`,
        "title" : "ShopDrop points",
        "detail": "Earn ShopDrop points by sharings selfies and helping models decide. All points help towards offers and discounts."
    }
]
export class IntroScreen extends Component {

    static navigationOptions = {
        header: null
    };
    constructor(props) {
        super(props);
        this.state = {
           imageList:Data,
           slider1ActiveSlide:0,
           nextImage:0
        };
    }
    _renderItem = ({item, index}) => {
        return (
            <View style={{height:heightPercentageToDP('35%'),backgroundColor:'white'}}>
                <Image 
                    style={{resizeMode:'contain',width:'100%',height:'100%'}}
                    source={item.image}
                />
                <Text style={styles.titleDark}>{ item.title }</Text>
                <Text style={styles.subtitle}>{item.detail}</Text>
            </View>
        );
    }

    _onSkipButton=()=>{
        //alert('Skip')
        this.props.navigation.navigate('LoginScreen')
        //this.props.navigation.goBack()
    }

    _onNextButton=()=>{
        this._carouselref._snapToItem(this.state.slider1ActiveSlide + 1)
    }
    
    render(){
        return(
            <ImageBackground source={require('../../assets/images/whitebackground.jpg')} style={{ flex: 1 }}>
                <View style={{ flex: 1, marginTop: heightPercentageToDP('28%') }}>
                    <Carousel
                        ref={(c) => { this._carouselref = c; }}
                        data={this.state.imageList}
                        renderItem={this._renderItem}
                        sliderWidth={width}
                        itemWidth={width}
                        itemHeight={'95%'}
                        onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index })}
                    />
                </View>
                
                <Pagination
                    dotsLength={Data.length}
                    activeDotIndex={this.state.slider1ActiveSlide}
                    containerStyle={styles.paginationContainer}
                    dotColor={colors.activeDot}
                    dotStyle={styles.paginationDot}
                    inactiveDotColor={colors.incativeDot}
                    inactiveDotOpacity={0.4}
                    inactiveDotScale={0.6}
                    carouselRef={this._carouselref}
                    tappableDots={!!this._carouselref}
                />
                <View style={{flexDirection:'row' ,paddingVertical:10}}>
                    <View style={{flex:2}}>
                        <HalfButton
                            buttonStyle={styles.nextbutton}
                            buttonText={'Skip'}
                            onSelecteGender={()=>{this._onSkipButton()}}
                        />
                    </View>
                    
                    {
                        this.state.slider1ActiveSlide !== 2 ?
                        <View style={{ flex: 1 }}>
                            <HalfButton
                                buttonStyle={{ padding: 10, width: '65%' }}
                                buttonText={'Next'}
                                onSelecteGender={() => { this._onNextButton() }}
                            />
                        </View>:this.props.navigation.navigate('LoginScreen')
                        
                    }
                    
                </View>
                
            </ImageBackground>
        )
    }
}

export default IntroScreen;