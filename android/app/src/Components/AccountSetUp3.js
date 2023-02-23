import React, {useState} from 'react';
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
import {
  responsiveHeight as vh,
  responsiveWidth as vw,
  responsiveFontSize as vf,
} from 'react-native-responsive-dimensions';
import IconFa from 'react-native-vector-icons/MaterialCommunityIcons';
// import IconFa from 'react-native-vector-icons/MaterialIcons';
import Modal from 'react-native-modal';

const AccountSetUp3 = () => {
  const navigation = useNavigation();
  const onNextPressed14 = () => {
    navigation.navigate('SetUp2');
  };
  // const [isModalVisible, setModalVisible] = useState(false);

  // const toggleModal = () => {
  //   setModalVisible(!isModalVisible);
  // };
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{padding: 20}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('AccountSetUp2');
              }}>
              <IconFa
                name="arrow-left"
                style={{fontSize: 25, color: '#fe5e75', marginRight: 20}}
              />
            </TouchableOpacity>

            <Text style={{color: 'black', fontSize: 25}}>Ideal Match</Text>
          </View>
          <View>
            <Text style={{fontSize: 18, color: 'black', marginTop: 20}}>
              What are you hoping to find on the DatingApp?
            </Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <View style={styles.body1}>
              <Text
                style={{
                  textAlign: 'center',
                  color: '#fe5e75',
                  fontSize: 18,
                }}>
                <View
                  style={{
                    backgroundColor: '#FFDBE9',
                    width: 60,
                    height: 60,
                    borderRadius: 50,
                  }}>
                  <IconFa
                    name="heart"
                    style={{
                      fontSize: 30,
                      marginTop: 15,
                      color: '#fe5e75',
                      marginLeft: 15,
                    }}
                  />
                </View>
              </Text>
              <Text style={{fontSize: 20, marginTop: 10, color: 'black'}}>
                Love
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
                    backgroundColor: '#FFDBE9',
                    width: 60,
                    height: 60,
                    borderRadius: 50,
                  }}>
                  <IconFa
                    name="account-multiple"
                    style={{
                      fontSize: 30,
                      marginTop: 15,
                      color: '#fe5e75',
                      marginLeft: 15,
                    }}
                  />
                </View>
              </Text>
              <Text style={{fontSize: 20, marginTop: 10, color: 'black'}}>
                Friends
              </Text>
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
                    backgroundColor: '#FFDBE9',
                    width: 60,
                    height: 60,
                    borderRadius: 50,
                  }}>
                  <IconFa
                    name="bird"
                    style={{
                      fontSize: 30,
                      marginTop: 15,
                      color: '#fe5e75',
                      marginLeft: 15,
                    }}
                  />
                </View>
              </Text>
              <Text style={{fontSize: 20, marginTop: 10, color: 'black'}}>
                Fling
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
                    backgroundColor: '#FFDBE9',
                    width: 60,
                    height: 60,
                    borderRadius: 50,
                  }}>
                  <IconFa
                    name="home-city"
                    style={{
                      fontSize: 30,
                      marginTop: 15,
                      color: '#fe5e75',
                      marginLeft: 15,
                    }}
                  />
                </View>
              </Text>
              <Text style={{fontSize: 20, marginTop: 10, color: 'black'}}>
                Business
              </Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={onNextPressed14}
            style={{
              backgroundColor: '#fe5e75',
              height: 50,
              margin: 20,
              borderRadius: 30,
              marginTop: 150,
            }}>
            <Text
              style={{
                textAlign: 'center',
                marginTop: 12,
                color: 'white',
                fontSize: 20,
              }}>
              Next
            </Text>
          </TouchableOpacity>
          {/* <Modal
            onBackdropPress={() => setModalVisible(false)}
            onBackButtonPress={() => setModalVisible(false)}
            isVisible={isModalVisible}
            swipeDirection="down"
            onSwipeComplete={toggleModal}
            animationIn="bounceInUp"
            // animationOut="bounceOutDown"
            animationInTiming={900}
            animationOutTiming={500}
            backdropTransitionInTiming={900}
            backdropTransitionOutTiming={500}
            style={styles.modal}>
            <View style={styles.modalContent}>
              <View style={styles.center}>
                <View style={styles.barIcon} />
                <View
                  style={{
                    backgroundColor: 'white',
                    height: vh(55),
                    width: vw(90),
                    borderRadius: 20,
                  }}>
                  <Image
                    source={{
                      uri: 'https://i.dlpng.com/static/png/6509551_preview.png',
                    }}
                    style={{
                      height: vh(15),
                      width: vw(30),
                      borderRadius: 100,
                      marginTop: 40,
                      alignSelf: 'center',
                    }}
                  />
                  <Text
                    style={{
                      textAlign: 'center',
                      marginTop: 30,
                      fontSize: vf(3),
                      color: '#fe5e75',
                      fontWeight: '700',
                    }}>
                    Great!
                  </Text>
                  <Text
                    style={{
                      textAlign: 'center',
                      marginTop: 30,
                      fontSize: vf(2.5),
                      color: '#fe5e75',
                    }}>
                    Your account has been created successfully
                  </Text>
                  <View
                    style={{
                      backgroundColor: '#fe5e75',
                      height: 50,
                      margin: 20,
                      borderRadius: 30,
                      marginTop: 40,
                    }}>
                    <Text
                      style={{
                        textAlign: 'center',
                        marginTop: 12,
                        color: 'white',
                        fontSize: 20,
                      }}
                      onPress={onNextPressed14}>
                      Go to Home
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </Modal> */}
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
    paddingLeft: 30,
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
    height: vh(20),
    width: vw(40),
    borderWidth: 2,
    borderRadius: 20,
    borderColor: '#fe5e75',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  body: {
    fontSize: 15,
    height: vh(20),
    width: vw(40),
    borderWidth: 2,
    borderRadius: 20,
    borderColor: '#D9DDDF',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  body2: {
    color: 'black',
    fontSize: 15,
    height: 50,
    width: vh(15),
    backgroundColor: '#fe5e75',
    borderRadius: 30,
    borderColor: '#fe5e75',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
});
export default AccountSetUp3;
