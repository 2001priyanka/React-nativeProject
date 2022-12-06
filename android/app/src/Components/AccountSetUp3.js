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
import {
  responsiveHeight as vh,
  responsiveWidth as vw,
  responsiveFontSize as vf,
} from 'react-native-responsive-dimensions';
import IconFa from 'react-native-vector-icons/MaterialCommunityIcons';
// import IconFa from 'react-native-vector-icons/MaterialIcons';

const AccountSetUp3 = () => {
 const navigation = useNavigation();
 const onNextPressed14 = () => {
   navigation.navigate('ProfilePage');
 };
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{padding: 20}}>
          <View>
            <Text style={styles.uppersection}>
              <IconFa
                name="arrow-left"
                style={{fontSize: 25, color: '#D56AAC'}}
              />
              <Text style={{color: 'black', fontSize: 25}}>Ideal Match</Text>
            </Text>
          </View>
          <View>
            <Text style={{fontSize: 18, color: 'black',marginTop:20}}>
              What are you hoping to find on the DatingApp?
            </Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <View style={styles.body1}>
              <Text
                style={{
                  textAlign: 'center',
                  color: '#D56AAC',
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
                      color: '#D56AAC',
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
                  color: '#D56AAC',
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
                      color: '#D56AAC',
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
                  color: '#D56AAC',
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
                      color: '#D56AAC',
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
                  color: '#D56AAC',
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
                      color: '#D56AAC',
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
          <View
            style={{
              backgroundColor: '#D56AAC',
              height: 50,
              margin: 20,
              borderRadius: 30,
              marginTop:150,
            }}>
            <Text
              style={{
                textAlign: 'center',
                marginTop: 12,
                color: 'white',
                fontSize: 20,
              }} onPress={onNextPressed14}>
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
    paddingLeft: 30,
    padding: 5,
  },
  input2: {
    height: 40,
    margin: 12,
    borderWidth: 1.4,
    borderColor: '#D56AAC',
    padding: 10,
    borderRadius: 20,
  },
  input1: {
    height: 40,
    margin: 12,
    borderWidth: 1.5,
    borderColor: '#D56AAC',
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
    borderColor: '#D56AAC',
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
});
export default AccountSetUp3;



// import React, {useState} from 'react';
// import {Button, StatusBar, StyleSheet, Text, View, Image} from 'react-native';
// import Modal from 'react-native-modal';
// import {
//   responsiveHeight as vh,
//   responsiveWidth as vw,
//   responsiveFontSize as vf,
// } from 'react-native-responsive-dimensions';
// import {useNavigation} from '@react-navigation/native';
// import IconFa from 'react-native-vector-icons/MaterialCommunityIcons';
// import {TouchableOpacity} from 'react-native-gesture-handler';

// function ModalTester() {
//   const navigation = useNavigation();
//   const onNextPressed15 = () => {
//     navigation.navigate('SignIn1');
//   };
//   const [isModalVisible, setModalVisible] = useState(false);

//   const toggleModal = () => {
//     setModalVisible(!isModalVisible);
//   };

//   return (
//     <View style={styles.flexView}>
//       <StatusBar />
//       <View>
//         <View style={styles.uppersection}>
//           <View style={styles.uppersection}>
//             <View>
//               <IconFa
//                 name="heart-multiple"
//                 style={{fontSize: 30, color: '#D56AAC'}}
//               />
//             </View>
//             <View>
//               <Text style={{fontSize: 20, paddingLeft: 10, color: 'black'}}>
//                 Profile
//               </Text>
//             </View>
//           </View>
//           <View style={styles.uppersection}>
//             <View
//               style={{
//                 // backgroundColor: '#FFDBE9',
//                 width: 40,
//                 height: 40,
//                 borderRadius: 10,
//                 paddingLeft: 10,
//               }}>
//               <IconFa
//                 name="playlist-edit"
//                 style={{
//                   fontSize: 30,
//                   color: '#D56AAC',
//                 }}
//               />
//             </View>
//             <View
//               style={{
//                 // backgroundColor: '#FFDBE9',
//                 width: 40,
//                 height: 40,
//                 borderRadius: 10,
//               }}>
//               <IconFa
//                 name="dots-vertical"
//                 style={{
//                   fontSize: 25,
//                   // paddingLeft: 10,
//                   color: '#D56AAC',
//                   paddingLeft: 25,
//                 }}
//               />
//             </View>
//           </View>
//         </View>
//         <View>
//           <Image
//             source={{
//               uri: 'https://6.vikiplatform.com/image/f39b70cc709449058542b107d493cff7.jpg?x=b&a=0x0&s=460x268&e=t&f=t&cb=1',
//             }}
//             style={{
//               height: 100,
//               width: 100,
//               borderRadius: 100,
//               marginTop: 20,
//               alignSelf: 'center',
//             }}
//           />

