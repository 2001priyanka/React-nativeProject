import React, {useState, useRef, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
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
import IconFa from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFa1 from 'react-native-vector-icons/Ionicons';
import {color} from '@rneui/base';
import {API_URL} from '../../../../Config';
import RangeSlider from 'react-native-range-slider';
import axios from 'axios';
// import IconFa from 'react-native-vector-icons/MaterialIcons';

const HomeScreens = () => {
  const navigation = useNavigation();
  const onNextPressed14 = () => {
    navigation.navigate('ProfilePage');
  };
  return (
    <SafeAreaView style={{height: vh(50)}}>
      <View style={styles.uppersection}>
        <View style={styles.uppersection}>
          <View>
            <IconFa
              name="arrow-left"
              style={{fontSize: vf(4), color: '#fe5e75'}}
            />
          </View>
          <View>
            <Text style={{fontSize: vf(2.5), paddingLeft: 10, color: 'black'}}>
              All Match(279)
            </Text>
          </View>
        </View>
        <View style={styles.uppersection}>
          <View
            style={{
              borderRadius: 50,
              backgroundColor: '#FFDBE9',
              height: vh(4),
              width: vw(9),
              borderRadius: 4,
              margin: 5,
            }}>
            <IconFa1
              name="md-search-outline"
              style={{
                fontSize: 20,
                alignSelf: 'center',
                justifyContent: 'center',
                color: '#fe5e75',
              }}
            />
          </View>
          <View
            style={{
              borderRadius: 50,
              backgroundColor: '#FFDBE9',
              height: vh(4),
              width: vw(9),
              borderRadius: 4,
              margin: 5,
            }}>
            <IconFa
              name="filter-variant"
              style={{
                fontSize: 25,
                alignSelf: 'center',
                justifyContent: 'center',
                color: '#fe5e75',
              }}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  uppersection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    height: vh(75),
  },

});
export default HomeScreens;
