import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
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
import {SearchBar} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';
// import IconFa from 'react-native-vector-icons/MaterialIcons';

const AccountSetUp = () => {
  const navigation = useNavigation();
  const onNextPressed11 = () => {
    navigation.navigate('AccountSetUp1');
  };
  const [msgs, setMsgs] = useState([
    {
      img: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/india-flag-design-template-186e8b084e00b5e1f777ddf3f534b763_screen.jpg?ts=1625072969',
      name: 'Afghanisthan',
      msg: 'IN',
      new: 1,
    },
    {
      img: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/india-flag-design-template-186e8b084e00b5e1f777ddf3f534b763_screen.jpg?ts=1625072969',
      name: 'India',
      msg: 'IN',
      new: 1,
    },
    {
      img: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/india-flag-design-template-186e8b084e00b5e1f777ddf3f534b763_screen.jpg?ts=1625072969',
      name: 'India',
      msg: 'IN',
      new: 1,
    },
    {
      img: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/india-flag-design-template-186e8b084e00b5e1f777ddf3f534b763_screen.jpg?ts=1625072969',
      name: 'India',
      msg: 'IN',
      new: 1,
    },
    {
      img: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/india-flag-design-template-186e8b084e00b5e1f777ddf3f534b763_screen.jpg?ts=1625072969',
      name: 'India',
      msg: 'IN',
      new: 1,
    },
  ]);
  const [text, onChangeText] = React.useState(null);
  const _renderItem = ({item, index}) => {
    return (
      <View style={styles.uppersection1}>
        <View style={{}}>
          <View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <Image
                source={{
                  uri: item.img,
                }}
                style={{
                  height: 70,
                  width: 70,
                  borderRadius: 40,
                }}
              />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                }}>
                <Text style={{fontSize: 15, width: vw(15)}}>{item.msg}</Text>
                <Text style={{fontSize: 18, color: 'black'}}>{item.name}</Text>
              </View>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <IconFa name="circle-outline" style={{fontSize: 20}} />
              </View>
            </View>
          </View>
        </View>
        {/* <View>
          <Text style={{fontSize: 15, marginTop: 20}}>{item.msg}</Text>
        </View>
        <View>
          <Text style={{fontSize: 18, color: 'black', marginTop: 20}}>
            {item.name}
          </Text>
        </View> */}
        {/* <View>
          {item.new && (
            <View
              style={{
                height: 30,
                width: 30,
                borderRadius: 40,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  alignSelf: 'center',
                  color: '#fe5e75',
                  marginTop: 10,
                }}>
                <IconFa name="circle-outline" style={{fontSize: 20}} />
              </Text>
            </View>
          )}
          <Text style={{marginTop: 10, fontSize: 18}}>{item.time}</Text>
        </View> */}
      </View>
    );
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <View>
            <Text style={styles.upperSection}>
              <IconFa
                name="arrow-left"
                style={{fontSize: 25, color: '#fe5e75'}}
              />
              <Text style={{paddingLeft: 10, color: 'black'}}>
                Select Your Country
              </Text>
            </Text>
          </View>
          <View style={styles.uppersection}>
            <View style={styles.uppersection}></View>
          </View>
          <View
            style={{
              alignSelf: 'center',
            }}>
            <SearchBar
              placeholder="Search "
              // onChangeText={updateSearch}
              // value={search}
              // onPressIn={onNextPressed3}
              lightTheme
              platform="ios"
              containerStyle={{
                borderRadius: 50,
                width: 350,
                height: 50,
                backgroundColor: '#dcdce1',
              }}
            />
          </View>
          <FlatList data={msgs} renderItem={_renderItem} />
          <View
            style={{
              backgroundColor: '#fe5e75',
              height: 50,
              margin: 20,
              borderRadius: 30,
            }}>
            <Text
              style={{
                textAlign: 'center',
                marginTop: 12,
                color: 'white',
                fontSize: 20,
              }}
              onPress={onNextPressed11}>
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
  },
  uppersection1: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    marginTop: 10,
    padding: 5,
    borderWidth: 0.25,
    borderRadius: 10,
    margin: 15,
  },
  uppersection3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
  upperSection: {
    margin: 20,
    fontSize: 25,
    paddingLeft: 10,
  },
});
export default AccountSetUp;
