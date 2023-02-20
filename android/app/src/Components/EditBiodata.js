import React , {useState, useEffect}from 'react';

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
import {useNavigation} from '@react-navigation/native';
import { API_URL } from '../../../../Config';
import axios from 'axios';

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
  const token = useSelector(reduxState => reduxState?.login?.user?.accessToken
  );
  console.log('token',token);

  const getUsersData = async () => {
    if (token) {
      console.log('token',token)
      try {
        const res = await axios({
          url: API_URL + 'user/user/getProfile',
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (res) {
          console.log('users data in edit profile', res?.data?.user);
          setUsersData(res?.data?.user);
         
        }
      } catch (error) {
        console.log('profile data error', error);
      }
    }
  };
  const updateProfile = async()=>{
    if(token){
       console.log('token',token)
      try {
        const res = await axios({
          url: API_URL + 'user/user/',
          method:'PUT',
          data:{
            ...userData, 
          }, 
         headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if(res){
          console.log('update users res', res);
          navigation.navigate('homepage')
        }
      } catch (error) {
        console.log('edit profile error' ,error)
      }
    }
  }
  useEffect(()=>{
    getUsersData();
  },[token]);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{padding: 20}}>
          <View>
            <Text style={styles.uppersection}>
              <IconFa
                name="arrow-left"
                style={{fontSize: 25, color: '#fe5e75'}}
              />
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
            </View>
          </View>
          <TouchableOpacity>
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
                }}
                onPress={updateProfile}>
                Save Change
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
    height:50,
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
