import React, {useState, useRef, useEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import Swiper from 'react-native-deck-swiper';
// import RangeSlider from 'rn-range-slider';

import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  Image,
  View,
  FlatList,
  StatusBar,
  TouchableOpacity,
  Button,
} from 'react-native';
import {
  responsiveHeight as vh,
  responsiveWidth as vw,
  responsiveFontSize as vf,
} from 'react-native-responsive-dimensions';
import Modal from 'react-native-modal';
import IconFa from 'react-native-vector-icons/Entypo';
import IconFaa from 'react-native-vector-icons/FontAwesome';
import IconAd from 'react-native-vector-icons/AntDesign';
import {color} from '@rneui/base';
import {API_URL} from '../../../../Config';
import RangeSlider from 'react-native-range-slider';
import axios from 'axios';
import Footer from './Footer';

const MatchProfole = () => {
  return (
    <View
      style={{
        backgroundColor: '#545C63',
        flex: 1,
      }}>
      <View
        style={{
          backgroundColor: '#545C63',
          flex: 0.8,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontStyle: 'italic',

            fontSize: vf(5),
            color: 'white',
          }}>
          Its a Match !
        </Text>
        <Text
          style={{
            color: 'white',
            fontSize: vf(2),

            marginVertical: 20,
          }}>
          You And Allison have Liked Each Other
        </Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmVtYWxlJTIwbW9kZWx8ZW58MHx8MHx8&w=1000&q=80',
            }}
            style={{
              height: vh(20),
              width: vw(40),
              borderRadius: 200,
              marginRight: 20,
              borderColor: 'white',
              borderWidth: 2,
            }}
          />
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmVtYWxlJTIwbW9kZWx8ZW58MHx8MHx8&w=1000&q=80',
            }}
            style={{
              height: vh(20),
              width: vw(40),
              borderRadius: 200,
              borderColor: 'white',
              borderWidth: 2,
            }}
          />
        </View>

        <View style={{marginTop: 40}}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: 'white',
              width: vw(70),
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: 20,
              height: vw(10),
              borderRadius: 10,
            }}>
            <IconFa name="message" size={25} />
            <Text
              style={{
                marginLeft: 20,
                fontWeight: '600',
                fontSize: vf(2),
              }}>
              Send A Message
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: 'white',
              width: vw(70),
              justifyContent: 'center',
              alignItems: 'center',
              height: vw(10),
              borderRadius: 10,
            }}>
            <IconFaa name="user" size={25} />
            <Text style={{marginLeft: 20, fontWeight: '600', fontSize: vf(2)}}>
              Keep Swiping
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* <Footer/> */}
    </View>
  );
};

export default MatchProfole;
