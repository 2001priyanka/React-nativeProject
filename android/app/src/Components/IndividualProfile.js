import React, {useState, useRef, useEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import Swiper from 'react-native-deck-swiper';
// import RangeSlider from 'rn-range-slider';
import AppIntroSlider from 'react-native-app-intro-slider';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  Image,
  View,
  FlatList,
  StatusBar,
  TouchableOpacity,
  Button,
} from 'react-native';
import {
  responsiveHeight as vh,
  responsiveWidth as vw,
  responsiveFontSize as vf,
} from 'react-native-responsive-dimensions';
import Modal from 'react-native-modal';
import IconFa from 'react-native-vector-icons/Entypo';
import IconFaa from 'react-native-vector-icons/FontAwesome';
import IconAd from 'react-native-vector-icons/AntDesign';
import {color} from '@rneui/base';
import {API_URL} from '../../../../Config';
import axios from 'axios';
import Footer from './Footer';

const IndividualProfile = () => {
    const [users, setUsers] = useState('');
  const [showRealApp, setShowRealApp] = useState(false);
    const swiperRef = useRef();
  const onDone = () => {
    setShowRealApp(true);
    //  onPress = {onNext2Pressed};
  };
   const RenderNextButton = () => {
     // return (
     //   <View>
     //     <Text style={{color: 'white', fontSize: vf(2.5)}}>
     //       Next
     //     </Text>
     //   </View>
     // );
   };
  const slides = [
    {
      key: 's1',
      // text: 'Skip',
      // title: 'Find People who match with you',
      image: {
        uri: 'https://www.globalgranary.life/wp-content/uploads/2019/04/KimSoHyun-e1556528908202.jpg',
      },
      backgroundColor: '#fe5e75',
    },
    {
      key: 's2',
      //  title: 'Set Preferences for multiple users from various resturant',
      // text: 'Upto 25% off on Domestic Flights',
      // text: 'Skip',
      image: {
        uri: 'https://media.theindependent.sg/wp-content/uploads/2022/10/16111924/452126-han-so-hee-and-her-appearances-in-korean-dramas.jpg',
      },
      backgroundColor: '#fe5e75',
      height: vh(100),
    },
    {
      key: 's3',
      //  title: 'Fast, rescused food at yours services',
      // text: 'Skip',
      image: {
        uri: 'https://images.saymedia-content.com/.image/t_share/MTc1MTE0NTkzNjkyNDkzNjM2/top-10-most-successful-beautiful-korean-drama-actresses.jpg',
      },
      backgroundColor: '#fe5e75',
    },
  ];
     const RenderDoneButton = () => {
      //  return (
      //    <View>
      //      <Text
      //        style={{color: 'white', fontSize: vf(2.5)}}
      //        >
      //        Done
      //      </Text>
      //    </View>
      //  );
     };
     
   const RenderItem = ({item}) => {
     return (
       <>
         <View
           style={{
            //  flex: 1,
             backgroundColor: item.backgroundColor,
            //  height: item.height,
             alignItems: 'center',
             justifyContent: 'space-around',
            //  paddingBottom: 100,
           }}>
           <Text style={styles.introTitleStyle2}>
             {item.text}
           </Text>
           <View>
             <Image
               style={styles.introImageStyle1}
               source={item.image}
               // onPress={onNext2Pressed}
             />
           </View>
           {/* <Text style={styles.introTitleStyle}>{item.title}</Text> */}
         </View>
       </>
     );
   };
  const route = useRoute();

  console.log('routee', route);

  const name = route?.params?.details?.name;
  const age = route?.params?.details?.age;
  const pic = route?.params?.details?.img;

  const navigation = useNavigation();

  const [userImages, setUserImages] = useState([]);

  // getting userid from that user

  const userId = route?.params?.details?._id;

  const getUserImages = async () => {
    try {
      const res = await axios({
        url: API_URL + 'UserImage',
        method: 'GET',
      });
      if (res) {
        console.log('getUserImages res', res);
        let tmpUser = res?.data?.userImage;
        setUserImages(res?.data?.userImage);
      }
    } catch (error) {
      console.log('getUserImages error', error);
    }
  };
const registerSwipe = async (idx, type) => {
  try {
    const target = users[idx];
    console.log('target', target, idx, type);
    const data = {
      user1: '63bfdc9ee2b54a4b80979189',
      user2: target?._id,
      action1: type,
      action2: type,
    };
    const res = await axios.post(API_URL + 'admin/connection', data);
    if (res.status === 200) {
      console.log('res', res?.data?.results);
    }
  } catch (error) {
    console.log('ERROR', error);
  }
};
 const getUsersData = async () => {
   try {
     const res = await axios.get(API_URL + 'admin/user');
     if (res.status === 200) {
       console.log('res', res?.data?.results);
       setUsers(res?.data?.results);
     }
   } catch (error) {
     console.log('ERROR', error);
   }
 };
 useEffect(() => {
   getUsersData();
 }, []);
  useEffect(() => {
    getUserImages();
  }, []);
  console.log('user images', userImages);
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <View>
            {/* <ScrollView horizontal={true} className="image">
          {[1, 2, 3, 4].map(e => {
            return (
              <ScrollView horizontal={true} style={{height: vh(50)}}>
                <Image
                  source={{
                    //   uri: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmVtYWxlJTIwbW9kZWx8ZW58MHx8MHx8&w=1000&q=80',
                    uri: pic,
                  }}
                  style={{height: vh(50), width: vw(100)}}
                />
              </ScrollView>
            );
          })}
        </ScrollView> */}
            <View>
              {showRealApp ? (
                <SafeAreaView>
                  <View></View>
                </SafeAreaView>
              ) : (
                <AppIntroSlider
                  data={slides}
                  renderItem={RenderItem}
                  // onPress={onNext2Pressed}
                  onDone={onDone}
                  renderDoneButton={RenderDoneButton}
                  renderNextButton={RenderNextButton}
                />
              )}
            </View>

            <View className="description">
              <View style={{flexDirection: 'row', marginLeft: 20}}>
                <Text
                  style={{fontSize: vf(3), color: 'black', fontWeight: '600'}}>
                  {name},
                </Text>
                <Text style={{fontSize: vf(3)}}>{age}</Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginLeft: 15,
                }}>
                <IconFa name="location-pin" size={30} />

                <Text>15 km away</Text>
              </View>

              <View style={{paddingHorizontal: 10, marginTop: 20}}>
                <Text>
                  type and scrambled it to make a type specimen book. It has
                  survived not only five centuries, but also the leap into
                  electronic typesetting, remaining essentially unchanged. It
                  was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum.
                </Text>
              </View>
            </View>

            <View
              className="footericon"
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginTop: 30,
              }}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('HomeScreens');
                }}
                style={{
                  height: vh(8),
                  width: vw(17),
                  backgroundColor: '#F77070',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 200,
                }}>
                <IconFaa name="close" size={45} color={'white'} />
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  height: vh(8),
                  width: vw(17),
                  backgroundColor: '#B2F29E',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 200,
                }}>
                <IconAd
                  name="staro"
                  size={30}
                  color={'white'}
                  // onPress={registerSwipe()}
                  onPress={() => {
                    swiperRef.current.swipeTop();
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  height: vh(8),
                  width: vw(17),
                  backgroundColor: '#83BFEF',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 200,
                }}>
                <IconAd name="heart" size={30} color={'white'} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    padding: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  paragraphStyle: {
    // padding: 20,
    textAlign: 'center',
    fontSize: 16,
  },
  introImageStyle1: {
    width: vw(80),
    height: vh(55),
    borderRadius:20,
    // marginBottom: 75,
  },
  introTextStyle: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    paddingVertical: 30,
  },
  introTitleStyle1: {
    fontSize: 20,
    color: 'white',
    textAlign: 'right',
    marginLeft: 300,
    fontWeight: 'bold',
    margin: 30,
  },
  introTitleStyle2: {
    fontSize: 20,
    color: 'white',
    alignSelf: 'flex-end',
    // marginTop:20,
    margin: 30,
  },
  introTitleStyle: {
    // flex: 1,
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
    // marginTop: 30,

    // margin: 30,
  },
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default IndividualProfile;
