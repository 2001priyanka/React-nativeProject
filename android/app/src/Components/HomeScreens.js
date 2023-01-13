import React, {useState, useRef, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import Swiper from 'react-native-deck-swiper';
// import RangeSlider from 'rn-range-slider';

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
import IconFa from 'react-native-vector-icons/MaterialCommunityIcons';
import { color } from '@rneui/base';
import { API_URL } from '../../../../Config';
import axios from 'axios';
// import IconFa from 'react-native-vector-icons/MaterialIcons';

const HomeScreens = () => {
  const navigation = useNavigation();
  const onNextPressed14 = () => {
    navigation.navigate('ProfilePage');
  };
  const onNextPressed15 = () => {
    navigation.navigate('HomeScreens');
  };
 const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const swiperRef = useRef();
   const [users, setUsers] = useState('');
  const [cards, setCards] = useState([
    {
      name: 'Elena',
      img: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmVtYWxlJTIwbW9kZWx8ZW58MHx8MHx8&w=1000&q=80',
      age: 21,
      profession: 'Model',
    },
    {
      name: 'Elisha',
      img: 'https://media.istockphoto.com/id/1133213198/photo/beautiful-woman-soft-make-up-and-perfect-skin.jpg?s=612x612&w=0&k=20&c=mxphjQ0Viklr4EkVdKclu3WQ4ys4nEHLNJHKHAUHqAo=',
      age: 21,
      profession: 'Singer',
    },
    {
      name: 'Jane',
      img: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmVtYWxlJTIwbW9kZWx8ZW58MHx8MHx8&w=1000&q=80',
      age: 20,
      profession: 'Singer',
    },
    {
      name: 'priya',
      img: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmVtYWxlJTIwbW9kZWx8ZW58MHx8MHx8&w=1000&q=80',
      age: 20,
      profession: 'Dancer',
    },
    {
      name: 'priyanka',
      img: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmVtYWxlJTIwbW9kZWx8ZW58MHx8MHx8&w=1000&q=80',
      age: 20,
      profession: 'Artist',
    },
    {
      name: 'Bonnie',
      img: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmVtYWxlJTIwbW9kZWx8ZW58MHx8MHx8&w=1000&q=80',
      age: 20,
      profession: 'Doctor',
    },
  ]);

  const [text, onChangeText] = React.useState(null);
  const _renderUsers = (item, index) => {
    return (
      <View>
        <StatusBar/>
        <View
          style={{
            marginTop: 50,
            position: 'relative',
            backgroundColor: '#fe5e75',
            borderRadius: 20,
            //  marginBottom:20,
          }}>
          <Image
            source={{
              uri: item.img,
            }}
            style={{
              height: vh(55),
              width: vh(40),
              borderRadius: 20,
              padding: 10,
              marginTop: 50,
              alignSelf: 'center',
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              height: vh(10),
              marginTop: 20,
            }}>
            <View>
              <Text
                style={{
                  textAlign: 'center',
                  position: 'relative',
                  fontSize: vf(2),
                  color: 'white',
                }}>
                {item.name},
              </Text>
              <Text style={{color: 'white'}}>{item.profession}</Text>
            </View>
            <View>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: vf(2),
                  color: 'white',
                  paddingRight:220,
                }}>
                {item.age}
              </Text>
            </View>
            <View>
              <Text>
                <IconFa
                  name="dots-vertical"
                  style={{fontSize: vf(3), color: 'white'}}
                />
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

 
 const registerSwipe = async (idx,type) => {
   try {
     const target = users[idx]
     console.log('target',target,idx,type)
     const data = {
       user1: '63bfdc9ee2b54a4b80979189',
       user2:target?._id,
       action1: type,
       action2:type,
     };
     const res = await axios.post(API_URL + 'connection',data);
     if (res.status === 200) {
       console.log('res', res?.data?.results);
     }
   } catch (error) {
     console.log('ERROR', error);
   }
 };
  useEffect(() => {
    registerSwipe();
  }, []);

  const getUsersData = async()=>{
    try {
      const res = await axios.get(
        API_URL + 'admin/user',
    );
    if(res.status === 200){
      console.log('res', res?.data?.results)
      setUsers(res?.data?.results)
    }
    } catch (error) {
      console.log('ERROR', error)
    }
  }
  useEffect(()=>{
    getUsersData();
  },[]);

  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <Swiper
          ref={swiperRef}
          cards={cards}
          renderCard={_renderUsers}
          data={getUsersData}
          // user={users}
          overlayLabels={{
            bottom: {
              title: 'BLEAH',
              style: {
                label: {
                  backgroundColor: '#fe5e75',
                  borderColor: '#fe5e75',
                  borderWidth: 1,
                  elevation: 20,
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                },
              },
            },
            left: {
              title: 'NOPE',
              style: {
                label: {
                  backgroundColor: '#fe5e75',
                  borderColor: '#fe5e75',
                  color: 'white',
                  borderWidth: 1,
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  justifyContent: 'flex-start',
                  marginTop: 30,
                  marginLeft: -30,
                },
              },
            },
            right: {
              title: 'LIKE',
              style: {
                label: {
                  backgroundColor: '#fe5e75',
                  borderColor: '#fe5e75',
                  color: 'white',
                  borderWidth: 1,
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  marginTop: 30,
                  marginLeft: 30,
                },
              },
            },
            top: {
              title: 'SUPER LIKE',
              style: {
                label: {
                  backgroundColor: '#fe5e75',
                  borderColor: '#fe5e75',
                  color: 'white',
                  borderWidth: 1,
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                },
              },
            },
          }}
          onSwipedLeft={cardIndex => {
            console.log('cardIndex', cardIndex);
            registerSwipe(cardIndex, 'REJECT');
          }}
          onSwipedRight={cardIndex => {
            console.log('cardIndex', cardIndex);
            registerSwipe(cardIndex, 'Like');
          }}
          onSwipedBottom={cardIndex => {
            console.log('cardIndex', cardIndex);
            registerSwipe(cardIndex, 'Bleah');
          }}
          onSwipedTop={cardIndex => {
            console.log('cardIndex', cardIndex);
            registerSwipe(cardIndex, 'SuperLike');
          }}
          onSwipedAll={() => {
            console.log('onSwipedAll');
          }}
          cardIndex={0}
          backgroundColor={'#4FD0E9'}
          stackSize={3}>
          {/* <Button
            onPress={() => {
              console.log('oulala');
            }}
            title="Press me">
            You can press me
          </Button> */}
        </Swiper>
      </View>

      <View style={styles.uppersection}>
        <View style={styles.uppersection}>
          <View>
            <IconFa
              name="heart-multiple"
              style={{fontSize: vf(4), color: '#fe5e75'}}
            />
          </View>
          <View style={{paddingRight: 180}}>
            <Text style={{fontSize: vf(2.5), paddingLeft: 10, color: 'black'}}>
              DatingApp
            </Text>
          </View>
        </View>
        <View style={styles.uppersection}>
          <View
            style={{
              borderRadius: 50,
              backgroundColor: '#FFDBE9',
              height: vh(4),
              width: vw(9),
              borderRadius: 4,
            }}>
            <IconFa
              name="filter-variant"
              style={{
                fontSize: 25,
                alignSelf: 'center',
                justifyContent: 'center',
                color: '#fe5e75',
              }}
              onPress={toggleModal}
            />
          </View>
        </View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 90,
            height: vh(7),
            width: vw(14),
            justifyContent: 'center',
            alignItems: 'center',
            // backgroundColor:'gray',
          }}>
          <Text>
            <IconFa
              name="close"
              style={{fontSize: vf(5), color: '#fe5e75'}}
              onPress={() => {
                swiperRef.current.swipeLeft();
              }}
            />
          </Text>
        </View>

        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 30,
            height: vh(7),
            width: vw(14),
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>
            <IconFa
              name="star-outline"
              style={{fontSize: vf(6), color: '#fe5e75'}}
            />
          </Text>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 30,
            height: vh(7),
            width: vw(14),
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>
            <IconFa
              name="heart-outline"
              style={{fontSize: vf(5), color: '#fe5e75'}}
              onPress={() => {
                // swiperRef.swipeRight();
                swiperRef.current.swipeRight();
              }}
            />
          </Text>
        </View>
      </View>

      {/* <FlatList data={cards} renderItem={_renderUsers} /> */}
      <View style={styles.uppersection1}>
        <View>
          <IconFa
            name="home"
            style={{fontSize: vf(3.5), color: '#fe5e75'}}
            onPress={onNextPressed15}
          />
        </View>
        <View>
          <IconFa name="map" style={{fontSize: vf(3.5), color: '#fe5e75'}} />
        </View>
        <View>
          <IconFa name="heart" style={{fontSize: vf(3.5), color: '#fe5e75'}} />
        </View>
        <View>
          <IconFa
            name="message-bulleted"
            style={{fontSize: vf(3.5), color: '#fe5e75'}}
          />
        </View>
        <TouchableOpacity>
          <View>
            <IconFa
              name="account"
              style={{fontSize: vf(3.5), color: '#fe5e75'}}
              onPress={onNextPressed14}
            />
          </View>
        </TouchableOpacity>
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
                <Text
                  style={{
                    alignSelf: 'flex-start',
                    marginLeft: 25,
                    flexDirection: 'row',
                    fontWeight: '500',
                    fontSize: vf(2),
                    color: 'black',
                  }}>
                  Location:
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    height: 50,
                    margin: 12,
                    borderWidth: 1,
                    paddingLeft: 30,
                    borderRadius: 25,
                    borderColor: '#B3B0B0',
                  }}>
                  <View>
                    <TextInput
                      // style={styles.input2}
                      placeholder="Location"
                      editable
                      maxLength={40}
                    />
                  </View>
                  <View>
                    <IconFa
                      name="map-marker"
                      style={{
                        marginTop: 9,
                        paddingRight: 20,
                        fontSize: vf(2.5),
                      }}
                    />
                  </View>
                </View>
              </View>
              <View>
                <Text style={{color: 'black', fontSize: vf(2), marginLeft: 20}}>
                  Gender
                </Text>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <View style={styles.body1}>
                  <Text
                    style={{
                      textAlign: 'center',
                      color: '#fe5e75',
                      fontSize: 15,
                    }}>
                    Male
                  </Text>
                </View>
                <View style={styles.body}>
                  <Text
                    style={{
                      textAlign: 'center',
                      color: 'white',
                      fontSize: 15,
                    }}>
                    Female
                  </Text>
                </View>
                <View style={styles.body1}>
                  <Text
                    style={{
                      textAlign: 'center',
                      color: '#fe5e75',
                      fontSize: 15,
                    }}>
                    Others
                  </Text>
                </View>
              </View>
              {/* <RangeSlider
                style={styles.slider}
                min={0}
                max={100}
                step={1}
                floatingLabel
                renderThumb={renderThumb}
                renderRail={renderRail}
                renderRailSelected={renderRailSelected}
                renderLabel={renderLabel}
                renderNotch={renderNotch}
                onValueChanged={handleValueChange}
              /> */}
              <View
                style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <View style={styles.body4}>
                  <Text
                    style={{
                      textAlign: 'center',
                      color: '#fe5e75',
                      fontSize: 15,
                    }}>
                    Reset
                  </Text>
                </View>
                <View style={styles.body3}>
                  <Text
                    style={{
                      textAlign: 'center',
                      color: 'white',
                      fontSize: 15,
                    }}>
                    Apply Filter
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  uppersection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    height: vh(85),

    // paddingLeft:20,
    // backgroundColor: 'white',
  },
  uppersection1: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    // marginTop: 400,
    height: vh(85),
    // width: vh(60),
    // display:'none',
    padding: 15,
    backgroundColor: '#E9E3E8',
    margin: 5,
  },

  card: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  modalContent: {
    backgroundColor: 'white',
    paddingTop: 12,
    paddingHorizontal: 12,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    minHeight: 200,
    height: vh(50),
    paddingBottom: 20,
  },
  barIcon: {
    width: 60,
    height: 5,
    backgroundColor: '#bbb',
    borderRadius: 3,
    alignSelf: 'center',
  },
  text: {
    color: 'black',
    fontSize: vf(2.5),
    marginTop: 30,
  },
  btnContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 500,
  },
  flexView: {
    flex: 1,
    backgroundColor: 'white',
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  input2: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    paddingLeft: 30,
    borderRadius: 25,
    borderColor: '#B3B0B0',
  },
  body: {
    height: vh(5),
    width: vh(13),
    backgroundColor: '#fe5e75',
    borderRadius: 30,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  body1: {
    // fontSize: 15,
    height: vh(5),
    width: vh(13),
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#fe5e75',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  body4: {
    // fontSize: 15,
    height: vh(7),
    width: vh(13),
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#fe5e75',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  body3: {
    // fontSize: 15,
    height: vh(7),
    width: vh(30),
    backgroundColor: '#fe5e75',
    borderRadius: 30,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
});
export default HomeScreens;
