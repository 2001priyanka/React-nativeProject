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
const ResetPassword = () => {
  const navigation = useNavigation();
  const onNextPressed7 = () => {
    navigation.navigate('SetUp2');
  };
  const [text, onChangeText] = React.useState(null);
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <View style={styles.upperSection}>
            <IconFa
              name="arrow-left"
              style={{fontSize: vf(3.4), color: '#fe5e75'}}
            />
            <Text style={{paddingLeft: 20, color: 'black', fontSize: vf(2.5)}}>
              Reset Password
            </Text>
          </View>
          <View>
            <Image
              source={require('../Assest/Images/Resetpassword-cuate.png')}
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
          <View style={{alignItems: 'center'}}>
            <Text style={{fontSize: 25, color: 'black'}}>
              Create a new password
            </Text>
          </View>
          <View style={{paddingHorizontal: 15, marginTop: 40}}>
            <Text style={{color: 'black', fontSize: vf(2)}}>New Password:</Text>
          </View>
          <TextInput
            placeholder="New Password"
            label="New Password"
            // multiline={true}
            // numberOfLines={7}
            style={styles.textArea}
            // onChangeText={e => {
            //   console.log(e);
            //   setFeedbackData({
            //     ...feedbackData,
            //     message: e,
            //   });
            // }}
            // value={feedbackData?.message}
          />
          <View style={{paddingHorizontal: 15, marginTop: 10}}>
            <Text style={{color: 'black', fontSize: vf(2)}}>Confirm New Password:</Text>
          </View>
          <TextInput
            placeholder="Confirm New Password"
            label="Confirm New Password"
            // multiline={true}
            // numberOfLines={7}
            style={styles.textArea}
            // onChangeText={e => {
            //   console.log(e);
            //   setFeedbackData({
            //     ...feedbackData,
            //     message: e,
            //   });
            // }}
            // value={feedbackData?.message}
          />

          <View style={{}}>
            <Text style={{color: 'black', fontSize: 15, marginLeft: 40}}>
              <IconFa name="checkbox-blank-outline" style={{fontSize: 20}} />
              Remember me
            </Text>
          </View>
          <TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                backgroundColor: '#fe5e75',
                height: vh(7),
                width: vw(80),
                borderRadius: 30,
                marginTop: 30,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: vf(2.3),
                  fontWeight: '600',
                }}
                onPress={onNextPressed7}>
                Save
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
    fontSize: 25,
    paddingLeft: 10,
    marginTop: 30,
  },
  input2: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    paddingLeft: 30,
    borderRadius: 30,
    borderColor: '#B3B0B0',
  },
  textArea: {
    // height: 100,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 30,
    textAlignVertical: 'top',
    borderColor: '#A09C9C',
  },
});
export default ResetPassword;
