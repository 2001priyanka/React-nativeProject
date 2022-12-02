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

const ForgetPassword = () => {
  const [text, onChangeText] = React.useState(null);
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <View>
            <Text style={styles.upperSection}>
              <IconFa
                name="arrow-left"
                style={{fontSize: 25, color: '#D56AAC'}}
              />
              <Text style={{paddingLeft: 10, color: 'black'}}>
                Forgot Password
              </Text>
            </Text>
          </View>
          <View>
            <Image
              source={{
                uri: 'https://static.vecteezy.com/system/resources/previews/004/112/255/original/forgot-password-and-account-login-for-web-page-protection-security-key-access-system-in-smartphone-or-computer-flat-illustration-vector.jpg',
              }}
              style={{
                height: 200,
                width: 200,
                borderRadius: 10,
                // marginLeft: 100,
                // marginRight: 40,
                marginTop: 20,
                alignSelf: 'center',
              }}
            />
          </View>
          <View>
            <Text style={{fontSize: 18, margin: 20, color: 'black'}}>
              Select which contact details should we use to reset your password
            </Text>
          </View>
          <View style={styles.body}>
            <View
              style={{
                backgroundColor: '#FFDBE9',
                width: 60,
                height: 60,
                borderRadius: 50,
              }}>
              <IconFa
                name="message-bulleted"
                style={{
                  fontSize: 30,
                  marginTop: 15,
                  color: '#D56AAC',
                  marginLeft: 15,
                }}
              />
            </View>
            <View>
              <Text>Via Sms:</Text>
              <Text style={{color: 'black'}}>+78324****90</Text>
            </View>
          </View>
          <View style={styles.body1}>
            <View
              style={{
                backgroundColor: '#FFDBE9',
                width: 60,
                height: 60,
                borderRadius: 50,
              }}>
              <IconFa
                name="email"
                style={{
                  fontSize: 30,
                  marginTop: 15,
                  color: '#D56AAC',
                  marginLeft: 15,
                }}
              />
            </View>
            <View>
              <Text>Via Sms:</Text>
              <Text style={{color: 'black'}}>ex***ample@domain.com</Text>
            </View>
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
              continue
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  upperSection: {
    margin: 20,
    fontSize: 25,
    paddingLeft: 10,
    marginTop: 30,
  },
  body: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderWidth: 2,
    padding: 20,
    margin: 20,
    height: 100,
    borderRadius: 15,
    borderColor: '#D56AAC',
  },
  body1: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    // borderWidth: 1,
    padding: 20,
    margin: 20,
    height: 100,
    borderRadius: 15,
    backgroundColor: 'white',
  },
});
export default ForgetPassword;
