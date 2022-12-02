// import React from 'react';

// import {
//   SafeAreaView,
//   ScrollView,
//   StyleSheet,
//   Text,
//   TextInput,
//   Image,
//   View,
//   TouchableOpacity,
// } from 'react-native';
// import IconFa from 'react-native-vector-icons/MaterialCommunityIcons';
// // import IconFa from 'react-native-vector-icons/MaterialIcons';

// const ProfilePage = () => {
//   const [text, onChangeText] = React.useState(null);
//   return (
//     <SafeAreaView>
//       <ScrollView>
//         <View>
//           <View style={styles.uppersection}>
//             <View style={styles.uppersection}>
//               <View>
//                 <IconFa
//                   name="heart-multiple"
//                   style={{fontSize: 30, color: '#D56AAC'}}
//                 />
//               </View>
//               <View>
//                 <Text style={{fontSize: 20, paddingLeft: 10, color: 'black'}}>
//                   Profile
//                 </Text>
//               </View>
//             </View>
//             <View style={styles.uppersection}>
//               <View
//                 style={{
//                   // backgroundColor: '#FFDBE9',
//                   width: 40,
//                   height: 40,
//                   borderRadius: 10,
//                   paddingLeft: 10,
//                 }}>
//                 <IconFa
//                   name="playlist-edit"
//                   style={{
//                     fontSize: 30,
//                     color: '#D56AAC',
//                   }}
//                 />
//               </View>
//               <View
//                 style={{
//                   // backgroundColor: '#FFDBE9',
//                   width: 40,
//                   height: 40,
//                   borderRadius: 10,
//                 }}>
//                 <IconFa
//                   name="dots-vertical"
//                   style={{
//                     fontSize: 25,
//                     // paddingLeft: 10,
//                     color: '#D56AAC',
//                     paddingLeft: 25,
//                   }}
//                 />
//               </View>
//             </View>
//           </View>
//           <View>
//             <Image
//               source={{
//                 uri: 'https://6.vikiplatform.com/image/f39b70cc709449058542b107d493cff7.jpg?x=b&a=0x0&s=460x268&e=t&f=t&cb=1',
//               }}
//               style={{
//                 height: 100,
//                 width: 100,
//                 borderRadius: 100,
//                 marginTop: 20,
//                 alignSelf: 'center',
//               }}
//             />

