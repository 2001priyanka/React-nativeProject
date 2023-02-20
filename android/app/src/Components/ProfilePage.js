import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Button, StatusBar, StyleSheet, Text, View, Image} from 'react-native';
import Modal from 'react-native-modal';
import {Icon, Input} from 'react-native-elements';
import {useSelector} from 'react-redux';
import {
  responsiveHeight as vh,
  responsiveWidth as vw,
  responsiveFontSize as vf,
} from 'react-native-responsive-dimensions';
import IconFa from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { API_URL } from '../../../../Config';
import RangeSlider from 'react-native-range-slider';


function ModalTester() {
  
  // const [userData, setUsersData] = useState({
  //   name: '',
  //   email: '',
  //   address1: '',
  //   mobile: '',
  //   gender:'',
  //   age:'',
  //   intrest:'',
  //   about:'',
  // });
  // const token = useSelector(reduxState => reduxState?.signin?.user?.accessToken)

  // const getUsersData = async()=>{
  //   if(token){
  //     try {
  //       const res = await axios({
  //         url: API_URL + '/user/user/getProfile',
  //         method: 'GET',
  //         Headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });
  //       if(res){
  //         console.log('users data in edit profile', res?.data?.user);
  //         setUsersData(res?.data?.user);
  //       }
  //     } catch (error) {
  //       console.log('profile data error', error)
  //     }
  //   }
  // };

  // const updateProfile = async () =>{
  //   if(token){
  //     try{
  //       const res = await axios({
  //         url:API_URL + 
  //       })
  //     }
  //   }
  // }
  // useEffect(()=>{
  //   getUsersData();
  // },[token]);
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
  const onNextPressed20 = () => {
    navigation.navigate('HomeScreens');
  };
  const onNextPressed21 = () => {
    navigation.navigate('PhotoScreen');
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
                style={{fontSize: vf(4), color: '#fe5e75'}}
              />
            </View>
            <View style={{paddingRight: 120}}>
              <Text
                style={{fontSize: vf(2.5), paddingLeft: 10, color: 'black'}}>
                Profile
              </Text>
            </View>
          </View>
          <View style={styles.uppersection2}>
            <View
              style={{
                borderRadius: 50,
              }}>
              <IconFa
                name="playlist-edit"
                style={{
                  fontSize: 30,
                  color: '#fe5e75',
                }}
              />
            </View>
            <View
              style={{
                height: vh(5),
                borderRadius: 50,
              }}>
              <IconFa
                name="dots-vertical"
                style={{
                  paddingLeft: 10,
                  paddingRight: 10,
                  fontSize: 30,
                  color: '#fe5e75',
                }}
              />
            </View>
          </View>
        </View>
        <View style={{alignSelf: 'center'}}>
          <View>
            <Image
              source={{
                uri: 'https://6.vikiplatform.com/image/f39b70cc709449058542b107d493cff7.jpg?x=b&a=0x0&s=460x268&e=t&f=t&cb=1',
              }}
              style={{
                height: vh(15),
                width: vw(30),
                borderRadius: 100,
                marginTop: 20,
                alignSelf: 'center',
              }}
            />
          </View>
          <View
            style={{
              backgroundColor: '#fe5e75',
              position: 'absolute',
              justifyContent: 'center',
              alignSelf: 'center',
              bottom: 0,
              right: 0,
              width: vw(6.5),
              height: vh(3.5),
              borderRadius: 10,
              color: 'white',
              paddingLeft: 3,
            }}>
            <IconFa
              name="square-edit-outline"
              style={{fontSize: vf(2.5), color: 'white'}}
              onPress={onNextPressed21}
            />
          </View>
        </View>
        <View>
          <Text
            style={{
              textAlign: 'center',
              fontSize: vf(2.5),
              color: 'black',
              marginTop: 10,
            }}>
            Adam Smith
          </Text>
        </View>
        <View style={{margin: 20}}>
          <View style={styles.uppersection1}>
            <View
              style={{
                backgroundColor: '#FFDBE9',
                width: vw(10),
                height: vh(5),
                borderRadius: 50,
                justifyContent: 'center',
              }}>
              <IconFa
                name="account"
                style={{
                  fontSize: vf(2.5),
                  color: '#fe5e75',
                  marginLeft: 10,
                }}
              />
            </View>
            <View>
              <Text
                style={{
                  paddingRight: 170,
                  fontSize: 18,
                  color: 'black',
                  marginTop: 4,
                }}
                onPress={onNextPressed16}>
                Edit Profile
              </Text>
            </View>
            <View>
              <IconFa
                name="chevron-right"
                style={{fontSize: vf(2.5), color: '#fe5e75'}}
              />
            </View>
          </View>
          <View style={styles.uppersection1}>
            <View
              style={{
                backgroundColor: '#FFDBE9',
                width: vw(10),
                height: vh(5),
                borderRadius: 50,
                justifyContent: 'center',
              }}>
              <IconFa
                name="bell"
                style={{
                  fontSize: vf(2.5),
                  color: '#fe5e75',
                  marginLeft: 10,
                }}
              />
            </View>
            <View>
              <Text
                style={{
                  paddingRight: 170,
                  fontSize: 18,
                  color: 'black',
                  marginTop: 4,
                }}
                onPress={onNextPressed17}>
                Notification
              </Text>
            </View>
            <View>
              <IconFa
                name="chevron-right"
                style={{fontSize: vf(2.5), color: '#fe5e75'}}
              />
            </View>
          </View>
          <View style={styles.uppersection1}>
            <View
              style={{
                backgroundColor: '#FFDBE9',
                width: vw(10),
                height: vh(5),
                borderRadius: 50,
                justifyContent: 'center',
              }}>
              <IconFa
                name="lock"
                style={{
                  fontSize: vf(2.5),
                  color: '#fe5e75',
                  marginLeft: 10,
                }}
              />
            </View>
            <View>
              <Text
                style={{
                  paddingRight: 190,
                  fontSize: 18,
                  color: 'black',
                  marginTop: 4,
                }}
                onPress={onNextPressed18}>
                Security
              </Text>
            </View>
            <View>
              <IconFa
                name="chevron-right"
                style={{fontSize: vf(2.5), color: '#fe5e75'}}
              />
            </View>
          </View>
          <View style={styles.uppersection1}>
            <View
              style={{
                backgroundColor: '#FFDBE9',
                width: vw(10),
                height: vh(5),
                borderRadius: 50,
                justifyContent: 'center',
              }}>
              <IconFa
                name="eye"
                style={{
                  fontSize: vf(2.5),
                  color: '#fe5e75',
                  marginLeft: 10,
                }}
              />
            </View>
            <View>
              <Text
                style={{
                  paddingRight: 140,
                  fontSize: 18,
                  color: 'black',
                  marginTop: 4,
                }}>
                Dark Mode
              </Text>
            </View>
            <View>
              <IconFa name="toggle-switch-off" style={{fontSize: vf(6)}} />
            </View>
          </View>
          <View style={styles.uppersection1}>
            <View
              style={{
                backgroundColor: '#FFDBE9',
                width: vw(10),
                height: vh(5),
                borderRadius: 50,
                justifyContent: 'center',
              }}>
              <IconFa
                name="account-multiple"
                style={{
                  fontSize: vf(2.5),
                  color: '#fe5e75',
                  marginLeft: 10,
                }}
              />
            </View>
            <View>
              <Text
                style={{
                  paddingRight: 145,
                  fontSize: 18,
                  color: 'black',
                  marginTop: 4,
                }}
                onPress={onNextPressed19}>
                Invite Friends
              </Text>
            </View>
            <View>
              <IconFa
                name="chevron-right"
                style={{fontSize: vf(2.5), color: '#fe5e75'}}
              />
            </View>
          </View>
          <View style={styles.uppersection1}>
            <View
              style={{
                backgroundColor: '#FFDBE9',
                width: vw(10),
                height: vh(5),
                borderRadius: 50,
                justifyContent: 'center',
                alignSelf: 'center',
              }}>
              <IconFa
                name="logout"
                style={{
                  fontSize: vf(2.5),
                  color: '#fe5e75',
                  marginLeft: 10,
                }}
              />
            </View>
            <View>
              <Text
                style={{
                  paddingRight: 225,
                  fontSize: 18,
                  color: 'black',
                  marginTop: 8,
                }}
                onPress={toggleModal}>
                Logout
              </Text>
            </View>
          </View>
          <View style={styles.uppersection}>
            <TouchableOpacity>
              <View>
                <IconFa
                  name="home"
                  style={{fontSize: 25, color: '#fe5e75'}}
                  onPress={onNextPressed20}
                />
              </View>
            </TouchableOpacity>
            <View>
              <IconFa name="map" style={{fontSize: 25, color: '#fe5e75'}} />
            </View>
            <View>
              <IconFa name="heart" style={{fontSize: 25, color: '#fe5e75'}} />
            </View>
            <View>
              <IconFa
                name="message-bulleted"
                style={{fontSize: 25, color: '#fe5e75'}}
              />
            </View>
            <View>
              <IconFa name="account" style={{fontSize: 25, color: '#fe5e75'}} />
            </View>
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
                style={{fontSize: 40, marginTop: 30, color: '#fe5e75'}}
              />
            </View>
            <Text style={styles.text}>Are you sure want to logout</Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={styles.body1}>
                <Text
                  style={{
                    textAlign: 'center',
                    color: '#fe5e75',
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
    fontSize:vf(2.5),
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
    backgroundColor: '#fe5e75',
    borderRadius: 30,
    borderColor: '#fe5e75',
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
    borderColor: '#fe5e75',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    // paddingLeft:20,
  },
  uppersection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    // paddingRight:20,
   
  },
  uppersection2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    paddingLeft:20,
    // margin:30,
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
