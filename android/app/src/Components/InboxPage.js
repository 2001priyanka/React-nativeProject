// import React from 'react';

// import {
//   ScrollView,
//   StyleSheet,
//   Text,
//   TextInput,
//   Image,
//   View,
//   TouchableOpacity,
// } from 'react-native';
// import IconFa from 'react-native-vector-icons/MaterialCommunityIcons';
// import {SearchBar} from 'react-native-elements';
// import {SafeAreaView} from 'react-native-safe-area-context';
// // import IconFa from 'react-native-vector-icons/MaterialIcons';

// const InboxPage = () => {
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
//           <View
//             style={{
//               alignSelf: 'center',
//             }}>
//             <SearchBar
//               placeholder="Search "
//               // onChangeText={updateSearch}
//               // value={search}
//               // onPressIn={onNextPressed3}
//               lightTheme
//               platform="ios"
//               containerStyle={{
//                 borderRadius: 50,
//                 width: 350,
//                 height: 50,
//                 backgroundColor: '#dcdce1',
//               }}
//             />
//           </View>
//           <View style={styles.uppersection1}>
//             <View>
//               <Image
//                 source={{
//                   uri: 'https://6.vikiplatform.com/image/f39b70cc709449058542b107d493cff7.jpg?x=b&a=0x0&s=460x268&e=t&f=t&cb=1',
//                 }}
//                 style={{
//                   height: 70,
//                   width: 70,
//                   borderRadius: 40,
//                 }}
//               />
//             </View>
//             <View>
//               <Text style={{fontSize: 18, color: 'black', marginTop: 20}}>
//                 Brendan Foster
//               </Text>
//               <Text style={{fontSize: 15}}>Haha oh man</Text>
//             </View>
//             <View>
//               <Text
//                 style={{
//                   backgroundColor: '#D56AAC',
//                   textAlign: 'center',
//                   marginTop: 20,
//                   color: 'white',
//                   // fontSize: 18,
//                   borderWidth: 1.5,
//                   borderColor: '#D56AAC',
//                   height: 30,
//                   width: 30,
//                   borderRadius: 40,
//                 }}>
//                 2
//               </Text>
//               <Text style={{marginTop: 10, fontSize: 18}}>20.00</Text>
//             </View>
//           </View>
//           <View style={styles.uppersection1}>
//             <View>
//               <Image
//                 source={{
//                   uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNbPyNdsZ_77IshR1HUkl_r5ducV6WvbZSbiMMNgrBO5B1fHYjWvblMhWee_-Tj0qgjsw&usqp=CAU',
//                 }}
//                 style={{
//                   height: 70,
//                   width: 70,
//                   borderRadius: 40,
//                 }}
//               />
//             </View>
//             <View>
//               <Text style={{fontSize: 18, color: 'black', marginTop: 20}}>
//                 James Howard
//               </Text>
//               <Text style={{fontSize: 15}}>Haha that's terrifying</Text>
//             </View>
//             <View>
//               <Text
//                 style={{
//                   // backgroundColor: '#D56AAC',
//                   textAlign: 'center',
//                   marginTop: 30,
//                   // color: 'white',
//                   fontSize: 18,
//                   // borderWidth: 1.5,
//                   // borderColor: '#D56AAC',
//                   height: 30,
//                   width: 70,
//                   borderRadius: 15,
//                 }}>
//                 15.00
//               </Text>
//             </View>
//           </View>
//           <View style={styles.uppersection1}>
//             <View>
//               <Image
//                 source={{
//                   uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj5DqYagSZdlzTJ4t_cdcvacMgJMHmseEHCQ&usqp=CAU',
//                 }}
//                 style={{
//                   height: 70,
//                   width: 70,
//                   borderRadius: 40,
//                 }}
//               />
//             </View>
//             <View>
//               <Text style={{fontSize: 18, color: 'black', marginTop: 20}}>
//                 Nathalia Barber
//               </Text>
//               <Text style={{fontSize: 15}}>just ideas for next time</Text>
//             </View>
//             <View>
//               <Text
//                 style={{
//                   // backgroundColor: '#D56AAC',
//                   textAlign: 'center',
//                   marginTop: 30,
//                   // color: 'white',
//                   fontSize: 18,
//                   // borderWidth: 1.5,
//                   // borderColor: '#D56AAC',
//                   height: 30,
//                   width: 70,
//                   borderRadius: 15,
//                 }}>
//                 13.00
//               </Text>
//             </View>
//           </View>
//           <View style={styles.uppersection1}>
//             <View>
//               <Image
//                 source={{
//                   uri: 'https://play-lh.googleusercontent.com/UHhUtvrLMheJFA1xPm8ZZt4qVjygbb2D1fi9MIbkfHb1bHtcDX9JeAgqmysK9qoHNM9a=w240-h480-rw',
//                 }}
//                 style={{
//                   height: 70,
//                   width: 70,
//                   borderRadius: 40,
//                 }}
//               />
//             </View>
//             <View>
//               <Text style={{fontSize: 18, color: 'black', marginTop: 20}}>
//                 Julianna Mcpherson
//               </Text>
//               <Text style={{fontSize: 15}}>I'll be there in 2 min</Text>
//             </View>
//             <View>
//               <Text
//                 style={{
//                   textAlign: 'center',
//                   marginTop: 30,
//                   // color: '#D56AAC',
//                   fontSize: 18,
//                   // borderWidth: 1.5,
//                   // borderColor: '#D56AAC',
//                   height: 30,
//                   width: 70,
//                   borderRadius: 15,
//                 }}>
//                 10.02
//               </Text>
//             </View>
//           </View>
//           <View style={styles.uppersection1}>
//             <View>
//               <Image
//                 source={{
//                   uri: 'https://i0.wp.com/www.wonderslist.com/wp-content/uploads/2021/05/Cha-Eun-woo-Most-Handsome-Korean-Actors-2021.jpg',
//                 }}
//                 style={{
//                   height: 70,
//                   width: 70,
//                   borderRadius: 40,
//                 }}
//               />
//             </View>
//             <View>
//               <Text style={{fontSize: 18, color: 'black', marginTop: 20}}>
//                 Morgan Chaney
//               </Text>
//               <Text style={{fontSize: 15}}>Perfect</Text>
//             </View>
//             <View>
//               <Text
//                 style={{
//                   // backgroundColor: '#D56AAC',
//                   textAlign: 'center',
//                   marginTop: 30,
//                   // color: 'white',
//                   fontSize: 15,
//                   // borderWidth: 1.5,
//                   // borderColor: '#D56AAC',
//                   height: 30,
//                   width: 70,
//                   borderRadius: 15,
//                 }}>
//                 Yesterday
//               </Text>
//             </View>
//           </View>
//           <View style={styles.uppersection3}>
//             <View>
//               <IconFa name="home" style={{fontSize: 25, color: '#D56AAC'}} />
//             </View>
//             <View>
//               <IconFa name="map" style={{fontSize: 25, color: '#D56AAC'}} />
//             </View>
//             <View>
//               <IconFa name="heart" style={{fontSize: 25, color: '#D56AAC'}} />
//             </View>
//             <View
//               style={{
//                 backgroundColor: '#D56AAC',
//                 justifyContent: 'center',
//                 borderRadius: 20,
//                 height: 35,
//                 width: 35,
//               }}>
//               <IconFa
//                 name="message-bulleted"
//                 style={{fontSize: 25, color: 'white', marginLeft: 5}}
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
//     justifyContent: 'space-between',
//     // marginTop: 10,
//     // paddingLeft: 30,
//     padding: 20,
//     // borderWidth: 1,
//   },
//   uppersection1: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 10,
//     // paddingLeft: 30,
//     padding: 5,
//     borderWidth: 0.25,
//     borderRadius: 10,
//     margin: 15,
//   },
//   uppersection3: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     // padding:20,
//     margin: 20,
//   },
// });
// export default InboxPage;
