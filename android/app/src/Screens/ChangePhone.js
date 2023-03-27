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

const ChangePhone = () => {
  const navigation = useNavigation();
  const [selectedValue, setSelectedValue] = useState('');
  const [userData, setUsersData] = useState({
    // name: '',
    // email: '',
    // address1: '',
    // mobile: '',
    // gender: '',
    // age: '',
    // intrest: '',
    // about: '',
    phoneNo:'',

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
            // name: userData?.name,
            // email: userData?.email,
            // about: userData?.about,
            // address1: userData?.address1,
            // gender: userData?.gender,
            // age: userData?.age,
            phone: userData?.phoneNo, 
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
              <Text style={{color: 'black', fontSize: 25}}>
                Change Phone Number
              </Text>
            </Text>
          </View>
          <View style={{marginTop: 50}}>
            <View>
              <Text style={{color: 'black', fontSize: 15}}>Phone Number:</Text>
              <TextInput
                style={styles.input2}
                placeholder="Phone Number"
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
              <Text style={{color: 'black', fontSize: 15}}>
                Confirm Phone Number:
              </Text>

              <TextInput
                style={styles.input2}
                placeholder="Confirm Phone Number:"
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
    borderWidth: 1.5,
    borderColor: '#fe5e75',
    padding: 10,
    borderRadius: 30,
    width: vw(43),
    height: vh(7),
  },
});
export default ChangePhone;
