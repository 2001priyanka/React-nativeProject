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

const SetUp2 = () => {
  const navigation = useNavigation();
  const onNextPressed4 = () => {
    navigation.navigate('HomePage1');
  };
  const onNextPressed9 = () => {
    navigation.navigate('HomeScreens');
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <View>
            <Image
              source={{
                uri: 'https://i.dlpng.com/static/png/6509551_preview.png',
              }}
              style={{
                height: vh(60),
                width: vw(80),
                borderRadius: 10,
                alignSelf: 'center',
              }}
            />
          </View>
          <View>
            <Text
              style={{textAlign: 'center', fontSize: vf(4), color: '#fe5e75'}}>
              Congratulations!
            </Text>
          </View>
          <View>
            <Text
              style={{
                textAlign: 'center',
                fontSize: vf(3),
                marginTop: 20,
                color: 'black',
              }}>
              Your account is ready to use
            </Text>
          </View>
          <TouchableOpacity
            onPress={onNextPressed9}
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
                marginTop: vf(1),
                color: 'white',
                fontSize: 20,
              }}>
              Go to HomePage
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({});
export default SetUp2;
