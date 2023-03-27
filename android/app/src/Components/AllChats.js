import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  FlatList,
} from 'react-native';
import {
  responsiveHeight as vH,
  responsiveWidth as vW,
  responsiveFontSize as vF,
} from 'react-native-responsive-dimensions';
import {Button, ListItem} from 'react-native-elements';
import {useSelector, useDispatch} from 'react-redux';
import {Avatar, Accessory} from 'react-native-elements';
import IconAd from 'react-native-vector-icons/EvilIcons';
import IconEt from 'react-native-vector-icons/Entypo';
import IconFe from 'react-native-vector-icons/Feather';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import IconIo from 'react-native-vector-icons/Ionicons';
import {CheckBox} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

const AllChats = () => {
  const navigation = useNavigation();
  const chatdata = [
    {
      id: 1,
      name: 'john',
      msg: 'Hello how are you ? 😅',
      time: '10.45 AM',
    },
    {
      id: 1,
      name: 'Mark',
      msg: 'Hello how are you ? 😅',
      time: '10.45 AM',
    },
    {
      id: 1,
      name: 'Ethan',
      msg: 'Hello how are you ? 😅',
      time: '10.45 AM',
    },
    {
      id: 1,
      name: 'Mosh',
      msg: 'Hello how are you ? 😅',
      time: '10.45 AM',
    },
    {
      id: 1,
      name: 'James',
      msg: 'Hello how are you ? 😅',
      time: '10.45 AM',
    },
    {
      id: 1,
      name: 'Peter',
      msg: 'Hello how are you ? 😅',
      time: '10.45 AM',
    },
    {
      id: 1,
      name: 'Chris',
      msg: 'Hello how are you ? 😅',
      time: '10.45 AM',
    },
    {
      id: 1,
      name: 'Stewie',
      msg: 'Hello how are you ? 😅',
      time: '10.45 AM',
    },
  ];

  const _renderChats = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Chat');
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            // marginTop: 10,
            borderBottomColor: '#D9DDDE',
            backgroundColor: '#FFFFFF',
            borderBottomWidth: 1,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              //   backgroundColor: 'red',
              height: vH(9),
              borderBottomColor: '#D9DDDE',
              backgroundColor: '#FFFFFF',
              borderBottomWidth: 1,
              width: vW(95),
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={{
                  uri: 'https://staticg.sportskeeda.com/editor/2020/08/1a2c1-15977865196143-800.jpg',
                }}
                style={{height: vH(7), width: vW(15), borderRadius: 100}}
              />

              <View style={{marginLeft: 10}}>
                <Text style={{color: '#000000', fontWeight: '600'}}>
                  {item.name}
                </Text>
                <Text>{item.msg}</Text>
              </View>
            </View>
            <Text>{item.time}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView>
      <View style={{width: vW(100), marginTop: 10}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 10,
          }}>
          <Text style={{fontSize: vF(3), color: 'black', marginLeft: 10}}>
            Chats
          </Text>
          <View style={{alignItems: 'flex-end'}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                // flex: 10,
                width: vW(30),
              }}>
              <IconAd name="search" size={40} color={'black'} />
              <IconIo
                name="ios-chatbox-ellipses-outline"
                size={30}
                color={'black'}
              />
              <IconEt name="dots-three-vertical" size={28} color={'black'} />
            </View>
          </View>
        </View>

        {/* <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            //   backgroundColor: 'red',
            height: vH(9),
            borderBottomColor: '#D9DDDE',
            backgroundColor: '#FFFFFF',
            borderBottomWidth: 1,
            width: vW(95),
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={{
                uri: 'https://staticg.sportskeeda.com/editor/2020/08/1a2c1-15977865196143-800.jpg',
              }}
              style={{height: vH(7), width: vW(15), borderRadius: 100}}
            />

            <View style={{marginLeft: 10}}>
              <Text style={{color: '#000000', fontWeight: '600'}}>Unknown</Text>
              <Text>How have you been? 😅</Text>
            </View>
          </View>
          <Text>10.46 AM</Text>
        </View>
      </View> */}

        <FlatList data={chatdata} renderItem={_renderChats} />
      </View>
    </ScrollView>
  );
};

export default AllChats;
