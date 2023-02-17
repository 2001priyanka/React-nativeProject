import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
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
import {API_URL} from '../../../../Config';
import {useDispatch} from 'react-redux';
import {
  responsiveHeight as vh,
  responsiveWidth as vw,
  responsiveFontSize as vf,
} from 'react-native-responsive-dimensions';
import {setIsLoggedIn, setLoggedInUser} from '../Redux/Slice/LoginSlice';

const SignIn1 = () => {
  const navigation = useNavigation();
  const onNextPressed5 = () => {
    navigation.navigate('SignUp');
  };
  const onNext3Pressed = () => {
    navigation.navigate('ForgetPassword ');
  };
  const onNextPressed8 = () => {
    navigation.navigate('HomeScreens');
  };
  const dispatch = useDispatch();
  const [username, setUsername] = useState ('');
  // const [number, setNumber] = useState('');
  // const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = async () => {
    console.log({
      username,
      password,
    });

    try {
      const signinData = await axios({
        url: API_URL + 'auth/signin',
        method: 'POST',
        data: {
          username,
          password,
        },  
      });
      if (signinData) {
        console.log('signinData', signinData);
        if (signinData?.data?.success) {
          console.log('signinData?.data', signinData?.data);
          dispatch(setIsLoggedIn(true));
          dispatch(setLoggedInUser(signinData?.data));
          navigation.navigate('AccountSetUp');
        }
      }
    } catch (error) {
      console.log('ERROR', error);
    }
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Image
            source={{
              uri: 'https://i.dlpng.com/static/png/6509551_preview.png',
            }}
            style={{
              height:vh(20),
              width: vw(35),
              borderRadius: 10,
              alignSelf:'center',
            }}
          />
        </View>
        <View style={styles.conatiner}>
          <View>
            <Text
              style={{
                // marginTop: 30,
                textAlign: 'center',
                color: 'black',
                fontSize: vf(3.3),
              }}>
              Let's Sign You In
            </Text>
          </View>
          <View style={styles.input}>
            <View>
              <Text
                style={{
                  alignSelf: 'flex-start',
                  marginLeft: 25,
                  flexDirection: 'row',
                  fontWeight: '500',
                }}>
                username:
              </Text>
              <TextInput
                style={styles.input2}
                placeholder="username"
                editable
                maxLength={40}
                onChangeText={txt => {
                  setUsername(txt);
                }}
                value={username}
              />
            </View>

            <View>
              <Text
                style={{
                  alignSelf: 'flex-start',
                  marginLeft: 25,
                  flexDirection: 'row',
                  fontWeight: '500',
                }}>
                Password:
              </Text>

              <TextInput
                style={styles.input2}
                placeholder="password"
                editable
                maxLength={40}
                onChangeText={txt => {
                  setPassword(txt);
                }}
                value={password}
              />
            </View>
          </View>
          <View
            style={{
              alignSelf: 'flex-start',
              marginLeft: 50,
              flexDirection: 'row',
            }}>
            <IconFa
              name="checkbox-marked"
              style={{fontSize: vf(3), color: '#fe5e75'}}
            />
            <Text
              style={{
                color: 'black',
                fontSize: vf(2),
                textAlign: 'center',
                marginLeft: 10,
              }}>
              Remember me
            </Text>
          </View>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: '#fe5e75',
                height:vh(7),
                margin: 20,
                borderRadius: 30,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  marginTop: 12,
                  color: 'white',
                  fontSize: vf(2.5),
                }}
                onPress={() => {
                  submitHandler();
                }}>
                Sign In
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View>
              <Text
                style={{
                  textAlign: 'center',
                  color: '#fe5e75',
                  fontWeight: '500',
                }}
                onPress={onNext3Pressed}>
                Forgot The Password?
              </Text>
            </View>
          </TouchableOpacity>
          <View>
            <Text
              style={{
                textAlign: 'center',
                color: 'black',
                marginTop: 20,
                fontWeight: '500',
              }}>
              Or continue with
            </Text>
          </View>
          <View style={styles.socialIcon}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 1,
                borderColor: '#B3B0B0',
                paddingHorizontal: 10,
                height: vh(9),
                width: vw(45),
                borderRadius: 10,
              }}>
              <IconFa
                name="facebook"
                style={{fontSize: vf(4), color: '#3b5998'}}
              />
              <Text style={{fontSize: vf(2.5), color: 'black', marginLeft: 10}}>
                Facebook
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 1,
                borderColor: '#B3B0B0',
                paddingHorizontal: 20,
                height: vh(9),
                width: vw(45),
                borderRadius: 10,
              }}>
              <IconFa name="google" style={{fontSize: vf(4)}} />
              <Text style={{color: 'black', fontSize: vf(2.5), marginLeft: 10}}>
                Google
              </Text>
            </View>
          </View>
          <View style={styles.footer}>
            <View>
              <Text
                style={{textAlign: 'center', marginTop: 10, fontWeight: '500'}}>
                Don't have an account?
              </Text>
            </View>
            <TouchableOpacity>
              <View>
                <Text
                  style={{
                    textAlign: 'center',
                    marginTop: 10,
                    color: '#fe5e75',
                    fontWeight: '500',
                    marginLeft: 10,
                  }}
                  onPress={onNextPressed5}>
                  Sign Up
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    // justifyContent: 'space-around',
    padding: 100,
    backgroundColor: 'red',
  },
  input: {
    display: 'flex',
    margin: 8,
    padding: 10,
  },
  input2: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    paddingLeft: 30,
    borderRadius: 30,
    borderColor: '#B3B0B0',
  },
  socialIcon: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingRight: 20,
    marginTop: 20,
  },
});
export default SignIn1;
