import React, {useState, useEffect} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {
  responsiveHeight as vh,
  responsiveWidth as vw,
  responsiveFontSize as vf,
} from 'react-native-responsive-dimensions';

import IconFa from 'react-native-vector-icons/MaterialCommunityIcons';
// import IconFa from 'react-native-vector-icons/MaterialIcons';
import {useSelector} from 'react-redux';
import {useNavigation, useRoute} from '@react-navigation/native';
import {API_URL} from '../../../../Config';
import axios from 'axios';
import {Alert} from 'react-native';

const EditBiodata = () => {
  const navigation = useNavigation();
  const [selectedValue, setSelectedValue] = useState('');
  const [userData, setUsersData] = useState({
    name: '',
    address1: '',
    gender: '',
    age: '',
    about: '',
  });
  const token = useSelector(reduxState => reduxState?.login?.user?.accessToken);
  console.log('token', token);

  const user = useSelector(reduxState => reduxState?.login?.user?.user?._id);

  const getuserData = async () => {
    if (user) {
      try {
        const res = await axios({
          url: API_URL + `admin/user/${user}`,
          method: 'GET',
        });
        if (res) {
          console.log('getuserData res', res);
          setUsersData(res?.data?.results);
        }
      } catch (error) {
        console.log('getuserData error', error);
      }
    }
  };

  useEffect(() => {
    getuserData();
  }, []);

  const updateUserData = async () => {
    if (user) {
      try {
        const res = await axios({
          url: API_URL + `admin/user/${user}`,
          method: 'PUT',
          data: {
            // ...userData,
            name: userData?.name,
            about: userData?.about,
            address1: userData?.address1,
            gender: userData?.gender,
            age: userData?.age,
          },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (res) {
          console.log('updateUserData res', res);
          navigation.navigate('ProfilePage');
        }
      } catch (error) {
        console.log('updateUserData error', error);
      }
    } else {
      Alert.alert('Required Fields Missing!');
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{padding: 20}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ProfilePage');
              }}>
              <IconFa
                name="arrow-left"
                style={{fontSize: 25, color: '#fe5e75'}}
              />
            </TouchableOpacity>
            <View style={styles.uppersection}>
              <Text style={{color: 'black', fontSize: vf(2.5)}}>
                Edit Biodata
              </Text>
            </View>
          </View>

          <View>
            <Text style={{color: 'black', fontSize: 15,marginTop:40}}>Full Name:</Text>

            <TextInput
              style={styles.input2}
              placeholder="Full Name"
              editable
              maxLength={40}
              onChangeText={e => {
                console.log(e);
                setUsersData({
                  ...userData,
                  name: e,
                });
              }}
              value={userData?.name}
            />
          </View>

          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                // borderWidth: 1,
                marginTop: 20,
              }}>
              {/* <View>
                <Text style={{color: 'black', fontSize: 15}}>Gender:</Text>

                <TextInput
                  style={styles.input1}
                  placeholder="Gender"
                  editable
                  maxLength={40}
                  onChangeText={e => {
                    console.log(e);
                    setUsersData({
                      ...userData,
                      gender: e,
                    });
                  }}
                  value={userData?.gender}
                />
              </View> */}
              <View>
                <Text style={{color: 'black', fontSize: vf(2)}}>Gender:</Text>
                <Picker
                  // ref={pickerRef}
                  selectedValue={selectedValue}
                  placeholder="Gender"
                  onValueChange={(item, index) => setSelectedValue(item)}
                  style={{
                    width: vw(44),
                    height: vh(5),
                    borderWidth: 1.5,
                    borderColor: '#fe5e75',
                    borderRadius: 30,

                  }}>
                  <Picker.Item
                    label="Female"
                    value="Female"
                    style={{fontSize: vf(2)}}
                  />
                  <Picker.Item
                    label="Male"
                    value="Male"
                    style={{fontSize: vf(2)}}
                  />
                  <Picker.Item
                    label="Transgender"
                    value="Transgender"
                    style={{fontSize: vf(2)}}
                  />
                  <Picker.Item
                    label="Lesbian"
                    value="Lesbian"
                    style={{fontSize: vf(2)}}
                  />
                  <Picker.Item
                    label="Gay"
                    value="Gay"
                    style={{fontSize: vf(2)}}
                  />
                  <Picker.Item
                    label=" Queer"
                    value=" Queer"
                    style={{fontSize: vf(2)}}
                  />
                  <Picker.Item
                    label="Questioning"
                    value="Questioning"
                    style={{fontSize: vf(2)}}
                  />
                  <Picker.Item
                    label="Intersex"
                    value="Intersex"
                    style={{fontSize: vf(2)}}
                  />
                  <Picker.Item
                    label="Pansexual"
                    value="Pansexual"
                    style={{fontSize: vf(2)}}
                  />
                  <Picker.Item
                    label="Two-Spirited"
                    value="Two-Spirited"
                    style={{fontSize: vf(2)}}
                  />
                  <Picker.Item
                    label="Asexual"
                    value="Asexual"
                    style={{fontSize: vf(2)}}
                  />
                </Picker>
              </View>

              <View>
                <View>
                  <Text style={{color: 'black', fontSize: 15}}>Age:</Text>
                  <TextInput
                    style={styles.input1}
                    placeholder="Age"
                    keyboardType="numeric"
                    editable
                    maxLength={40}
                    onChangeText={e => {
                      console.log(e);
                      setUsersData({
                        ...userData,
                        age: e,
                      });
                    }}
                    value={userData?.age}
                  />
                </View>
              </View>
            </View>

            <View>
              <View>
                <Text style={{color: 'black', fontSize: 15}}>About:</Text>

                <TextInput
                  style={styles.input3}
                  placeholder="About"
                  multiline={true}
                  numberOfLines={10}
                  // editable
                  // maxLength={40}
                  onChangeText={e => {
                    console.log(e);
                    setUsersData({
                      ...userData,
                      about: e,
                    });
                  }}
                  value={userData?.about}
                />
              </View>
            </View>

            <View>
              <View>
                <Text style={{color: 'black', fontSize: 15}}>Address:</Text>

                <TextInput
                  style={styles.input2}
                  placeholder="Address"
                  editable
                  maxLength={40}
                  onChangeText={e => {
                    console.log(e);
                    setUsersData({
                      ...userData,
                      address1: e,
                    });
                  }}
                  value={userData?.address1}
                />
              </View>
              {/* <View>
                <Text style={{color: 'black', fontSize: 15}}>Email:</Text>

                <TextInput
                  style={styles.input2}
                  placeholder="Address"
                  editable
                  maxLength={40}
                  onChangeText={e => {
                    console.log(e);
                    setUsersData({
                      ...userData,
                      email: e,
                    });
                  }}
                  value={userData?.email}
                />
              </View> */}
            </View>
          </View>
          <TouchableOpacity onPress={updateUserData}>
            <View
              style={{
                backgroundColor: '#fe5e75',
                height: 50,
                margin: 20,
                borderRadius: 30,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  marginTop: 12,
                  color: 'white',
                  fontSize: 18,
                }}>
                Save Changes
              </Text>
            </View>
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
    paddingLeft: 30,
  },
  input2: {
    height: 50,
    margin: 12,
    borderWidth: 1.4,
    borderColor: '#fe5e75',
    padding: 10,
    borderRadius: 20,
  },
  input3: {
    height: 100,
    margin: 12,
    borderWidth: 1.4,
    borderColor: '#fe5e75',
    padding: 10,
    borderRadius: 20,
  },
  input1: {
    height: 40,
    borderWidth: 1.5,
    borderColor: '#fe5e75',
    padding: 10,
    borderRadius: 30,
    width: vw(43),
    height: vh(7),
  },
});
export default EditBiodata;
