import React, {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
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

const AccountSetUp = () => {
  const navigation = useNavigation();
  const onNextPressed11 = () => {
    navigation.navigate('AccountSetUp1');
  };

  const route = useRoute();
  const userID = route?.params?._id;

  console.log(route);

  const [msgs, setMsgs] = useState([
    {
      id: 1,
      img: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/india-flag-design-template-186e8b084e00b5e1f777ddf3f534b763_screen.jpg?ts=1625072969',
      name: 'Afghanisthan',
      msg: 'AF',
      new: 1,
    },
    {
      id: 2,
      img: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/india-flag-design-template-186e8b084e00b5e1f777ddf3f534b763_screen.jpg?ts=1625072969',
      name: 'America',
      msg: 'IN',
      new: 1,
    },
    {
      id: 3,
      img: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/india-flag-design-template-186e8b084e00b5e1f777ddf3f534b763_screen.jpg?ts=1625072969',
      name: 'India',
      msg: 'IN',
      new: 1,
    },
    {
      id: 4,
      img: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/india-flag-design-template-186e8b084e00b5e1f777ddf3f534b763_screen.jpg?ts=1625072969',
      name: 'Japan',
      msg: 'JA',
      new: 1,
    },
    {
      id: 5,
      img: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/india-flag-design-template-186e8b084e00b5e1f777ddf3f534b763_screen.jpg?ts=1625072969',
      name: 'China',
      msg: 'CH',
      new: 1,
    },
  ]);
  const [text, onChangeText] = React.useState(null);

  const [countryName, setCountryName] = useState('');

  const _renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        style={styles.uppersection1}
        onPress={q => {
          console.log('okaa', [item.id]);
          console.log('okaa', [item.name]);

          setCountryName(item.name);
        }}>
        
          <View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <Image
                source={{
                  uri: item.img,
                }}
                style={{
                  height:vh(7),
                  width:vw(10),
                  borderRadius: 40,
                }}
              />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                }}>
                <Text style={{fontSize: 15, width: vw(15)}}>{item.msg}</Text>
                <Text style={{fontSize:vf(2), color: 'black', width: vw(30)}}>
                  {item.name}
                </Text>
              </View>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <IconFa
                  name={
                    countryName === item.name
                      ? 'checkbox-marked-circle-outline'
                      : 'circle-outline'
                  }
                  style={{fontSize: 20, color: '#fe5e75'}}
                />
              </View>
            </View>
          </View>
        
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <View style={styles.upperSection}>
            <IconFa
              name="arrow-left"
              style={{fontSize: 25, color: '#fe5e75'}}
            />
            <Text style={{color: 'black',paddingLeft:20,fontSize:vf(2.3)}}>Select Your Country</Text>
          </View>
          <View style={styles.uppersection}>
            <View style={styles.uppersection}></View>
          </View>
          <View
            style={{
              alignSelf: 'center',
            }}>
            <SearchBar
              placeholder="Search"
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
          <FlatList data={msgs} renderItem={_renderItem} />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('AccountSetUp1', {
                countryName,
                _id: userID,
              });
            }}
            style={{
              flexDirection:'row',
              justifyContent:'center',
              alignItems:'center',
              alignSelf:'center',
              backgroundColor: '#fe5e75',
              height:vh(7),
              width:vw(80),
              borderRadius: 30,
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 20,
                fontWeight:'600'
              }}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  uppersection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  uppersection1: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
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
  upperSection: {
    flexDirection: 'row',
    margin: 20,
    fontSize: 25,
    // paddingLeft:30,
  },
});
export default AccountSetUp;
