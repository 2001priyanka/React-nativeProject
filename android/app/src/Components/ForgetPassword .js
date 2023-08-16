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
  TouchableOpacity,
} from 'react-native';
import IconFa from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  responsiveHeight as vh,
  responsiveWidth as vw,
  responsiveFontSize as vf,
} from 'react-native-responsive-dimensions';
const ForgetPassword = () => {
  const navigation = useNavigation();
  const onNextPressed6 = () => {
    navigation.navigate('ResetPassword');
  };
  const [text, onChangeText] = React.useState(null);
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <View style={styles.upperSection}>
            <IconFa
              name="arrow-left"
              style={{fontSize:vf(3.4), color: '#fe5e75'}}
            />
            <Text style={{paddingLeft: 20, color: 'black',fontSize:vf(2.5)}}>
              Forgot Password
            </Text>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Image
              source={require('../Assest/Images/ForgotPassword.png')}
              style={{
                width: vw(45),
                height: vh(30),
                // margin: 10,
                borderRadius: 40,
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
                  color: '#fe5e75',
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
                  color: '#fe5e75',
                  marginLeft: 15,
                }}
              />
            </View>
            <View>
              <Text>Via Sms:</Text>
              <Text style={{color: 'black'}}>ex***ample@domain.com</Text>
            </View>
          </View>
          <TouchableOpacity>
            <View
              style={{
                flexDirection:'row',
                justifyContent:'center',
                alignItems:'center',
                alignSelf:'center',
                backgroundColor: '#fe5e75',
                height:vh(7),
                width:vw(70),
                borderRadius: 30,
              }}>
              <Text
                style={{
                  fontSize:vf(2.5),
                  color: '#fff',
                  fontWeight:'600'
                }}
                onPress={onNextPressed6}>
                continue
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  upperSection: {
    flexDirection:'row',
    margin: 20,
    // fontSize: 25,
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
    borderColor: '#fe5e75',
    paddingRight: 100,
  },
  body1: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 20,
    margin: 20,
    height: 100,
    borderRadius: 15,
    backgroundColor: 'white',
  },
});
export default ForgetPassword;
