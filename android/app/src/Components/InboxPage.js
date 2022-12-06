import React, { useState } from 'react';

import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  Image,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {
  responsiveHeight as vh,
  responsiveWidth as vw,
  responsiveFontSize as vf,
} from 'react-native-responsive-dimensions';
import IconFa from 'react-native-vector-icons/MaterialCommunityIcons';
import {SearchBar} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';
// import IconFa from 'react-native-vector-icons/MaterialIcons';

const InboxPage = () => {
  const [msgs, setMsgs] = useState([
    {
      img: 'https://6.vikiplatform.com/image/f39b70cc709449058542b107d493cff7.jpg?x=b&a=0x0&s=460x268&e=t&f=t&cb=1',
      name: 'abc',
      msg: 'haha Oh man',
      time: '14.02',
      new: 3,
    },
    {
      img: 'https://6.vikiplatform.com/image/f39b70cc709449058542b107d493cff7.jpg?x=b&a=0x0&s=460x268&e=t&f=t&cb=1',
      name: 'xyz',
      msg: 'haha that terrifying ',
      time: '15.00',
      new: 1,
    },
    {
      img: 'https://6.vikiplatform.com/image/f39b70cc709449058542b107d493cff7.jpg?x=b&a=0x0&s=460x268&e=t&f=t&cb=1',
      name: '123',
      msg: 'just idea for next time',
      time: '12.00',
      new: 2,
    },
    {
      img: 'https://6.vikiplatform.com/image/f39b70cc709449058542b107d493cff7.jpg?x=b&a=0x0&s=460x268&e=t&f=t&cb=1',
      name: '123',
      msg: 'Lorem ispum Lorem ',
      time: '12.00',
      new: 2,
    },
    {
      img: 'https://6.vikiplatform.com/image/f39b70cc709449058542b107d493cff7.jpg?x=b&a=0x0&s=460x268&e=t&f=t&cb=1',
      name: '123',
      msg: 'Lorem ispumLorem ispum',
      time: '12.00',
      new: 3,
    },
  ]);
  const [text, onChangeText] = React.useState(null);
  const _renderItem = ({item,index}) => {
    return (
      <View style={styles.uppersection1}>
        <View>
          <Image
            source={{
              uri: item.img,
            }}
            style={{
              height: 70,
              width: 70,
              borderRadius: 40,
            }}
          />
        </View>
        <View>
          <Text style={{fontSize: 18, color: 'black', marginTop: 20}}>
            {item.name}
          </Text>
          <Text style={{fontSize: 15}}>{item.msg}</Text>
        </View>
        <View>
          {item.new && 
            <View
              style={{
                backgroundColor: '#D56AAC',
                borderWidth: 1.5,
                borderColor: '#D56AAC',
                height: 30,
                width: 30,
                borderRadius: 40,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  alignSelf: 'center',

                  color: 'white',
                }}>
                {item.new}
              </Text>
            </View>
          }
          <Text style={{marginTop: 10, fontSize: 18}}>{item.time}</Text>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <View style={styles.uppersection}>
            <View style={styles.uppersection}>
              <View>
                <IconFa
                  name="heart-multiple"
                  style={{fontSize: 30, color: '#D56AAC'}}
                />
              </View>
              <View>
                <Text style={{fontSize: 20, paddingLeft: 10, color: 'black'}}>
                  Profile
                </Text>
              </View>
            </View>
            <View style={styles.uppersection}>
              <View
                style={{
                  // backgroundColor: '#FFDBE9',
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  paddingLeft: 10,
                }}>
                <IconFa
                  name="playlist-edit"
                  style={{
                    fontSize: 30,
                    color: '#D56AAC',
                  }}
                />
              </View>
              <View
                style={{
                  // backgroundColor: '#FFDBE9',
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                }}>
                <IconFa
                  name="dots-vertical"
                  style={{
                    fontSize: 25,
                    // paddingLeft: 10,
                    color: '#D56AAC',
                    paddingLeft: 25,
                  }}
                />
              </View>
            </View>
          </View>
          <View
            style={{
              alignSelf: 'center',
            }}>
            <SearchBar
              placeholder="Search "
              // onChangeText={updateSearch}
              // value={search}
              // onPressIn={onNextPressed3}
              lightTheme
              platform="ios"
              containerStyle={{
                borderRadius: 50,
                width: 350,
                height: 50,
                backgroundColor: '#dcdce1',
              }}
            />
          </View>
          <FlatList data={msgs} renderItem={_renderItem}/>
          <View style={styles.uppersection3}>
            <View>
              <IconFa name="home" style={{fontSize: 25, color: '#D56AAC'}} />
            </View>
            <View>
              <IconFa name="map" style={{fontSize: 25, color: '#D56AAC'}} />
            </View>
            <View>
              <IconFa name="heart" style={{fontSize: 25, color: '#D56AAC'}} />
            </View>
            <View
              style={{
                backgroundColor: '#D56AAC',
                justifyContent: 'center',
                borderRadius: 20,
                height: 35,
                width: 35,
              }}>
              <IconFa
                name="message-bulleted"
                style={{fontSize: 25, color: 'white', marginLeft: 5}}
              />
            </View>
            <View>
              <IconFa name="account" style={{fontSize: 25, color: '#D56AAC'}} />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  uppersection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  uppersection1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    padding: 5,
    borderWidth: 0.25,
    borderRadius: 10,
    margin: 15,
  },
  uppersection3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
});
export default InboxPage;
