import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  Image,
  View,
  Button,
} from 'react-native';
import {
  responsiveHeight as vh,
  responsiveWidth as vw,
  responsiveFontSize as vf,
} from 'react-native-responsive-dimensions';
import IconFa from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity} from 'react-native-gesture-handler';

const SignIn = () => {
  const navigation = useNavigation();
  const onNextPressed2 = () => {
    navigation.navigate('SignUp');
  };
  const onNext1Pressed = () => {
    navigation.navigate('SignIn1');
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <View>
            <IconFa
              name="arrow-left"
              style={{
                fontSize: vf(4),
                marginTop: 40,
                marginLeft: 30,
                color: '#fe5e75',
              }}
            />
          </View>
          <View>
            <Text style={styles.header}>Let's you in</Text>
          </View>

          <TouchableOpacity>
            <View style={styles.body1}>
              <Image
                source={{
                  uri: 'https://mspoweruser.com/wp-content/uploads/2022/04/logo-Meta.png',
                }}
                style={{height: vh(2), width: vw(7)}}
              />
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 18,
                  // marginTop: 12,
                  color: '#000',
                  marginLeft: 10,
                  fontWeight: '600',
                }}>
                Meta
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.body2}>
            {/* <IconFa name="google" color={'white'} style={{fontSize: 30}} /> */}
            <Image
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png',
              }}
              style={{height: vh(3.2), width: vw(6)}}
            />
            <Text
              style={{
                textAlign: 'center',
                fontSize: 18,
                fontWeight: '600',
                color: '#000',
                marginLeft: 10,
              }}>
              Google
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.body3}>
              <Image
                source={{
                  uri: 'https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png',
                }}
                style={{height: vh(3.5), width: vw(7)}}
              />
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 18,
                  fontWeight: '600',
                  color: 'black',
                  // marginLeft:,
                  paddingLeft: 9,
                }}>
                Apple
              </Text>
            </View>
          </TouchableOpacity>
          <View>
            <Text
              style={{
                textAlign: 'center',
                color: 'black',
                fontSize: 18,
                marginTop: 20,
              }}>
              Or
            </Text>
            <TouchableOpacity onPress={onNext1Pressed}>
              <View
                style={{
                  flexDirection: 'row',
                  backgroundColor: '#fe5e75',
                  height: vh(7),
                  width: vw(90),
                  borderRadius: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'center',
                  marginTop: 20,
                }}>
                <Text
                  style={{
                    fontSize: vf(2.5),
                    color: 'white',
                    fontWeight: '500',
                  }}>
                  Sign in with password
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          {/* <View style={styles.footer}> */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 9,
            }}>
            <View>
              <Text
                style={{
                  fontWeight: '500',
                }}>
                Don't have an account?
              </Text>
            </View>
            <View>
              <TouchableOpacity onPress={onNextPressed2}>
                <Text
                  style={{
                    color: '#fe5e75',
                    marginLeft: 10,
                    fontWeight: '500',
                  }}>
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* </View> */}
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  header: {
    textAlign: 'center',
    color: 'black',
    fontSize: 30,
    marginTop: 70,
    fontWeight: '500',
  },
  body1: {
    backgroundColor: '#fff',
    borderWidth: 1,
    height: vh(8),
    width: vw(70),
    margin: 10,
    borderRadius: 10,
    // height: 60,
    borderColor: '#B3B0B0',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 30,
    paddingLeft: 90,
  },
  body2: {
    backgroundColor: '#fff',
    borderWidth: 1,
    height: vh(8),
    width: vw(70),
    // margin: 10,
    borderRadius: 10,
    // height: 60,
    borderColor: '#B3B0B0',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'center',
    // marginTop: 30,
    paddingLeft: 90,
  },
  body3: {
    backgroundColor: '#fff',
    borderWidth: 1,
    height: vh(8),
    width: vw(70),
    // margin: 10,
    borderRadius: 10,
    // height: 60,
    borderColor: '#B3B0B0',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop:10,
    paddingLeft: 90,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingRight: 20,
    marginTop: 120,
  },
});
export default SignIn;
