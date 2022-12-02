import React from 'react';

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

const SignIn = () => {
  const [text, onChangeText] = React.useState(null);
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
                marginLeft: 30,
                color: '#D56AAC',
              }}
            />
          </View>
          <View>
            <Text style={styles.header}>Let's you in</Text>
          </View>
          {/* <View style={{borderWidth: 1, marginTop: 30}}>
            <Text style={{textAlign: 'center', marginTop: 20}}>
              <IconFa
                name="facebook"
                style={{fontSize: 35, alignItems: 'center'}}
              />
              Facebook
            </Text>
          </View> */}
          <View style={styles.body}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 18,
                marginTop: 12,
                color: 'black',
              }}>
              <IconFa
                name="facebook"
                style={{fontSize: 30, color: '#3b5998'}}
              />
              Facebook
            </Text>
          </View>
          <View style={styles.body}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 18,
                marginTop: 12,
                color: 'black',
              }}>
              <IconFa name="google" style={{fontSize: 30}} />
              Google
            </Text>
          </View>
          <View style={styles.body}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 18,
                marginTop: 10,
                color: 'black',
              }}>
              <IconFa name="apple" style={{fontSize: 30}} />
              Apple
            </Text>
          </View>
          <View>
            <Text style={{textAlign: 'center', color: 'black', fontSize: 18}}>
              Or
            </Text>
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
                Sign in with password
              </Text>
            </View>
          </View>
          <View style={styles.footer}>
            <View>
              <Text
                style={{textAlign: 'center', marginTop: 20, color: 'black'}}>
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
  header: {
    textAlign: 'center',
    color: 'black',
    fontSize: 30,
    marginTop: 70,
  },
  body: {
    // backgroundColor: '#D56AAC',
    borderWidth: 0.5,
    height: 50,
    margin: 10,
    borderRadius: 10,
    height: 60,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingRight: 20,
    marginTop: 120,
  },
});
export default SignIn;
