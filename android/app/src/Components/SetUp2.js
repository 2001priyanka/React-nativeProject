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
          <View style={{marginTop:vh(40)}}>
            <Text
              style={{textAlign: 'center', fontSize: vf(4), color: '#fe5e75',fontWeight:'600'}}>
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
              flexDirection:'row',
              justifyContent:'center',
              alignItems:'center',
              alignSelf:'center',
              backgroundColor: '#fe5e75',
              height:vh(7),
              width:vw(80),
              borderRadius: 30,
              marginTop:vh(5)
            }}>
            <Text
              style={{
                color: 'white',
                fontSize:vf(2.7),
                fontWeight:'600'
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
