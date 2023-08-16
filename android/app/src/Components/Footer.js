// import react from 'react';
// import {Text, View, StyleSheet} from 'react-native';
// import {TouchableOpacity} from 'react-native-gesture-handler';
// import IconFa from 'react-native-vector-icons/MaterialCommunityIcons';

// const Footer = () => {
//   <View>
//     <View style={styles.uppersection}>
//       <TouchableOpacity
//         onPress={() => {
//           navigation.navigate('HomeScreens');
//         }}>
//         <IconFa
//           name="home"
//           style={{fontSize: 25, color: '#fe5e75'}}
//           //   onPress={onNextPressed20}
//         />
//       </TouchableOpacity>

//       <TouchableOpacity>
//         <IconFa name="map" style={{fontSize: 25, color: '#fe5e75'}} />
//       </TouchableOpacity>
//       <TouchableOpacity>
//         <IconFa name="heart" style={{fontSize: 25, color: '#fe5e75'}} />
//       </TouchableOpacity>
//       <TouchableOpacity>
//         <IconFa
//           name="message-bulleted"
//           style={{fontSize: 25, color: '#fe5e75'}}
//         />
//       </TouchableOpacity>
//       <TouchableOpacity>
//         <IconFa name="account" style={{fontSize: 25, color: '#fe5e75'}} />
//       </TouchableOpacity>
//     </View>
//   </View>;
// };
// export default Footer;

// const styles = StyleSheet.create({
//   uppersection: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     // marginTop: 20,
//     alignContent: 'flex-end',
//     // paddingRight:20,
//   },
// });


import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  responsiveHeight as vh,
  responsiveWidth as vw,
  responsiveFontSize as vf,
} from 'react-native-responsive-dimensions';
import IconFa from 'react-native-vector-icons/MaterialCommunityIcons';
const Footer = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        position: 'relative',
        height: vh(10),
        borderWidth: 0,
        width: vw(100),
        backgroundColor: 'white',
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignSelf: 'center',
          width: vw(100),
          height: vh(10),
          alignItems: 'center',
        }}>
        <TouchableOpacity>
          <IconFa
            name="home"
            size={28}
            color="#fe5e75"
            onPress={() => navigation.navigate('HomeScreens')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <IconFa
            name="map"
            size={28}
            color="#fe5e75"
            onPress={() => navigation.navigate('walletlist')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            // height: 60,
            position: 'relative',
          }}>
          <IconFa
            name="heart"
            size={40}
            color="#fe5e75"
            style={{alignSelf: 'center'}}
            onPress={() => navigation.navigate('wallet')}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <IconFa
            name="message-bulleted"
            size={28}
            color="#fe5e75"
            style={{alignSelf: 'center'}}
            onPress={() => navigation.navigate('InboxPage')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <IconFa
            name="account"
            size={28}
            color="#fe5e75"
            style={{alignSelf: 'center'}}
            onPress={() => navigation.navigate('ProfilePage')}
          />
        </TouchableOpacity>
      </View>
      {/* <Image source={require("../../assets/images/add1.jpg")} resizeMode="contain" style={{borderRadius:250,width:80,height:80}} /> */}
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({});
