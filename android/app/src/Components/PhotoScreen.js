import React, { useState } from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  Image,
  View,
 StatusBar,
  TouchableOpacity,
} from 'react-native';
import {
  responsiveHeight as vh,
  responsiveWidth as vw,
  responsiveFontSize as vf,
} from 'react-native-responsive-dimensions';
import IconFa from 'react-native-vector-icons/MaterialCommunityIcons';
// import IconFa from 'react-native-vector-icons/MaterialIcons';
import Modal from 'react-native-modal';

const PhotoScreen = () => {
  const navigation = useNavigation();
  const onNextPressed14 = () => {
    navigation.navigate('AccountSetUp2');
  };

  
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{padding: 20}}>
          <StatusBar />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 20,
            }}>
            <Text style={styles.uppersection}>
              <IconFa
                name="arrow-left"
                style={{fontSize: 25, color: '#fe5e75', paddingRight: 10}}
              />
            </Text>
            <Text style={{color: 'black', fontSize: 25, paddingRight: 50}}>
              Add Your Best Photo
            </Text>
          </View>
          <View>
            <Text style={{fontSize: 18, color: 'black', marginTop: 20}}>
              Add your best photos to get a higher amount of daily matches
            </Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <View style={styles.body1}>
              <View>
                <Image
                  source={{
                    uri: 'https://6.vikiplatform.com/image/f39b70cc709449058542b107d493cff7.jpg?x=b&a=0x0&s=460x268&e=t&f=t&cb=1',
                  }}
                  style={{
                    height: vh(25),
                    width: vw(35),
                    borderRadius: 20,
                    marginTop: 20,
                    alignSelf: 'center',
                  }}
                />
              </View>
            </View>
            <View style={styles.body}>
              <Text
                style={{
                  textAlign: 'center',
                  color: '#fe5e75',
                  fontSize: 18,
                }}>
                <View
                  style={{
                    backgroundColor: '#fe5e75',
                    width: 60,
                    height: 60,
                    borderRadius: 50,
                  }}>
                  <IconFa
                    name="plus"
                    style={{
                      fontSize: 30,
                      marginTop: 15,
                      color: 'white',
                      marginLeft: 15,
                    }}
                  />
                </View>
              </Text>
              {/* <Text style={{fontSize: 20, marginTop: 10, color: 'black'}}>
                Fling
              </Text> */}
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <View style={styles.body}>
              <Text
                style={{
                  textAlign: 'center',
                  color: '#fe5e75',
                  fontSize: 18,
                }}>
                <View
                  style={{
                    backgroundColor: '#fe5e75',
                    width: 60,
                    height: 60,
                    borderRadius: 50,
                  }}>
                  <IconFa
                    name="plus"
                    style={{
                      fontSize: 30,
                      marginTop: 15,
                      color: 'white',
                      marginLeft: 15,
                    }}
                  />
                </View>
              </Text>
            </View>
            <View style={styles.body}>
              <Text
                style={{
                  textAlign: 'center',
                  color: '#fe5e75',
                  fontSize: 18,
                }}>
                <View
                  style={{
                    backgroundColor: '#fe5e75',
                    width: 60,
                    height: 60,
                    borderRadius: 50,
                  }}>
                  <IconFa
                    name="plus"
                    style={{
                      fontSize: 30,
                      marginTop: 15,
                      color: 'white',
                      marginLeft: 15,
                    }}
                  />
                </View>
              </Text>
              {/* <Text style={{fontSize: 20, marginTop: 10, color: 'black'}}>
                Business
              </Text> */}
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#fe5e75',
              height: 50,
              margin: 20,
              borderRadius: 30,
              marginTop: 80,
            }}>
            <Text
              style={{
                textAlign: 'center',
                marginTop: 12,
                color: 'white',
                fontSize: 20,
              }}
              onPress={onNextPressed14}>
              Next
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  uppersection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginTop: 10,
    // paddingLeft:80,
    padding: 5,
  },
  input2: {
    height: 40,
    margin: 12,
    borderWidth: 1.4,
    borderColor: '#fe5e75',
    padding: 10,
    borderRadius: 20,
  },
  input1: {
    height: 40,
    margin: 12,
    borderWidth: 1.5,
    borderColor: '#fe5e75',
    padding: 10,
    borderRadius: 20,
    width: 150,
  },
  body1: {
    fontSize: 15,
    height: vh(25),
    width: vw(40),
    // borderWidth: 2,
    borderRadius: 20,
    // borderColor: '#fe5e75',
    // flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  body: {
    fontSize: 15,
    height: vh(27),
    width: vw(40),
    borderWidth: 2,
    borderRadius: 20,
    // borderColor: '#D9DDDF',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    borderStyle: 'dashed',
    borderColor: '#fe5e75',
    backgroundColor: '#FFDBE9',
  },
});
export default PhotoScreen;

