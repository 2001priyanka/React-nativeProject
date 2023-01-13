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
          <View>
            <Text style={styles.upperSection}>
              <IconFa
                name="arrow-left"
                style={{fontSize: 25, color: '#fe5e75'}}
              />
              <Text style={{paddingLeft: 10, color: 'black'}}>
                Reset Password
              </Text>
            </Text>
          </View>
          <View>
            <Image
              source={{
                uri: 'https://static.vecteezy.com/system/resources/thumbnails/002/047/029/small/forgot-the-password-concept-flat-illustration-vector.jpg',
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
            <Text style={{fontSize: 25, margin: 20, color: 'black'}}>
              Create a new password
            </Text>
            <View style={styles.input}>
              <View>
                <Text style={{color: 'black', fontSize: 15}}>New Password</Text>
                <TextInput
                  style={styles.input2}
                  placeholder="New Password"
                  editable
                  maxLength={40}
                />
              </View>

              <View>
                <Text style={{color: 'black', fontSize: 15}}>
                  {' '}
                  Confirm New Password
                </Text>
                <TextInput
                  style={styles.input2}
                  placeholder=" Confirm New Password"
                  editable
                  maxLength={40}
                />
              </View>
            </View>
          </View>
          <View style={{}}>
            <Text style={{color: 'black', fontSize: 15,marginLeft:40}}>
              <IconFa name="checkbox-blank-outline" style={{fontSize: 20}} />
              Remember me
            </Text>
          </View>
          <TouchableOpacity>
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
                  fontSize: 20,
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
    margin: 20,
    fontSize: 25,
    paddingLeft: 10,
    marginTop: 30,
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
});
export default ResetPassword;
