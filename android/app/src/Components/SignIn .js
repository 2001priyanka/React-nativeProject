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
                fontSize: 25,
                marginTop: 40,
                marginLeft:30,
                color: '#fe5e75',
              }}
            />
          </View>
          <View>
            <Text style={styles.header}>Let's you in</Text>
          </View>

          <View style={styles.body1}>
            <IconFa
              name="facebook"
              style={{
                fontSize: 30,
                color: 'white',
               
              }}
            />
            <Text
              style={{
                textAlign: 'center',
                fontSize: 18,
                // marginTop: 12,
                color: 'white',
                marginLeft: 10,
              }}>
              Facebook
            </Text>
          </View>
          <View style={styles.body2}>
            <IconFa
              name="google"
              color={'white'}
              style={{fontSize: 30}}
            />
            <Text
              style={{
                textAlign: 'center',
                fontSize: 18,
                color: 'white',
                marginLeft: 10,
              }}>
              Google
            </Text>
          </View>
          <View style={styles.body3}>
            <IconFa
              name="apple"
              color={'black'}
              style={{fontSize: 30}}
            />
            <Text
              style={{
                textAlign: 'center',
                fontSize: 18,
                color: 'black',
                marginLeft: 10,
                // paddingLeft:5,
              }}>
              Apple
            </Text>
          </View>
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
            <TouchableOpacity>
              <View
                style={{
                  backgroundColor: '#fe5e75',
                  height: 50,
                  margin: 20,
                  borderRadius: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontWeight: '500',
                  }}
                  onPress={onNext1Pressed}>
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
              marginTop:120,
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
              <TouchableOpacity>
                <Text
                  style={{
                    color: '#fe5e75',
                    marginLeft: 10,
                    fontWeight: '500',
                  }}
                  onPress={onNextPressed2}>
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
  body: {
    // backgroundColor: '#D56AAC',
    borderWidth: 1,
    height: 50,
    margin: 10,
    borderRadius: 10,
    height: 60,
    borderColor: '#B3B0B0',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  body1: {
    backgroundColor: '#3b5998',
    borderWidth: 1,
    height: 50,
    margin: 10,
    borderRadius: 10,
    height: 60,
    borderColor: '#B3B0B0',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  body2: {
    backgroundColor: '#E24610',
    borderWidth: 1,
    height: 50,
    margin: 10,
    borderRadius: 10,
    height: 60,
    borderColor: '#B3B0B0',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 20,
  },
  body3: {
    backgroundColor: 'white',
    borderWidth: 1,
    height: 50,
    margin: 10,
    borderRadius: 10,
    height: 60,
    borderColor: '#B3B0B0',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 30,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingRight: 20,
    marginTop: 120,
  },
});
export default SignIn;
