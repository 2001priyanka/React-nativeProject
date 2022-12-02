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

// const ResetPassword1 = () => {
//   const [text, onChangeText] = React.useState(null);
//   return (
//     <SafeAreaView>
//       <ScrollView>
//         <View>
//           <View>
//             <Text style={styles.upperSection}>
//               <IconFa
//                 name="arrow-left"
//                 style={{fontSize: 25, color: '#D56AAC'}}
//               />
//               <Text style={{paddingLeft: 10, color: 'black'}}>
//                 Reset Password
//               </Text>
//             </Text>
//           </View>
//           <View>
//             <Image
//               source={{
//                 uri: 'https://static.vecteezy.com/system/resources/thumbnails/002/047/029/small/forgot-the-password-concept-flat-illustration-vector.jpg',
//               }}
//               style={{
//                 height: 200,
//                 width: 200,
//                 borderRadius: 10,
//                 marginTop: 20,
//                 alignSelf: 'center',
//               }}
//             />
//           </View>
//           <View>
//             <Text style={{fontSize: 25, margin: 20, color: 'black'}}>
//               Create a new password
//             </Text>
//             <View style={styles.input}>
//               <View>
//                 <Text style={{color: 'black', fontSize: 15}}>New Password</Text>
//                 <TextInput
//                   style={styles.input2}
//                   placeholder="*********"
//                   editable
//                   maxLength={40}
//                 />
//               </View>

//               <View>
//                 <Text style={{color: 'black', fontSize: 15}}>
//                   Confirm New Password
//                 </Text>
//                 <TextInput
//                   style={styles.input2}
//                   placeholder="*********"
//                   editable
//                   maxLength={40}
//                 />
//               </View>
//             </View>
//           </View>
//           <View style={{}}>
//             <Text style={{color: 'black', fontSize: 15, textAlign: 'center'}}>
//               <IconFa
//                 name="checkbox-marked"
//                 style={{fontSize: 20, color: '#D56AAC'}}
//               />
//               Remember me
//             </Text>
//           </View>
//           <View
//             style={{
//               backgroundColor: '#D56AAC',
//               height: 50,
//               margin: 20,
//               borderRadius: 30,
//             }}>
//             <Text
//               style={{
//                 textAlign: 'center',
//                 // height: 40,
//                 // width: 100,
//                 marginTop: 12,
//                 color: 'white',
//                 fontSize: 20,
//               }}>
//               Save
//             </Text>
//           </View>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };
// const styles = StyleSheet.create({
//   upperSection: {
//     margin: 20,
//     fontSize: 25,
//     paddingLeft: 10,
//     marginTop: 30,
//   },

//   input: {
//     display: 'flex',
//     margin: 8,
//     padding: 10,
//   },
//   input2: {
//     height: 40,
//     margin: 12,
//     borderWidth: 2,
//     borderColor: '#D56AAC',
//     padding: 10,
//     borderRadius: 20,
//   },
// });
// export default ResetPassword1;
