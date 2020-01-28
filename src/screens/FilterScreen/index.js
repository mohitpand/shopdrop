import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Dimensions, ScrollView, ImageBackground, Image } from 'react-native';
import { styles } from './styles';

import { TextBox } from "../../components/TextBox";
import { HalfButton } from "../../components/HalfButton";
import { ImageButton } from "../../components/ImageButton";
import { FullButton } from "../../components/FullButton";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const AgeGroup = [
    { "Age": "Teen", "value": "teen" },
    { "Age": "18-25", "value": "18to25" },
    { "Age": "26-35", "value": "26to35" },
    { "Age": "36-40", "value": "36to40" },
    { "Age": "41+", "value": "41+" },

];

const Genderlist = [
    { "gender": "Male", "value": 'M' },
    { "gender": "Female", "value": 'F' },
];

const Stylelist = [
    { "style_type": "Casual", "value": "casual" },
    { "style_type": "Party", "value": "party" },
    { "style_type": "Work", "value": "work" },
    { "style_type": "Holiday", "value": "holiday" },
    { "style_type": "Alternative", "value": "alternative" },
    { "style_type": "Workout", "value": "workout" },
];

const ladies_shape = [
    { "lady_shape": "Rectangle", "value": "rectangle","image":`${require('../../assets/images/rectangle_lady.png')}` },
    { "lady_shape": "Triangle", "value": "triangle","image":`${require('../../assets/images/triangle_lady.png')}` },
    { "lady_shape": "Spoon", "value": "spoon","image":`${require('../../assets/images/spoon_lady.png')}` },
    { "lady_shape": "Hourglass", "value": "hourglass","image":`${require('../../assets/images/hourglass_lady.png')}` },
    { "lady_shape": "Top Hurglass", "value": "tophourglass","image":`${require('../../assets/images/top_hourglass_lady.png')}` },
    { "lady_shape": "Bottom Hourglass", "value": "bottomhourglass","image":`${require('../../assets/images/bottom_hourglass_lady.png')}` },
    { "lady_shape": "Inverted Triangle", "value": "invertedtriangle","image":`${require('../../assets/images/inverted_triangle_lady.png')}` },
    { "lady_shape": "Round", "value": "round","image":`${require('../../assets/images/round_lady.png')}` },
    { "lady_shape": "Diamond", "value": "diamond","image":`${require('../../assets/images/diamond_lady.png')}` },
    { "lady_shape": "Athletic", "value": "athletic","image":`${require('../../assets/images/athletic_lady.png')}` },

];

const man_shap =[
    {"man_shap":"Trapezoid", "value":"trapezoid", "image":`${require('../../assets/images/trapezoid_man.png')}`},
    {"man_shap":"Triangle", "value":"triangle", "image":`${require('../../assets/images/triangle_man.png')}`},
    {"man_shap":"Inverted Triangle", "value":"invertedtriangle", "image":`${require('../../assets/images/inverted_triangle_man.png')}`},
    {"man_shap":"Rectangle", "value":"rectangle_m", "image":`${require('../../assets/images/rectangle_man.png')}`},
    {"man_shap":"Oval", "value":"oval", "image":`${require('../../assets/images/oval_man.png')}`},
];

const ethnicity_list=[
    {"name":"American Indian or Alaska Native","value":"ai_an"},
    {"name":"Asian Indian/Asian","value":"ai_asian"},
    {"name":"Black or African American","value":"b_african_american"},
    {"name":"Hispanic or Latino or Spanish Origin","value":"holiday"},
    {"name":"Native Hawaiian or Other Pacific Islander","value":"n_hawaiian"},
    {"name":"White","value":"white"},
    {"name":"Other","value":"other"}
];

