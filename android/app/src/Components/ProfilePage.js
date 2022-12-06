
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Button, StatusBar, StyleSheet, Text, View, Image} from 'react-native';
import Modal from 'react-native-modal';
import {
  responsiveHeight as vh,
  responsiveWidth as vw,
  responsiveFontSize as vf,
} from 'react-native-responsive-dimensions';
import IconFa from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';

function ModalTester() {
   const navigation = useNavigation();
 const onNextPressed15 = () => {
   navigation.navigate('SignIn1');
 };
 const onNextPressed16 = () => {
   navigation.navigate('EditProfile');
 };
 const onNextPressed17 = () => {
   navigation.navigate('NotificationPage');
 };
 const onNextPressed18 = () => {
   navigation.navigate('SecurityPage');
 };
 const onNextPressed19 = () => {
   navigation.navigate('InvitePage');
 };
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.flexView}>
      <StatusBar />
      <View>
        <View style={styles.uppersection}>
          <View style={styles.uppersection}>
            <View>
              <IconFa
                name="heart-multiple"
                style={{fontSize: 30, color: '#D56AAC'}}
              />
            </View>
            <View>
              <Text style={{fontSize: 20, paddingLeft: 10, color: 'black'}}>
                Profile
              </Text>
            </View>
          </View>
          <View style={styles.uppersection}>
            <View
              style={{
                // backgroundColor: '#FFDBE9',
                width: 40,
                height: 40,
                borderRadius: 10,
                paddingLeft: 10,
              }}>
              <IconFa
                name="playlist-edit"
                style={{
                  fontSize: 30,
                  color: '#D56AAC',
                }}
              />
            </View>
            <View
              style={{
                // backgroundColor: '#FFDBE9',
                width: 40,
                height: 40,
                borderRadius: 10,
              }}>
              <IconFa
                name="dots-vertical"
                style={{
                  fontSize: 25,
                  // paddingLeft: 10,
                  color: '#D56AAC',
                  paddingLeft: 25,
                }}
              />
            </View>
          </View>
        </View>
        <View>
          <Image
            source={{
              uri: 'https://6.vikiplatform.com/image/f39b70cc709449058542b107d493cff7.jpg?x=b&a=0x0&s=460x268&e=t&f=t&cb=1',
            }}
            style={{
              height: 100,
              width: 100,
              borderRadius: 100,
              marginTop: 20,
              alignSelf: 'center',
            }}
          />

          <Text style={{textAlign: 'center', fontSize: 20, color: 'black'}}>
            Adam Smith
          </Text>
        </View>
        <View style={styles.uppersection1}>
          <View
            style={{
              backgroundColor: '#FFDBE9',
              width: 40,
              height: 40,
              borderRadius: 50,
            }}>
            <IconFa
              name="account"
              style={{
                fontSize: 20,
                color: '#D56AAC',
                marginLeft: 10,
                marginTop: 5,
              }}
            />
          </View>
          <View>
            <Text style={{paddingRight: 200, fontSize: 18, color: 'black'}} onPress={onNextPressed16}>
              Edit Profile
            </Text>
          </View>
          <View>
            <IconFa
              name="chevron-right"
              style={{fontSize: 20, color: '#D56AAC'}}
            />
          </View>
        </View>
        <View style={styles.uppersection1}>
          <View
            style={{
              backgroundColor: '#FFDBE9',
              width: 40,
              height: 40,
              borderRadius: 50,
            }}>
            <IconFa
              name="bell"
              style={{
                fontSize: 20,
                color: '#D56AAC',
                marginLeft: 10,
                marginTop: 5,
              }}
            />
          </View>
          <View>
            <Text style={{paddingRight: 200, fontSize: 18, color: 'black'}}onPress={onNextPressed17}>
              Notification
            </Text>
          </View>
          <View>
            <IconFa
              name="chevron-right"
              style={{fontSize: 20, color: '#D56AAC'}}
            />
          </View>
        </View>
        <View style={styles.uppersection1}>
          <View
            style={{
              backgroundColor: '#FFDBE9',
              width: 40,
              height: 40,
              borderRadius: 50,
            }}>
            <IconFa
              name="lock"
              style={{
                fontSize: 20,
                color: '#D56AAC',
                marginLeft: 10,
                marginTop: 5,
              }}
            />
          </View>
          <View>
            <Text style={{paddingRight: 200, fontSize: 18, color: 'black'}} onPress={onNextPressed18}>
              Security
            </Text>
          </View>
          <View>
            <IconFa
              name="chevron-right"
              style={{fontSize: 20, color: '#D56AAC'}}
            />
          </View>
        </View>
        <View style={styles.uppersection1}>
          <View
            style={{
              backgroundColor: '#FFDBE9',
              width: 40,
              height: 40,
              borderRadius: 50,
            }}>
            <IconFa
              name="eye"
              style={{
                fontSize: 20,
                color: '#D56AAC',
                marginLeft: 10,
                marginTop: 5,
              }}
            />
          </View>
          <View>
            <Text style={{paddingRight: 150, fontSize: 18, color: 'black'}}>
              Dark Mode
            </Text>
          </View>
          <View>
            <IconFa
              name="toggle-switch-off"
              style={{fontSize: 20, fontSize: 50}}
            />
          </View>
        </View>
        <View style={styles.uppersection1}>
          <View
            style={{
              backgroundColor: '#FFDBE9',
              width: 40,
              height: 40,
              borderRadius: 50,
            }}>
            <IconFa
              name="account-multiple"
              style={{
                fontSize: 20,
                color: '#D56AAC',
                marginLeft: 10,
                marginTop: 5,
              }}
            />
          </View>
          <View>
            <Text style={{paddingRight: 150, fontSize: 18, color: 'black'}} onPress={onNextPressed19}>
              Invite Friends
            </Text>
          </View>
          <View>
            <IconFa
              name="chevron-right"
              style={{fontSize: 20, color: '#D56AAC'}}
            />
          </View>
        </View>
        <View style={styles.uppersection1}>
          <View
            style={{
              backgroundColor: '#FFDBE9',
              width: 40,
              height: 40,
              borderRadius: 50,
            }}>
            <IconFa
              name="logout"
              style={{
                fontSize: 20,
                color: '#D56AAC',
                marginLeft: 10,
                marginTop: 5,
              }}
            />
          </View>
          <View>
            <Text
              style={{paddingRight: 210, fontSize: 18, color: 'black'}}
              onPress={toggleModal}>
              Logout
            </Text>
          </View>
        </View>
        <View style={styles.uppersection}>
          <View>
            <IconFa name="home" style={{fontSize: 25, color: '#D56AAC'}} />
          </View>
          <View>
            <IconFa name="map" style={{fontSize: 25, color: '#D56AAC'}} />
          </View>
          <View>
            <IconFa name="heart" style={{fontSize: 25, color: '#D56AAC'}} />
          </View>
          <View>
            <IconFa
              name="message-bulleted"
              style={{fontSize: 25, color: '#D56AAC'}}
            />
          </View>
          <View>
            <IconFa name="account" style={{fontSize: 25, color: '#D56AAC'}} />
          </View>
        </View>
      </View>

      <Modal
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
            <View>
              <IconFa
                name="logout"
                style={{fontSize: 40, marginTop: 30, color: '#D56AAC'}}
              />
            </View>
            <Text style={styles.text}>Are you sure want to logout</Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <View style={styles.body1}>
                <Text
                  style={{
                    textAlign: 'center',
                    color: '#D56AAC',
                  }}>
                  Cancel
                </Text>
              </View>
              <View style={styles.body}>
                <TouchableOpacity>
                  <Text
                    style={{
                      textAlign: 'center',
                      color: 'white',
                      fontSize: 18,
                    }}
                    onPress={onNextPressed15}>
                    Yes, Logout
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default ModalTester;

const styles = StyleSheet.create({
  flexView: {
    flex: 1,
    backgroundColor: 'white',
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    backgroundColor: 'white',
    paddingTop: 12,
    paddingHorizontal: 12,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    minHeight: 200,
    paddingBottom: 20,
  },
  center: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  barIcon: {
    width: 60,
    height: 5,
    backgroundColor: '#bbb',
    borderRadius: 3,
  },
  text: {
    color: 'black',
    fontSize: 20,
    marginTop: 30,
  },
  btnContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 500,
  },
  body: {
    color: 'black',
    fontSize: 15,
    height: 50,
    width: vh(15),
    backgroundColor: '#D56AAC',
    borderRadius: 30,
    borderColor: '#D56AAC',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  body1: {
    fontSize: 15,
    height: 50,
    width: vh(15),
    borderWidth: 2,
    borderRadius: 30,
    borderColor: '#D56AAC',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  uppersection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  uppersection1: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    borderBottomWidth: 0.5,
    height: 50,
    margin: 5,
  },
});
