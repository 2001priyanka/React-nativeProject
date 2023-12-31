import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  Image,
  View,
} from 'react-native';
import IconFa from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  responsiveHeight as vh,
  responsiveWidth as vw,
  responsiveFontSize as vf,
} from 'react-native-responsive-dimensions';
import {API_URL} from '../../../../Config';
import axios from 'axios';

const SignUp = () => {
  //  const [username, setUsername] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigation = useNavigation();
  const onNextPressed3 = () => {
    navigation.navigate('AccountSetUp');
  };
  const onNext2Pressed = () => {
    navigation.navigate('SignIn1');
  };

  const submitHandler = async () => {
    console.log({
      // username,
      phoneNo,
      password,
      email,
      confirmPassword,
    });
    try {
      const signupData = await axios({
        url: API_URL + 'auth/signup',
        method: 'POST',
        data: {
          username: phoneNo,
          phoneNo,
          email,
          password,
          confirmPassword,
          role: 'user',
        },
        Headers: {
          'Content-Type': 'application/json',
        },
      });
      if (signupData) {
        console.log('signupData', signupData);

        console.log('signupData?.data', signupData?.data);
        navigation.navigate('AccountSetUp', {
          _id: signupData?.data?._id,
        });
      }
    } catch (error) {
      console.log('ERROR', error);
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        {/* <View>
          <Image
            source={{
              uri: 'https://i.dlpng.com/static/png/6509551_preview.png',
            }}
            style={{
              height: vh(20),
              width: vw(45),
              borderRadius: 10,
              alignSelf: 'center',
              marginTop: 20,
            }}
          />
        </View> */}
        <View style={styles.conatiner}>
          <View>
            <Text
              style={{
                marginTop: 30,
                textAlign: 'center',
                color: 'black',
                fontSize: vf(3),
              }}>
              Create an Account
            </Text>
          </View>
          <View style={styles.input}>
            {/* <View>
              <Text
                style={{
                  alignSelf: 'flex-start',
                  marginLeft: 25,
                  flexDirection: 'row',
                  fontWeight: '500',
                }}>
                User Name:
              </Text>
              <TextInput
                style={styles.input2}
                placeholder="User Name"
                editable
                maxLength={40}
                onChangeText={txt => {
                  setUsername(txt);
                }}
              />
            </View> */}

            <View>
              <Text
                style={{
                  alignSelf: 'flex-start',
                  marginLeft: 25,
                  flexDirection: 'row',
                  fontWeight: '500',
                }}>
                Email:
              </Text>
              <TextInput
                style={styles.input2}
                placeholder="Email"
                editable
                maxLength={40}
                onChangeText={txt => {
                  setEmail(txt);
                }}
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
                Phone Number:
              </Text>
              <TextInput
                style={styles.input2}
                placeholder="Phone Number"
                editable
                maxLength={40}
                onChangeText={txt => {
                  setPhoneNo(txt);
                }}
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
                placeholder="Password"
                editable
                maxLength={40}
                onChangeText={txt => {
                  setPassword(txt);
                }}
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
                Confirm Password:
              </Text>
              <TextInput
                style={styles.input2}
                placeholder="Confirm Password"
                editable
                maxLength={40}
                onChangeText={txt => {
                  setConfirmPassword(txt);
                }}
              />
            </View>
          </View>
          <View
            style={{
              alignSelf: 'flex-start',
              marginLeft: 50,
              flexDirection: 'row',
            }}>
            <IconFa name="checkbox-blank-outline" style={{fontSize: vf(2.5)}} />
            <Text style={{color: 'black', fontSize: vf(2), marginLeft: 10}}>
              Remember me
            </Text>
          </View>

          <TouchableOpacity
            onPress={submitHandler}
            style={{
              backgroundColor: '#fe5e75',
              height: vh(7),
              margin: 20,
              borderRadius: 30,
            }}>
            <Text
              style={{
                textAlign: 'center',
                // height: 40,
                // width: 100,
                marginTop: 12,
                color: 'white',
                fontSize: vf(2.4),
              }}>
              Sign Up
            </Text>
          </TouchableOpacity>

          <View>
            <Text style={{textAlign: 'center', color: '#000'}}>
              or continue with
            </Text>
          </View>
          <View style={styles.socialIcon}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 1,
                borderColor: '#B3B0B0',
                paddingHorizontal: 20,
                height: vh(8),
                width: vw(45),
                borderRadius: 10,
                marginTop: 9,
              }}>
              <Image
                source={{
                  uri: 'https://mspoweruser.com/wp-content/uploads/2022/04/logo-Meta.png',
                }}
                style={{height: vh(2), width: vw(7)}}
              />
              <Text
                style={{
                  fontWeight: '500',
                  marginLeft: 10,
                  color: '#000',
                  fontSize: vh(2.3),
                }}>
                Meta
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 1,
                borderColor: '#B3B0B0',
                borderRadius: 10,
                paddingHorizontal: 20,
                height: vh(8),
                width: vw(45),
                marginTop: 9,
              }}>
              <Image
                source={{
                  uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png',
                }}
                style={{height: vh(3.2), width: vw(6)}}
              />
              <Text style={{fontWeight: '500', marginLeft: 10,color:'#000',fontSize:vf(2.2)}}>Google</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.footer}>
            <View>
              <Text
                style={{textAlign: 'center', marginTop: 20, fontWeight: '500'}}>
                Already have an account??
              </Text>
            </View>
            <TouchableOpacity>
              <TouchableOpacity onPress={onNext2Pressed}>
                <Text
                  style={{
                    textAlign: 'center',
                    marginTop: 20,
                    color: '#fe5e75',
                    fontWeight: '500',
                    marginLeft: 10,
                  }}>
                  Sign In
                </Text>
              </TouchableOpacity>
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
    justifyContent: 'space-around',
    padding: 100,
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
    borderRadius: 25,
    borderColor: '#B3B0B0',
  },
  socialIcon: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingRight: 20,
  },
});
export default SignUp;