//           <Text style={{textAlign: 'center', fontSize: 20, color: 'black'}}>
//             Adam Smith
//           </Text>
//         </View>
//         <View style={styles.uppersection1}>
//           <View
//             style={{
//               backgroundColor: '#FFDBE9',
//               width: 40,
//               height: 40,
//               borderRadius: 50,
//             }}>
//             <IconFa
//               name="account"
//               style={{
//                 fontSize: 20,
//                 color: '#D56AAC',
//                 marginLeft: 10,
//                 marginTop: 5,
//               }}
//             />
//           </View>
//           <View>
//             <Text style={{paddingRight: 200, fontSize: 18, color: 'black'}}>
//               Edit Profile
//             </Text>
//           </View>
//           <View>
//             <IconFa
//               name="chevron-right"
//               style={{fontSize: 20, color: '#D56AAC'}}
//             />
//           </View>
//         </View>
//         <View style={styles.uppersection1}>
//           <View
//             style={{
//               backgroundColor: '#FFDBE9',
//               width: 40,
//               height: 40,
//               borderRadius: 50,
//             }}>
//             <IconFa
//               name="bell"
//               style={{
//                 fontSize: 20,
//                 color: '#D56AAC',
//                 marginLeft: 10,
//                 marginTop: 5,
//               }}
//             />
//           </View>
//           <View>
//             <Text style={{paddingRight: 200, fontSize: 18, color: 'black'}}>
//               Notification
//             </Text>
//           </View>
//           <View>
//             <IconFa
//               name="chevron-right"
//               style={{fontSize: 20, color: '#D56AAC'}}
//             />
//           </View>
//         </View>
//         <View style={styles.uppersection1}>
//           <View
//             style={{
//               backgroundColor: '#FFDBE9',
//               width: 40,
//               height: 40,
//               borderRadius: 50,
//             }}>
//             <IconFa
//               name="lock"
//               style={{
//                 fontSize: 20,
//                 color: '#D56AAC',
//                 marginLeft: 10,
//                 marginTop: 5,
//               }}
//             />
//           </View>
//           <View>
//             <Text style={{paddingRight: 200, fontSize: 18, color: 'black'}}>
//               Security
//             </Text>
//           </View>
//           <View>
//             <IconFa
//               name="chevron-right"
//               style={{fontSize: 20, color: '#D56AAC'}}
//             />
//           </View>
//         </View>
//         <View style={styles.uppersection1}>
//           <View
//             style={{
//               backgroundColor: '#FFDBE9',
//               width: 40,
//               height: 40,
//               borderRadius: 50,
//             }}>
//             <IconFa
//               name="eye"
//               style={{
//                 fontSize: 20,
//                 color: '#D56AAC',
//                 marginLeft: 10,
//                 marginTop: 5,
//               }}
//             />
//           </View>
//           <View>
//             <Text style={{paddingRight: 150, fontSize: 18, color: 'black'}}>
//               Dark Mode
//             </Text>
//           </View>
//           <View>
//             <IconFa
//               name="toggle-switch-off"
//               style={{fontSize: 20, fontSize: 50}}
//             />
//           </View>
//         </View>
//         <View style={styles.uppersection1}>
//           <View
//             style={{
//               backgroundColor: '#FFDBE9',
//               width: 40,
//               height: 40,
//               borderRadius: 50,
//             }}>
//             <IconFa
//               name="account-multiple"
//               style={{
//                 fontSize: 20,
//                 color: '#D56AAC',
//                 marginLeft: 10,
//                 marginTop: 5,
//               }}
//             />
//           </View>
//           <View>
//             <Text style={{paddingRight: 150, fontSize: 18, color: 'black'}}>
//               Invite Friends
//             </Text>
//           </View>
//           <View>
//             <IconFa
//               name="chevron-right"
//               style={{fontSize: 20, color: '#D56AAC'}}
//             />
//           </View>
//         </View>
//         <View style={styles.uppersection1}>
//           <View
//             style={{
//               backgroundColor: '#FFDBE9',
//               width: 40,
//               height: 40,
//               borderRadius: 50,
//             }}>
//             <IconFa
//               name="logout"
//               style={{
//                 fontSize: 20,
//                 color: '#D56AAC',
//                 marginLeft: 10,
//                 marginTop: 5,
//               }}
//             />
//           </View>
//           <View>
//             <Text
//               style={{paddingRight: 210, fontSize: 18, color: 'black'}}
//               onPress={toggleModal}>
//               Logout
//             </Text>
//           </View>
//         </View>
//         <View style={styles.uppersection}>
//           <View>
//             <IconFa name="home" style={{fontSize: 25, color: '#D56AAC'}} />
//           </View>
//           <View>
//             <IconFa name="map" style={{fontSize: 25, color: '#D56AAC'}} />
//           </View>
//           <View>
//             <IconFa name="heart" style={{fontSize: 25, color: '#D56AAC'}} />
//           </View>
//           <View>
//             <IconFa
//               name="message-bulleted"
//               style={{fontSize: 25, color: '#D56AAC'}}
//             />
//           </View>
//           <View>
//             <IconFa name="account" style={{fontSize: 25, color: '#D56AAC'}} />
//           </View>
//         </View>
//       </View>

