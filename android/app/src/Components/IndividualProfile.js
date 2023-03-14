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

const IndividualProfile = () => {
  const route = useRoute();

  console.log('routee', route);

  const name = route?.params?.details?.name;
  const age = route?.params?.details?.age;
  const pic = route?.params?.details?.img;

  const navigation = useNavigation();

  return (
    <View>
      <View>
        <View className="image">
          <Image
            source={{
              //   uri: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmVtYWxlJTIwbW9kZWx8ZW58MHx8MHx8&w=1000&q=80',
              uri: pic,
            }}
            style={{height: vh(50), width: vw(100)}}
          />
        </View>

        <View className="description">
          <View style={{flexDirection: 'row', marginLeft: 20, marginTop: 20}}>
            <Text style={{fontSize: vf(3), color: 'black', fontWeight: '600'}}>
              {name},
            </Text>
            <Text style={{fontSize: vf(3)}}>{age}</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 15,
            }}>
            <IconFa name="location-pin" size={30} />

            <Text>15 km away</Text>
          </View>

          <View style={{paddingHorizontal: 10, marginTop: 20}}>
            <Text>
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Text>
          </View>
        </View>

        <View
          className="footericon"
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 30,
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('HomeScreens');
            }}
            style={{
              height: vh(8),
              width: vw(17),
              backgroundColor: '#F77070',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 200,
            }}>
            <IconFaa name="close" size={45} color={'white'} />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              height: vh(8),
              width: vw(17),
              backgroundColor: '#B2F29E',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 200,
            }}>
            <IconAd name="staro" size={30} color={'white'} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: vh(8),
              width: vw(17),
              backgroundColor: '#83BFEF',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 200,
            }}>
            <IconAd name="heart" size={30} color={'white'} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default IndividualProfile;
