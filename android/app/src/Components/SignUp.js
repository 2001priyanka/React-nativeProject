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
} from 'react-native';
import IconFa from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  responsiveHeight as vh,
  responsiveWidth as vw,
  responsiveFontSize as vf,
} from 'react-native-responsive-dimensions';

const SignUp = () => {
  const navigation = useNavigation();
  const onNextPressed3 = () => {
    navigation.navigate('SetUp2');
  };
  const onNext2Pressed = () => {
    navigation.navigate('SignIn1');
  };
  //  const onNext1Pressed = () => {
  //    navigation.navigate('SignIn1');
  //  };
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
              marginTop: 50,
            }}
          />
        </View>
        <View style={styles.conatiner}>
          <View>
            <Text
              style={{
                marginTop: 30,
                textAlign: 'center',
                color: 'black',
                fontSize: 25,
              }}>
              Create an Account
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
                Email:
              </Text>
              <TextInput
                style={styles.input2}
                placeholder="Email"
                editable
                maxLength={40}
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
              />
            </View>
          </View>
          <View
            style={{
              alignSelf: 'flex-start',
              marginLeft: 50,
              flexDirection: 'row',
            }}>
            <IconFa name="checkbox-blank-outline" style={{fontSize: 20}} />
            <Text style={{color: 'black', fontSize: 15, marginLeft: 10}}>
              Remember me
            </Text>
          </View>
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
                // height: 40,
                // width: 100,
                marginTop: 12,
                color: 'white',
              }}
              onPress={onNextPressed3}>
              Sign Up
            </Text>
          </View>
          <View>
            <Text style={{textAlign: 'center'}}>or continue with</Text>
          </View>
          <View style={styles.socialIcon}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 1,
                borderColor: '#B3B0B0',
                paddingHorizontal: 20,
                height: vh(7),
                borderRadius: 10,
              }}>
              <IconFa name="facebook" style={{fontSize: 30, color: 'blue'}} />
              <Text style={{fontWeight: '500', marginLeft: 10}}>Facebook</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 1,
                borderColor: '#B3B0B0',
                borderRadius: 10,
                paddingHorizontal: 20,
              }}>
              <IconFa name="google" style={{fontSize: 30}} />
              <Text style={{fontWeight: '500', marginLeft: 10}}>Google</Text>
            </View>
          </View>
          <View style={styles.footer}>
            <View>
              <Text
                style={{textAlign: 'center', marginTop: 20, fontWeight: '500'}}>
                Already have an account?
              </Text>
            </View>
            <TouchableOpacity>
              <View>
                <Text
                  style={{
                    textAlign: 'center',
                    marginTop: 20,
                    color: '#fe5e75',
                    fontWeight: '500',
                    marginLeft: 10,
                  }}
                  onPress={onNext2Pressed}>
                  Sign In
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
