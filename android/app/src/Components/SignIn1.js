import React, { useEffect, useState } from 'react';
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
import { API_URL } from '../../../../Config';
import {useDispatch, } from "react-redux";
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
  const [username , setUsername] = useState("");
  const [passoword,setPassword] = useState(""); 
  // const [signinData, setSigninData] = useState({
  //   email:"",
  //   password:"",
  // })

 const submitHandler = async () => {
  console.log({
    username,
    passoword,
  });

   try{
    const signinData = await axios({
      url: API_URL + '/auth/signin',
      method:'POST',
      data:{
        username,
        passoword,
      },
    });
    if(signinData){
      console.log('signinData',signinData);
      if(signinData?.data?.success){
        console.log('signinData?.data',signinData?.data);
        dispatch(setIsLoggedIn(true));
        dispatch(setLoggedInUser(signinData?.data));
        navigation.navigate('HomeScreens');
      }
    }
   }catch(error){
    console.log('ERROR',error)
   }
 }
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Image
            source={{
              uri: 'https://i.dlpng.com/static/png/6509551_preview.png',
            }}
            style={{
              height: 200,
              width: 200,
              borderRadius: 10,
              marginLeft: 100,
              // marginRight: 40,
              marginTop: 20,
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
                fontSize: 25,
              }}>
              Let's Sign You In
            </Text>
          </View>
          <View style={styles.input}>
            <View>
              <Text style={{color: 'black', fontSize: 15}}>Email:</Text>
              <TextInput
                style={styles.input2}
                placeholder="Email"
                editable
                maxLength={40}
                onChangeText={txt => {
                  setUsername(txt);
                }}
                value={username}
              />
            </View>

            <View>
              <Text style={{color: 'black', fontSize: 15}}>password:</Text>

              <TextInput
                style={styles.input2}
                placeholder="password"
                editable
                maxLength={40}
                onChangeText={txt => {
                  setPassword(txt);
                }}
                value={passoword}
              />
            </View>
          </View>
          <View style={{}}>
            <Text style={{color: 'black', fontSize: 15, textAlign: 'center'}}>
              <IconFa
                name="checkbox-marked"
                style={{fontSize: 20, color: '#D56AAC'}}
              />
              Remember me
            </Text>
          </View>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: '#D56AAC',
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
                onPress={() => {
                  submitHandler();
                }}
                >
                Sign In
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View>
              <Text
                style={{textAlign: 'center', color: '#D56AAC'}}
                onPress={onNext3Pressed}>
                Forget The Password?
              </Text>
            </View>
          </TouchableOpacity>
          <View>
            <Text style={{textAlign: 'center', color: 'black', marginTop: 20}}>
              Or continue with
            </Text>
          </View>
          <View style={styles.socialIcon}>
            <View>
              <Text style={{fontSize: 20, color: 'black'}}>
                <IconFa
                  name="facebook"
                  style={{fontSize: 30, color: '#3b5998'}}
                />
                Facebook
              </Text>
            </View>
            <View>
              <Text style={{color: 'black', fontSize: 20}}>
                <IconFa name="google" style={{fontSize: 30}} />
                Google
              </Text>
            </View>
          </View>
          <View style={styles.footer}>
            <View>
              <Text style={{textAlign: 'center', marginTop: 20}}>
                Don't have an account?
              </Text>
            </View>
            <TouchableOpacity>
              <View>
                <Text
                  style={{
                    textAlign: 'center',
                    marginTop: 20,
                    color: '#D56AAC',
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
    justifyContent: 'space-around',
    padding: 100,
  },
  input: {
    display: 'flex',
    margin: 8,
    padding: 10,
  },
  input2: {
    height: 40,
    margin: 12,
    borderWidth: 0.5,
    padding: 10,
    borderRadius: 20,
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