const hairColor_list =[
    {"haircolor_name":"Brown","value":"brown"},
    {"haircolor_name":"Blond","value":"blond"},
    {"haircolor_name":"Black","value":"black"},
    {"haircolor_name":"Auburn","value":"auburn"},
    {"haircolor_name":"Red","value":"red"},
    {"haircolor_name":"Grey","value":"grey"},
    {"haircolor_name":"White","value":"white_hair"},
    {"haircolor_name":"Other","value":"other_hair"}
];
export class FilterScreen extends Component {


    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            fullNameText: '',
            gender: 'M',
            style_selected: 'casual',
            bodyshape_seleted: 'rectangle',
            bodyshape_m_seleted: 'trapezoid',
            ethnicity_selected: 'ai_an',
            haircolor_selected: 'brown',
            age_grp_selected: 'teen',
            feet: '',
            inches: '',
            cm: '',
        };
    }
    componentDidMount() {
        this.setState({
            bodyshape_seleted: this.state.gender === 'M' ? 'trapezoid' : 'rectangle'
        })
    }
    onSelectedGender = (gendervalue) => {
        this.setState({
            gender: gendervalue
        })
    }
    onSelectedStyle = (stylevalue) => {
        this.setState({
            style_selected: stylevalue
        })
    }
    onSelecteBodyShape = (shapevalue) => {
        this.setState({
            bodyshape_seleted: shapevalue
        })
    }
    onSelecteEthniCity = (value) => {
        this.setState({
            ethnicity_selected: value
        })
    }

    onSelectedHairColor = (value) => {
        this.setState({
            haircolor_selected: value
        })
    }

    onSelecteBodyMaleShape = (value) => {
        this.setState({
            bodyshape_m_seleted: value
        })
    }
    onSelecteAgeGroup = (value) => {
        this.setState({
            age_grp_selected: value
        })
    }
    render() {
        return (
            <ImageBackground source={require('../../assets/images/backgroundImage.png')} style={{ flex: 1 }}>
                <View style={styles.header}>
                    <TouchableOpacity style={{ flex: 1 }}>
                        <MaterialCommunityIcons name="close" size={22} color="#000" />
                    </TouchableOpacity>
                    <Text style={styles.HeaderTitle}>Filter</Text>
                </View>
                <ScrollView style={styles.mainContainer}>
                    <Text style={styles.fullnametextstyle}>GENDER</Text>
                    <View style={styles.genderViewStyle}>

                        {
                            Genderlist.map((item, index) => {
                                return (
                                    <HalfButton
                                        buttonText={item.gender}
                                        buttonStyle={[{ backgroundColor: this.state.gender === item.value ? '#06fbc7' : '#fff' }, styles.style_button]}
                                        onSelecteGender={() => { this.onSelectedGender(item.value) }}
                                    />
                                )
                            })
                        }
                    </View>
                    <Text style={styles.fullnametextstyle}>AGE GROUP</Text>
                    <View style={[styles.genderViewStyle, { flexWrap: 'wrap', }]}>
                        {
                            AgeGroup.map((item, index) => {
                                return (
                                    <HalfButton
                                        buttonText={item.Age}
                                        buttonStyle={[{ backgroundColor: this.state.age_grp_selected === item.value ? '#06fbc7' : '#fff' }, styles.style_agebutton]}
                                        onSelecteGender={() => { this.onSelecteAgeGroup(item.value) }}
                                    />
                                )
                            })

                        }

                    </View>

                    <Text style={styles.fullnametextstyle}>STYLE</Text>
                    <View style={[styles.genderViewStyle, { flexWrap: 'wrap', }]}>
                        {
                            Stylelist.map((item, index) => {
                                return (
                                    <HalfButton
                                        buttonText={item.style_type}
                                        buttonStyle={[{ backgroundColor: this.state.style_selected === item.value ? '#06fbc7' : '#fff' }, styles.style_button]}
                                        onSelecteGender={() => { this.onSelectedStyle(item.value) }}
                                    />
                                )
                            })
                        }
                    </View>

                    <Text style={styles.fullnametextstyle}>BODY SHAPE</Text>
                    {
                        this.state.gender === 'F' ?
                            <View style={[styles.genderViewStyle, { flexWrap: 'wrap' }]}>
                                {
                                    ladies_shape.map((item, index) => {
                                        return (
                                            <ImageButton
                                                buttonText={item.lady_shape}
                                                buttonStyle={[{ borderColor: this.state.bodyshape_seleted === item.value ? '#06fbc7' : '#fff', borderWidth: this.state.bodyshape_seleted === item.value ? 2 : 0 }, styles.style_button_bodyshape]}
                                                onSelecteBodyShape={() => { this.onSelecteBodyShape(item.value) }}
                                                source={item.image}
                                            />
                                        )
                                    })
                                }
                            </View> :
                            <View style={[styles.genderViewStyle, { flexWrap: 'wrap' }]}>
                                {
                                    man_shap.map((item,index)=>{
                                        return(
                                            <ImageButton
                                            buttonText={item.man_shap}
                                            buttonStyle={[{ borderColor: this.state.bodyshape_m_seleted === item.value ? '#06fbc7' : '#fff', borderWidth: this.state.bodyshape_m_seleted === item.value ? 2 : 0 }, styles.style_button_bodyshape]}
                                            onSelecteBodyShape={() => { this.onSelecteBodyMaleShape(item.value) }}
                                            source={item.image}
                                            
                                        /> 
                                        )
                                    })
                                }
                        </View>
                    }

                <Text style={styles.fullnametextstyle}>ETHNICITY</Text>
                <View style={[styles.genderViewStyle, { flexWrap: 'wrap', }]}>
                    {
                        ethnicity_list.map((item,index)=>{
                            return (
                                <HalfButton
                                    buttonText={item.name}
                                    buttonStyle={[{ backgroundColor: this.state.ethnicity_selected === item.value ? '#06fbc7' : '#fff' }, styles.style_ethincity]}
                                    onSelecteGender={() => { this.onSelecteEthniCity(item.value) }}
                                    buttonTextStyle={styles.buttonTextStyle}
                                />
                            )
                        })
                    }   
                    </View>
                    <Text style={styles.fullnametextstyle}>HAIR COLOR</Text>
                    <View style={[styles.genderViewStyle, { flexWrap: 'wrap', }]}>
                        {
                            hairColor_list.map((item,index)=>{
                                return(
                                    <HalfButton
                                    buttonText={item.haircolor_name}
                                    buttonStyle={[{ backgroundColor: this.state.haircolor_selected === item.value ? '#06fbc7' : '#fff' }, styles.style_button]}
                                    onSelecteGender={() => { this.onSelectedHairColor(item.value) }}
                                /> 
                                )
                            })
                        }
                    </View>
                    <Text style={styles.fullnametextstyle}>HEIGHT</Text>
                    <View style={[styles.genderViewStyle, { flexWrap: 'wrap',alignItems:'center',justifyContent:'space-around'}]}>
                        <TextBox
                            placeholder={'Feet'}
                            textInputStyle={styles.heightStyle}
                            onChangeText={(value)=>{this.setState({
                                feet:value
                            })}}
                        />
                        <Text > + </Text>
                        <TextBox
                            placeholder={'Inches'}
                            textInputStyle={styles.heightStyle}
                            onChangeText={(value)=>{this.setState({
                                inches:value
                            })}}
                        />
                        <Text> Or </Text>
                        <TextBox
                            placeholder={'Cm'}
                            textInputStyle={styles.heightStyle}
                            onChangeText={(value)=>{this.setState({
                                cm:value
                            })}}
                        />
                    </View>
                    <FullButton
                        buttonStyle={{ marginBottom: 15 }}
                        buttonText={'Apply'}
                    />
                </ScrollView>
            </ImageBackground>
        )
    }

}

export default FilterScreen;