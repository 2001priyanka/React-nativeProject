import React, {useState, useRef} from 'react';
import {useNavigation} from '@react-navigation/native';
import Swiper from 'react-native-deck-swiper';

import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  Image,
  View,
  FlatList,
  TouchableOpacity,
  Button,
} from 'react-native';
import {
  responsiveHeight as vh,
  responsiveWidth as vw,
  responsiveFontSize as vf,
} from 'react-native-responsive-dimensions';
import IconFa from 'react-native-vector-icons/MaterialCommunityIcons';
// import IconFa from 'react-native-vector-icons/MaterialIcons';

const HomeScreens = () => {
  const navigation = useNavigation();
  const onNextPressed14 = () => {
    navigation.navigate('ProfilePage');
  };
  const swiperRef = useRef();
  const [cards, setCards] = useState([
    {
      name: 'elena Gilbert',
      img: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmVtYWxlJTIwbW9kZWx8ZW58MHx8MHx8&w=1000&q=80',
      age: 21,
    },
    {
      name: ' Carollin Gilbert',
      img: 'https://media.istockphoto.com/id/1133213198/photo/beautiful-woman-soft-make-up-and-perfect-skin.jpg?s=612x612&w=0&k=20&c=mxphjQ0Viklr4EkVdKclu3WQ4ys4nEHLNJHKHAUHqAo=',
      age: 21,
    },
    {
      name: 'Bonnie Gilbert',
      img: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmVtYWxlJTIwbW9kZWx8ZW58MHx8MHx8&w=1000&q=80',
      age: 20,
    },
    {
      name: 'Bonnie Gilbert',
      img: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmVtYWxlJTIwbW9kZWx8ZW58MHx8MHx8&w=1000&q=80',
      age: 20,
    },
    {
      name: 'Bonnie Gilbert',
      img: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmVtYWxlJTIwbW9kZWx8ZW58MHx8MHx8&w=1000&q=80',
      age: 20,
    },
    {
      name: 'Bonnie Gilbert',
      img: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmVtYWxlJTIwbW9kZWx8ZW58MHx8MHx8&w=1000&q=80',
      age: 20,
    },
  ]);

  const [text, onChangeText] = React.useState(null);
  const _renderUsers = (item, index) => {
    return (
      <View
        style={{
          //  position: 'relative',
          backgroundColor: 'white',
          borderRadius: 20,
          //  marginBottom:20,
        }}>
        <Image
          source={{
            uri: item.img,
          }}
          style={{
            height: vh(60),
            width: vh(40),
            borderRadius: 20,
            padding: 10,
            marginTop: 50,
            alignSelf: 'center',
          }}
        />
        <View style={{}}>
          <Text
            style={{
              textAlign: 'center',
              position: 'relative',
              fontSize: 20,
              color: 'black',
            }}>
            {item.name}
          </Text>
          <Text style={{textAlign: 'center', fontSize: 20, color: 'black'}}>
            {item.age}
          </Text>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <Swiper
          ref={swiperRef}
          cards={cards}
          renderCard={_renderUsers}
          overlayLabels={{
            bottom: {
              title: 'BLEAH',
              style: {
                label: {
                  backgroundColor: '#fe5e75',
                  borderColor: '#fe5e75',
                  // color: 'white',
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
          onSwiped={cardIndex => {
            console.log(cardIndex);
          }}
          onSwipedAll={() => {
            console.log('onSwipedAll');
          }}
          cardIndex={0}
          backgroundColor={'#4FD0E9'}
          stackSize={3}>
          <Button
            onPress={() => {
              console.log('oulala');
            }}
            title="Press me">
            You can press me
          </Button>
        </Swiper>
      </View>
      <View style={styles.uppersection}>
        <View style={styles.uppersection}>
          <View>
            <IconFa
              name="heart-multiple"
              style={{fontSize: 30, color: '#fe5e75'}}
            />
          </View>
          <View>
            <Text style={{fontSize: 20, paddingLeft: 10, color: 'black'}}>
              DatingApp
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
                color: '#fe5e75',
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
                color: '#fe5e75',
                paddingLeft: 25,
              }}
            />
          </View>
        </View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <View style={{backgroundColor: 'white', borderRadius: 30}}>
          <Text>
            <IconFa
              name="close"
              style={{fontSize: 50, color: '#fe5e75'}}
              onPress={() => {
                swiperRef.current.swipeLeft();
              }}
            />
          </Text>
        </View>

        <View style={{backgroundColor: 'white', borderRadius: 30, height: 50}}>
          <Text>
            <IconFa
              name="star-outline"
              style={{fontSize: 50, color: '#fe5e75'}}
            />
          </Text>
        </View>
        <View style={{backgroundColor: 'white', borderRadius: 30}}>
          <Text>
            <IconFa
              name="heart-outline"
              style={{fontSize: 50, color: '#fe5e75'}}
              onPress={() => {
                // swiperRef.swipeRight();
                swiperRef.current.swipeRight();
              }}
            />
          </Text>
        </View>
      </View>

      {/* <FlatList data={cards} renderItem={_renderUsers} /> */}
      <View style={styles.uppersection}>
        <View>
          <IconFa name="home" style={{fontSize: 25, color: '#fe5e75'}} />
        </View>
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
        <TouchableOpacity>
          <View>
            <IconFa
              name="account"
              style={{fontSize: 25, color: '#fe5e75'}}
              onPress={onNextPressed14}
            />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  uppersection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    // marginTop: 400,
    height: vh(85),
    // width: vh(60),
    // display:'none',
    padding: 15,
    // backgroundColor: 'white',
  },

  card: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});
export default HomeScreens;