//       <Modal
//         onBackdropPress={() => setModalVisible(false)}
//         onBackButtonPress={() => setModalVisible(false)}
//         isVisible={isModalVisible}
//         swipeDirection="down"
//         onSwipeComplete={toggleModal}
//         animationIn="bounceInUp"
//         // animationOut="bounceOutDown"
//         animationInTiming={900}
//         animationOutTiming={500}
//         backdropTransitionInTiming={900}
//         backdropTransitionOutTiming={500}
//         style={styles.modal}>
//         <View style={styles.modalContent}>
//           <View style={styles.center}>
//             <View style={styles.barIcon} />
//             <View>
//               <IconFa
//                 name="logout"
//                 style={{fontSize: 40, marginTop: 30, color: '#D56AAC'}}
//               />
//             </View>
//             <Text style={styles.text}>Are you sure want to logout</Text>
//             <View
//               style={{flexDirection: 'row', justifyContent: 'space-around'}}>
//               <View style={styles.body1}>
//                 <Text
//                   style={{
//                     textAlign: 'center',
//                     color: '#D56AAC',
//                   }}>
//                   Cancel
//                 </Text>
//               </View>
//               <View style={styles.body}>
//                 <TouchableOpacity>
//                   <Text
//                     style={{
//                       textAlign: 'center',
//                       color: 'white',
//                       fontSize: 18,
//                     }}
//                     onPress={onNextPressed15}>
//                     Yes, Logout
//                   </Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// }

// export default ModalTester;

// const styles = StyleSheet.create({
//   flexView: {
//     flex: 1,
//     backgroundColor: 'white',
//   },
//   modal: {
//     justifyContent: 'flex-end',
//     margin: 0,
//   },
//   modalContent: {
//     backgroundColor: 'white',
//     paddingTop: 12,
//     paddingHorizontal: 12,
//     borderTopRightRadius: 20,
//     borderTopLeftRadius: 20,
//     minHeight: 200,
//     paddingBottom: 20,
//   },
//   center: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   barIcon: {
//     width: 60,
//     height: 5,
//     backgroundColor: '#bbb',
//     borderRadius: 3,
//   },
//   text: {
//     color: 'black',
//     fontSize: 20,
//     marginTop: 30,
//   },
//   btnContainer: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: 500,
//   },
//   body: {
//     color: 'black',
//     fontSize: 15,
//     height: 50,
//     width: vh(15),
//     backgroundColor: '#D56AAC',
//     borderRadius: 30,
//     borderColor: '#D56AAC',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 30,
//   },
//   body1: {
//     fontSize: 15,
//     height: 50,
//     width: vh(15),
//     borderWidth: 2,
//     borderRadius: 30,
//     borderColor: '#D56AAC',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 30,
//   },
//   uppersection: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginTop: 20,
//   },
//   uppersection1: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginTop: 20,
//     borderBottomWidth: 0.5,
//     height: 50,
//     margin: 5,
//   },
// });