//             <Text style={{textAlign: 'center', fontSize: 20, color: 'black'}}>
//               Adam Smith
//             </Text>
//           </View>
//           <View style={styles.uppersection1}>
//             <View
//               style={{
//                 backgroundColor: '#FFDBE9',
//                 width: 40,
//                 height: 40,
//                 borderRadius: 50,
//               }}>
//               <IconFa
//                 name="account"
//                 style={{
//                   fontSize: 20,
//                   color: '#D56AAC',
//                   marginLeft: 10,
//                   marginTop: 5,
//                 }}
//               />
//             </View>
//             <View>
//               <Text style={{paddingRight: 200, fontSize: 18, color: 'black'}}>
//                 Edit Profile
//               </Text>
//             </View>
//             <View>
//               <IconFa
//                 name="chevron-right"
//                 style={{fontSize: 20, color: '#D56AAC'}}
//               />
//             </View>
//           </View>
//           <View style={styles.uppersection1}>
//             <View
//               style={{
//                 backgroundColor: '#FFDBE9',
//                 width: 40,
//                 height: 40,
//                 borderRadius: 50,
//               }}>
//               <IconFa
//                 name="bell"
//                 style={{
//                   fontSize: 20,
//                   color: '#D56AAC',
//                   marginLeft: 10,
//                   marginTop: 5,
//                 }}
//               />
//             </View>
//             <View>
//               <Text style={{paddingRight: 200, fontSize: 18, color: 'black'}}>
//                 Notification
//               </Text>
//             </View>
//             <View>
//               <IconFa
//                 name="chevron-right"
//                 style={{fontSize: 20, color: '#D56AAC'}}
//               />
//             </View>
//           </View>
//           <View style={styles.uppersection1}>
//             <View
//               style={{
//                 backgroundColor: '#FFDBE9',
//                 width: 40,
//                 height: 40,
//                 borderRadius: 50,
//               }}>
//               <IconFa
//                 name="lock"
//                 style={{
//                   fontSize: 20,
//                   color: '#D56AAC',
//                   marginLeft: 10,
//                   marginTop: 5,
//                 }}
//               />
//             </View>
//             <View>
//               <Text style={{paddingRight: 200, fontSize: 18, color: 'black'}}>
//                 Security
//               </Text>
//             </View>
//             <View>
//               <IconFa
//                 name="chevron-right"
//                 style={{fontSize: 20, color: '#D56AAC'}}
//               />
//             </View>
//           </View>
//           <View style={styles.uppersection1}>
//             <View
//               style={{
//                 backgroundColor: '#FFDBE9',
//                 width: 40,
//                 height: 40,
//                 borderRadius: 50,
//               }}>
//               <IconFa
//                 name="eye"
//                 style={{
//                   fontSize: 20,
//                   color: '#D56AAC',
//                   marginLeft: 10,
//                   marginTop: 5,
//                 }}
//               />
//             </View>
//             <View>
//               <Text style={{paddingRight: 150, fontSize: 18, color: 'black'}}>
//                 Dark Mode
//               </Text>
//             </View>
//             <View>
//               <IconFa
//                 name="toggle-switch-off"
//                 style={{fontSize: 20, fontSize: 50}}
//               />
//             </View>
//           </View>
//           <View style={styles.uppersection1}>
//             <View
//               style={{
//                 backgroundColor: '#FFDBE9',
//                 width: 40,
//                 height: 40,
//                 borderRadius: 50,
//               }}>
//               <IconFa
//                 name="account-multiple"
//                 style={{
//                   fontSize: 20,
//                   color: '#D56AAC',
//                   marginLeft: 10,
//                   marginTop: 5,
//                 }}
//               />
//             </View>
//             <View>
//               <Text style={{paddingRight: 150, fontSize: 18, color: 'black'}}>
//                 Invite Friends
//               </Text>
//             </View>
//             <View>
//               <IconFa
//                 name="chevron-right"
//                 style={{fontSize: 20, color: '#D56AAC'}}
//               />
//             </View>
//           </View>
//           <View style={styles.uppersection1}>
//             <View
//               style={{
//                 backgroundColor: '#FFDBE9',
//                 width: 40,
//                 height: 40,
//                 borderRadius: 50,
//               }}>
//               <IconFa
//                 name="logout"
//                 style={{
//                   fontSize: 20,
//                   color: '#D56AAC',
//                   marginLeft: 10,
//                   marginTop: 5,
//                 }}
//               />
//             </View>
//             <View>
//               <Text style={{paddingRight: 210, fontSize: 18, color: 'black'}}>
//                 Logout
//               </Text>
//             </View>
//           </View>
//           <View style={styles.uppersection}>
//             <View>
//               <IconFa name="home" style={{fontSize: 25, color: '#D56AAC'}} />
//             </View>
//             <View>
//               <IconFa name="map" style={{fontSize: 25, color: '#D56AAC'}} />
//             </View>
//             <View>
//               <IconFa name="heart" style={{fontSize: 25, color: '#D56AAC'}} />
//             </View>
//             <View>
//               <IconFa
//                 name="message-bulleted"
//                 style={{fontSize: 25, color: '#D56AAC'}}
//               />
//             </View>
//             <View>
//               <IconFa name="account" style={{fontSize: 25, color: '#D56AAC'}} />
//             </View>
//           </View>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };
// const styles = StyleSheet.create({
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
// export default ProfilePage;
