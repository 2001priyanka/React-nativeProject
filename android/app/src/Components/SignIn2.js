import React from 'react';

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

const SignIn2 = () => {
  const [text, onChangeText] = React.useState(null);
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
              />
              <View style={{backgroundColor: '#FFDBE9', borderRadius: 20}}>
                <Text
                  style={{
                    height: 30,
                    borderRadius: 20,
                    color: '#DC334D',
                    marginLeft: 30,
                    marginTop: 8,
                  }}>
                  <IconFa name="alert-circle" style={{marginRight: 20}} />
                  Invalid Email
                </Text>
              </View>
            </View>

            <View>
              <Text style={{color: 'black', fontSize: 15}}>password:</Text>

              <TextInput
                style={styles.input2}
                placeholder="password"
                editable
                maxLength={40}
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
                // height: 40,
                // width: 100,
                marginTop: 12,
                color: 'white',
              }}>
              Sign Up
            </Text>
          </View>
          <View>
            <Text style={{textAlign: 'center', color: '#D56AAC'}}>
              Forget The Password?
            </Text>
          </View>
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
                Already have an account?
              </Text>
            </View>
            <View>
              <Text
                style={{textAlign: 'center', marginTop: 20, color: '#D56AAC'}}>
                Sign In
              </Text>
            </View>
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
export default SignIn2;
