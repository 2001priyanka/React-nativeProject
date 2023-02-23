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
import IconFa from 'react-native-vector-icons/MaterialCommunityIcons';
// import IconFa from 'react-native-vector-icons/MaterialIcons';
import {useSelector} from 'react-redux';
import {useNavigation, useRoute} from '@react-navigation/native';
import {API_URL} from '../../../../Config';
import axios from 'axios';
import {Alert} from 'react-native';

const EditBiodata = () => {
  const navigation = useNavigation();
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
            email: userData?.email,
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
            <Text style={styles.uppersection}>
              <Text style={{color: 'black', fontSize: 25}}>Edit Biodata</Text>
            </Text>
          </View>
          <View style={styles.input}>
            <View>
              <Text style={{color: 'black', fontSize: 15}}>Full Name:</Text>

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
          </View>
          <View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <View>
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
              </View>
              <View>
                <View>
                  <Text style={{color: 'black', fontSize: 15}}>Age:</Text>
                  <TextInput
                    style={styles.input1}
                    placeholder="Age"
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
              <View>
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
              </View>
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
    // marginTop: 10,
    paddingLeft: 30,
    padding: 5,
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
    margin: 12,
    borderWidth: 1.5,
    borderColor: '#fe5e75',
    padding: 10,
    borderRadius: 20,
    width: 150,
  },
});
export default EditBiodata;
