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
// import RangeSlider from 'react-native-range-slider';
import axios from 'axios';
// import IconFa from 'react-native-vector-icons/MaterialIcons';

const AllMatch = () => {
  const navigation = useNavigation();
  const onNextPressed14 = () => {
    navigation.navigate('ProfilePage');
  };

  const [images, setImages] = useState([
    {
      name: 'Annete',
      name1: 'kiera',
      age: 22,
      profession: 'Dancer',
      profession1: 'Artist',
    },
    {
      name: 'Sarah',
      name1: 'Elena',
      age: 24,
      profession: 'photographer',
      profession1: 'Singer',
    },
    {
      name: 'Alice',
      name1: 'Rose',
      age: 22,
      profession: 'Model',
      profession1: 'Model',
    },
  ]);
  const _renderItem = ({item, index}) => {
    return (
      <View style={styles.uppersection}>
        <View>
          <View>
            <Image
              source={require('../../src/Assest/Images/modeljpg.jpg')}
              style={{
                width: vw(45),
                height: vh(30),
                margin: 10,
                borderRadius: 15,
                borderWidth: 2,
                borderColor: '#fe5e75',
              }}
            />
          </View>
          <View style={{backgroundColor: '#fe5e75'}}>
            <Text
              style={{
                position: 'absolute',
                bottom: 40,
                zIndex: 10,
                left: 35,
                color: '#fff',
                width: vw(30),
                fontSize: vf(2.5),
                // backgroundColor: '#fe5e75',
              }}>
              {item.name}
            </Text>
          </View>

          <View>
            <Text
              style={{
                position: 'absolute',
                bottom: 20,
                left: 35,
                width: vw(30),
                color: '#fff',
                fontSize: vf(2),
                //   backgroundColor: '#fe5e75',
              }}>
              {item.profession1}
            </Text>
          </View>
        </View>
        <View>
          <Image
            source={require('../../src/Assest/Images/model2.jpg')}
            style={{
              width: vw(45),
              height: vh(30),
              margin: 10,
              borderRadius: 15,
              borderWidth: 2,
              borderColor: '#fe5e75',
            }}
          />
          <Text
            style={{
              position: 'absolute',
              bottom: 40,
              left: 40,
              color: '#fff',
              fontSize: vf(2.5),
            }}>
            {item.name1}
          </Text>
          <Text
            style={{
              position: 'absolute',
              bottom: 20,
              left: 40,
              color: '#fff',
              fontSize: vf(2),
            }}>
            {item.profession}
          </Text>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.uppersection}>
          <View style={styles.uppersection}>
            <View>
              <IconFa
                name="arrow-left"
                style={{fontSize: vf(4), color: '#fe5e75'}}
              />
            </View>
            <View>
              <Text
                style={{fontSize: vf(2.5), paddingLeft: 10, color: 'black'}}>
                All Match(279)
              </Text>
            </View>
          </View>
          <View style={styles.uppersection}>
            <View
              style={{
                alignItems:'center',
                alignSelf:'center',
                borderRadius: 50,
                backgroundColor: '#FFDBE9',
                height: vh(4),
                width: vw(9),
                borderRadius: 4,
                // margin: 5,
              }}>
              <IconFa1
                name="md-search-outline"
                style={{
                  fontSize: 20,
                  marginVertical:5,
                  // alignSelf: 'center',
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
        <FlatList data={images} renderItem={_renderItem} />
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  uppersection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,

    // height: vh(75),
  },
});
export default AllMatch;
