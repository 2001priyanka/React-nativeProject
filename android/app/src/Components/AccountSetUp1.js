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

const AccountSetUp1 = () => {
  const navigation = useNavigation();
  const onNextPressed12 = () => {
    navigation.navigate('AccountSetUp2');
  };
  const [msgs, setMsgs] = useState([]);
  const [text, onChangeText] = React.useState(null);
  const _renderItem = ({item, index}) => {
    return (
      <View style={styles.uppersection1}>
        <View>
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
        </View>
        <View>
          <Text style={{fontSize: 15, marginTop: 20}}>{item.msg}</Text>
        </View>
        <View>
          <Text style={{fontSize: 18, color: 'black', marginTop: 20}}>
            {item.name}
          </Text>
        </View>
        <View>
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
        </View>
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
                Fill Your Profile
              </Text>
            </Text>
          </View>
          <View>
            <Image
              source={{
                uri: 'https://i.pinimg.com/236x/47/5a/86/475a86177aeedacf8dc7f5e2b4eff61f.jpg',
              }}
              style={{
                height: 100,
                width: 100,
                borderRadius: 100,
                marginTop: 20,
                alignSelf: 'center',
              }}
            />

            <Text style={{textAlign: 'center', fontSize: 20, color: 'black'}}>
              Adam Smith
            </Text>
          </View>
          <View style={styles.input}>
            <View>
              <Text
                style={{
                  alignSelf: 'flex-start',
                  marginLeft: 25,
                  flexDirection: 'row',
                  fontWeight: '500',
                  marginTop: 5,
                }}>
                Email:
              </Text>
              <TextInput
                style={styles.input2}
                placeholder="Email"
                editable
                maxLength={40}
              />
            </View>

            <View>
              <Text
                style={{
                  alignSelf: 'flex-start',
                  marginLeft: 25,
                  flexDirection: 'row',
                  fontWeight: '500',
                  marginTop: 5,
                }}>
                Password:
              </Text>

              <TextInput
                style={styles.input2}
                placeholder="Password"
                editable
                maxLength={40}
              />
            </View>
            <View>
              <Text
                style={{
                  alignSelf: 'flex-start',
                  marginLeft: 25,
                  flexDirection: 'row',
                  fontWeight: '500',
                  marginTop: 5,
                }}>
                Phone Number:
              </Text>

              <TextInput
                style={styles.input2}
                placeholder="Phone Number"
                editable
                maxLength={40}
              />
            </View>
            <View>
              <Text
                style={{
                  alignSelf: 'flex-start',
                  marginLeft: 25,
                  flexDirection: 'row',
                  fontWeight: '500',
                  marginTop: 5,
                }}>
                Gender:
              </Text>

              <TextInput
                style={styles.input2}
                placeholder="Gender"
                editable
                maxLength={40}
              />
            </View>
            <View>
              <Text
                style={{
                  alignSelf: 'flex-start',
                  marginLeft: 25,
                  flexDirection: 'row',
                  fontWeight: '500',
                  marginTop: 5,
                }}>
                Location:
              </Text>

              <TextInput
                style={styles.input2}
                placeholder="Location"
                editable
                maxLength={40}
              />
            </View>
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
                marginTop: 10,
                color: 'white',
                fontSize: 20,
              }}
              onPress={onNextPressed12}>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    padding: 5,
    borderWidth: 1,
    borderColor: '#B3B0B0',

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
  input: {
    display: 'flex',
    margin: 8,
    padding: 10,
  },
  input2: {
    height: 40,
    margin: 12,
    borderWidth: 0.5,
    padding: 10,
    borderRadius: 20,
  },
});
export default AccountSetUp1;
