import React, {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  Image,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {
  responsiveHeight as vh,
  responsiveWidth as vw,
  responsiveFontSize as vf,
} from 'react-native-responsive-dimensions';
import IconFa from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';
import {API_URL} from '../../../../Config';
// import IconFa from 'react-native-vector-icons/MaterialIcons';

const AccountSetUp2 = () => {
  const route = useRoute();
  console.log(route);
  const navigation = useNavigation();
  const onNextPressed13 = () => {
    navigation.navigate('AccountSetUp3');
  };
  // const [text, onChangeText] = React.useState(null);

  const [category, setCategory] = useState([]);

  const getCategory = async () => {
    try {
      const res = await axios({
        url: API_URL + 'category',
        method: 'GET',
      });

      if (res) {
        console.log('getCategory ress', res);
        setCategory(res?.data?.category);
      }
    } catch (error) {
      console.log('getCategory error', error);
    }
  };

  useEffect(() => {
    getCategory();
  }, []);

  const [categoryName, setCategoryName] = useState('');

  const updateCategoryID = async () => {
    try {
      const res = await axios({});
    } catch (error) {
      console.log('updateCategoryID error', error);
    }
  };

  const _renderCategory = ({item, index}) => {
    return (
      <>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <TouchableOpacity
            style={{
              fontSize: 15,
              height: 50,
              width: vh(15),
              borderWidth: 1,
              borderRadius: 30,
              borderColor: '#fe5e75',
              // backgroundColor: '#F7BEF4',
              backgroundColor: item.name === categoryName ? '#FFA2D5' : 'white',
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
              marginTop: 30,
              marginHorizontal: 30,
            }}
            onPress={() => {
              console.log('id', item._id);
              setCategoryName(item.name);
            }}>
            <Text
              style={{
                textAlign: 'center',
                color: '#fe5e75',
                fontSize: 18,
              }}>
              <IconFa
                name="gamepad-variant"
                style={{fontSize: 20, color: 'black'}}
              />
              {item?.name}
            </Text>
          </TouchableOpacity>
          {/* <View style={styles.body1}>
                <Text
                  style={{
                    textAlign: 'center',
                    color: '#fe5e75',
                    fontSize: 18,
                  }}>
                  <IconFa
                    name="dance-ballroom"
                    style={{fontSize: 20, color: 'black'}}
                  />
                  Dancing
                </Text>
              </View> */}
          {/* <View></View> */}
        </View>
      </>
    );
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{padding: 20}}>
          <View>
            <Text style={styles.uppersection}>
              <IconFa
                name="arrow-left"
                style={{fontSize: 25, color: '#fe5e75'}}
              />
              <Text style={{color: 'black', fontSize: 25}}>
                Select Your Interest
              </Text>
            </Text>
          </View>
          <View>
            <Text style={{marginTop: 20, fontSize: 18, color: 'black'}}>
              Select your Interest to match with users who have similar things
              in common
            </Text>
          </View>
          <View style={{}}>
            {/* here map */}

            {/* {category?.map(c => {
              return (
                <>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                    }}>
                    <View style={styles.body1}>
                      <Text
                        style={{
                          textAlign: 'center',
                          color: '#fe5e75',
                          fontSize: 18,
                        }}>
                        <IconFa
                          name="gamepad-variant"
                          style={{fontSize: 20, color: 'black'}}
                        />
                        {c?.name}
                      </Text>
                    </View>
                    
                  </View>
                </>
              );
            })} */}

            <FlatList
              data={category}
              renderItem={_renderCategory}
              numColumns={2}
              contentContainerStyle={{
                // backgroundColor: 'red',
                justifyContent: 'space-around',
              }}
            />

            {/* <View
              style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <View style={styles.body1}>
                <Text
                  style={{
                    textAlign: 'center',
                    color: '#fe5e75',
                    fontSize: 18,
                  }}>
                  <IconFa name="head" style={{fontSize: 20, color: 'black'}} />
                  language
                </Text>
              </View>
              <View style={styles.body}>
                <Text
                  style={{
                    textAlign: 'center',
                    color: 'white',
                    fontSize: 18,
                  }}>
                  <IconFa name="music" style={{fontSize: 20, color: 'black'}} />
                  Music
                </Text>
              </View>
              <View style={styles.body1}>
                <Text
                  style={{
                    textAlign: 'center',
                    color: '#fe5e75',
                    fontSize: 18,
                    // paddingLeft:10,
                  }}>
                  <IconFa
                    name="movie-open"
                    style={{color: 'black', fontSize: 18}}
                  />
                  movie
                </Text>
              </View>
            </View> */}
            {/* <View
              style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <View style={styles.body1}>
                <Text
                  style={{
                    textAlign: 'center',
                    color: '#fe5e75',
                  }}>
                  <IconFa
                    name="picture-in-picture-bottom-right"
                    style={{color: 'black', fontSize: 15}}
                  />
                  Photography
                </Text>
              </View>
              <View style={styles.body}>
                <Text
                  style={{
                    textAlign: 'center',
                    color: 'white',
                    fontSize: 18,
                  }}>
                  <IconFa
                    name="book-account"
                    style={{fontSize: 20, color: 'black'}}
                  />
                  Book
                </Text>
              </View>
            </View> */}
            {/* <View
              style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <View style={styles.body}>
                <Text
                  style={{
                    textAlign: 'center',
                    color: 'white',
                    fontSize: 18,
                  }}>
                  <IconFa
                    name="pencil"
                    style={{fontSize: 20, color: 'black'}}
                  />
                  Writing
                </Text>
              </View>
              <View style={styles.body1}>
                <Text
                  style={{
                    textAlign: 'center',
                    color: '#fe5e75',
                    fontSize: 15,
                  }}>
                  <IconFa
                    name="office-building"
                    style={{fontSize: 18, color: 'black'}}
                  />
                  Architecture
                </Text>
              </View>
              <View style={styles.body}>
                <Text
                  style={{
                    textAlign: 'center',
                    color: 'white',
                    fontSize: 18,
                  }}>
                  <IconFa
                    name="football"
                    style={{fontSize: 20, color: 'black'}}
                  />
                  Football
                </Text>
              </View>
            </View> */}
          </View>
          <View
            style={{
              backgroundColor: '#fe5e75',
              height: 50,
              margin: 20,
              borderRadius: 30,
              marginTop: 180,
            }}>
            <Text
              style={{
                textAlign: 'center',
                marginTop: 12,
                color: 'white',
                fontSize: 20,
              }}
              onPress={onNextPressed13}>
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
    borderColor: '#fe5e75',
    padding: 10,
    borderRadius: 20,
  },
  input1: {
    height: 40,
    margin: 12,
    borderWidth: 1.5,
    borderColor: '#fe5e75',
    padding: 10,
    borderRadius: 20,
    width: 150,
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
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#fe5e75',
    backgroundColor: '#F7BEF4',
    backgroundColor: '#FFA2D5',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 30,
    marginHorizontal: 30,
  },
});
export default AccountSetUp2;
