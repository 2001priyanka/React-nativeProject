import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
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
import {useSelector} from 'react-redux';
import {
  responsiveHeight as vh,
  responsiveWidth as vw,
  responsiveFontSize as vf,
} from 'react-native-responsive-dimensions';
import IconFa from 'react-native-vector-icons/MaterialCommunityIcons';
import {SearchBar} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Icon, Input} from 'react-native-elements'; 
import { API_URL } from '../../../../Config';
import axios from 'axios';
// import IconFa from 'react-native-vector-icons/MaterialIcons';

const AccountSetUp1 = () => {
  //  const [name, setName] = useState('');
  //  const [number, setNumber] = useState('');
  //  const [email, setEmail] = useState('');
  //  const [gender, setGender] = useState('');
  //  const [location, setLocation] = useState('');
  //  const [msgs, setMsgs] = useState([]);
   const [text, onChangeText] = React.useState(null);
  const [userData, setUsersData] = useState({
    name: '',
    email: '',
    address1: '',
    mobile: '',
    gender: '',
    age: '',
    intrest: '',
    about: '',
  });
  const token = useSelector(reduxState => reduxState?.login?.user?.accessToken)
  console.log('token',token)
  const navigation = useNavigation();

  const onNextPressed12 = () => {
    navigation.navigate('PhotoScreen');
  };
 
  const getUsersData = async()=>{
    if(token){
      try {
        const res = await axios({
          url: API_URL + 'user/user/getProfile',
          method: 'GET',
          headers: {
            Authorization:`Bearer ${token}`
          },
        });
        if(res){
          console.log('Users data',res?.data?.users);
          setUsersData(res?.data?.user);
        }
      } catch (error) {
        console.log('profile data error',error);
      }
    }
  }

   const submitUserProfileData = async () => {
       try {
         const res = await axios({
           url: API_URL + 'admin/user',
           method: 'POST',
           data: {
             ...userData,
           },
           headers: {
             Authorization: `Bearer ${token}`,
           },
         });
         if (res) {
           console.log('update users res', res);
           navigation.navigate('homepage');
         }
       } catch (error) {
         console.log('submit user data', error);
       }
   };
  useEffect(()=>{
    getUsersData();
  },[token]);

  const _renderItem = ({item, index}) => {
    return (
      <View style={styles.uppersection1}>
        <View>
          <Image
            source={{
              uri: item.img,
            }}
            style={{
              height: vh(20),
              width: 70,
              borderRadius: 40,
            }}
          />
        </View>
        <View>
          <Text style={{fontSize: 15, marginTop:10}}>{item.msg}</Text>
        </View>
        <View>
          <Text style={{fontSize: 18, color: 'black', marginTop: 20}}>
            {item.name}
          </Text>
        </View>
        <View>
          {item.new && (
            <View
              style={{
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
                  color: '#fe5e75',
                  marginTop: 10,
                }}>
                <IconFa name="circle-outline" style={{fontSize: 20}} />
              </Text>
            </View>
          )}
          <Text style={{marginTop: 10, fontSize: 18}}>{item.time}</Text>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <View>
            <Text style={styles.upperSection}>
              <IconFa
                name="arrow-left"
                style={{fontSize: 25, color: '#fe5e75'}}
              />
              <Text style={{paddingLeft: 10, color: 'black'}}>
                Fill Your Profile
              </Text>
            </Text>
          </View>

          <View style={{alignSelf: 'center'}}>
            <View>
              <Image
                source={{
                  uri: 'https://i.pinimg.com/236x/47/5a/86/475a86177aeedacf8dc7f5e2b4eff61f.jpg',
                }}
                style={{
                  height: vh(15),
                  width: vw(30),
                  borderRadius: 100,
                  // marginTop: 20,
                  alignSelf: 'center',
                }}
              />
            </View>
            <View
              style={{
                backgroundColor: '#fe5e75',
                position: 'absolute',
                justifyContent: 'center',
                alignSelf: 'center',
                bottom: 0,
                right: 0,
                width: vw(6.5),
                height: vh(3.5),
                borderRadius: 10,
                color: 'white',
                paddingLeft: 3,
              }}>
              <IconFa
                name="square-edit-outline"
                style={{fontSize: vf(2.5), color: 'white'}}
              />
            </View>
          </View>
          <Text style={{textAlign: 'center', fontSize: 20, color: 'black'}}>
            Adam Smith
          </Text>
          <View style={styles.input}>
            <View>
              <View>
                <Text
                  style={{
                    alignSelf: 'flex-start',
                    marginLeft: 25,
                    flexDirection: 'row',
                    fontWeight: '500',
                    marginTop: 5,
                  }}>
                  Full Name:
                </Text>
              </View>

              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  margin: 12,
                  borderWidth: 0.5,
                  height: vh(5),
                  // padding: 10,
                  borderRadius: 20,
                }}>
                <View>
                  <TextInput
                    // style={{margi}}
                    placeholder="Full Name"
                    editable
                    maxLength={40}
                    onChangeText={e => {
                      setName({
                        ...userData,
                        name: e,
                      });
                    }}
                    value={userData?.name}
                  />
                </View>

                <IconFa style={{marginTop: 15, paddingLeft: 200}} />
              </View>
            </View>
            <View>
              <View>
                <Text
                  style={{
                    alignSelf: 'flex-start',
                    marginLeft: 25,
                    flexDirection: 'row',
                    fontWeight: '500',
                    marginTop: 5,
                  }}>
                  Email:
                </Text>
              </View>

              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  // justifyContent: 'space-around',
                  margin: 12,
                  borderWidth: 0.5,
                  height: vh(5),
                  // padding: 10,
                  borderRadius: 20,
                }}>
                <View>
                  <TextInput
                    // style={{margi}}
                    placeholder="Email"
                    editable
                    maxLength={40}
                    onChangeText={txt => {
                      setEmail(txt);
                    }}
                  />
                </View>
                <View>
                  {/* <IconFa
                    name="email"
                    style={{marginTop: 9, paddingLeft: 200, fontSize: vf(2.5)}}
                  /> */}
                </View>
              </View>
            </View>
            <View>
              <View>
                <Text
                  style={{
                    alignSelf: 'flex-start',
                    marginLeft: 25,
                    flexDirection: 'row',
                    fontWeight: '500',
                    marginTop: 5,
                  }}>
                  Phone Number:
                </Text>
              </View>

              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  margin: 12,
                  borderWidth: 0.5,
                  height: vh(5),
                  // padding: 10,
                  borderRadius: 20,
                }}>
                <View>
                  <TextInput
                    // style={{margi}}
                    placeholder="Phone Number"
                    editable
                    maxLength={40}
                    onChangeText={txt => {
                      setNumber(txt);
                    }}
                    // value={number?.number}
                  />
                </View>
                <View>
                  <IconFa
                    name="phone"
                    style={{marginTop: 9, paddingLeft: 150, fontSize: vf(2.5)}}
                  />
                </View>
              </View>
            </View>
            <View>
              <View>
                <Text
                  style={{
                    alignSelf: 'flex-start',
                    marginLeft: 25,
                    flexDirection: 'row',
                    fontWeight: '500',
                    marginTop: 5,
                  }}>
                  Gender:
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  margin: 12,
                  borderWidth: 0.5,
                  height: vh(5),
                  // padding: 10,
                  borderRadius: 20,
                }}>
                <View>
                  <TextInput
                    // style={{margi}}
                    placeholder="Gender"
                    editable
                    maxLength={40}
                    onChangeText={txt => {
                      setGender(txt);
                    }}
                  />
                </View>
                <View>
                  <IconFa
                    name="chevron-down"
                    style={{marginTop: 9, paddingLeft: 200, fontSize: vf(3)}}
                  />
                </View>
              </View>
            </View>
            <View>
              <View>
                <Text
                  style={{
                    alignSelf: 'flex-start',
                    marginLeft: 25,
                    flexDirection: 'row',
                    fontWeight: '500',
                    marginTop: 5,
                  }}>
                  Location:
                </Text>
              </View>

              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  margin: 12,
                  borderWidth: 0.5,
                  height: vh(5),
                  // padding: 10,
                  borderRadius: 20,
                }}>
                <View>
                  <TextInput
                    // style={{margi}}
                    placeholder="Location"
                    editable
                    maxLength={40}
                    onChangeText={txt => {
                      setLocation(txt);
                    }}
                  />
                </View>
                <View>
                  <IconFa
                    name="map-marker"
                    style={{marginTop: 9, paddingLeft: 200, fontSize: vf(2.5)}}
                  />
                </View>
              </View>
            </View>
          </View>

          {/* <FlatList data={msgs} renderItem={_renderItem} /> */}
          <View
            style={{
              backgroundColor: '#fe5e75',
              height: 50,
              // width:vw(90),
              margin: 10,
              borderRadius: 30,
            }}>
            <Text
              style={{
                textAlign: 'center',
                marginTop: 10,
                color: 'white',
                fontSize: 20,
              }}
              onPress={onNextPressed12}>
              Next
            </Text>
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
  },
  uppersection1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    padding: 5,
    borderWidth: 1,
    borderColor: '#B3B0B0',

    borderRadius: 10,
    margin: 15,
  },
  uppersection3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
  upperSection: {
    margin: 20,
    fontSize: 25,
    paddingLeft: 10,
  },
  input: {
    display: 'flex',
    // heigh/t:vh(90),
    margin: 8,
    padding: 10,
  },
  input2: {
    // height: 40,
   
  },
});
export default AccountSetUp1;
