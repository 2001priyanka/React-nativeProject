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
import {Alert} from 'react-native';
import {useSelector} from 'react-redux';
// import IconFa from 'react-native-vector-icons/MaterialIcons';

const AccountSetUp2 = () => {
  const route = useRoute();
  console.log(route);
  const navigation = useNavigation();
  const onNextPressed13 = () => {
    isTrue
      ? route?.params?.name === 'profile'
        ? navigation.navigate('ProfilePage')
        : navigation.navigate('AccountSetUp3')
      : Alert.alert('Select a Category!!');
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
  // const route = useRoute();
  console.log(route);

  const [categoryName, setCategoryName] = useState('');

  const accessToken = useSelector(
    reduxState => reduxState?.login?.user?.accessToken,
  );

  const user = useSelector(reduxState => reduxState?.login?.user?.user?._id);
  const [id, setID] = useState('');

  const [isTrue, setIsTrue] = useState(false);

  const updateUserData = async () => {
    if (user && id) {
      try {
        const res = await axios({
          url: API_URL + `admin/user/${user}`,
          method: 'PUT',
          data: {
            category_id: id,
          },
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (res) {
          console.log('updateUserData res', res);
          navigation.navigate('LiveMatch');
        }
      } catch (error) {
        console.log('updateUserData error', error);
      }
    } else {
      Alert.alert('Some error occured!');
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
              setID(item._id);
              setCategoryName(item.name);
              setIsTrue(true);
              id
                ? updateUserData()
                : Alert.alert('Are You Sure about the category?');
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
        </View>
      </>
    );
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{padding: 20}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity
              onPress={() => {
                route?.params?.name === 'profile'
                  ? navigation.navigate('ProfilePage')
                  : navigation.navigate('PhotoScreen');
              }}>
              <IconFa
                name="arrow-left"
                style={{fontSize: 25, color: '#fe5e75'}}
              />
            </TouchableOpacity>
            <Text style={styles.uppersection}>
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
            <FlatList
              data={category}
              renderItem={_renderCategory}
              numColumns={2}
              contentContainerStyle={{
                justifyContent: 'space-around',
              }}
            />
          </View>
          <TouchableOpacity
            onPress={onNextPressed13}
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
              }}>
              Next
            </Text>
          </TouchableOpacity>
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
