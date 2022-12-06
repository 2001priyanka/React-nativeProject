// import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
import IconFa from 'react-native-vector-icons/MaterialCommunityIcons';
// import IconFa from 'react-native-vector-icons/MaterialIcons';

const EditProfile = () => {
  // const [text, onChangeText] = React.useState(null);
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{padding: 20}}>
          <View>
            <Text style={styles.uppersection}>
              <IconFa
                name="arrow-left"
                style={{fontSize: 25, color: '#D56AAC'}}
              />
              <Text style={{color: 'black', fontSize: 25}}>Edit Profile</Text>
            </Text>
          </View>
          <View style={styles.input}>
            <View>
              <Text style={{color: 'black', fontSize: 15}}>Full Name:</Text>

              <TextInput
                style={styles.input2}
                placeholder="Full Name"
                editable
                maxLength={40}
              />
            </View>
          </View>
          <View style={styles.input}>
            <View>
              <Text style={{color: 'black', fontSize: 15}}>Email:</Text>

              <TextInput
                style={styles.input2}
                placeholder="Email"
                editable
                maxLength={40}
              />
            </View>
          </View>
          <View style={styles.input}>
            <View>
              <Text style={{color: 'black', fontSize: 15}}>Phone Number:</Text>

              <TextInput
                style={styles.input2}
                placeholder="Phone Number"
                editable
                maxLength={40}
              />
            </View>
          </View>
          <View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <View>
                <Text style={{color: 'black', fontSize: 15}}>Gender:</Text>

                <TextInput
                  style={styles.input1}
                  placeholder="Gender"
                  editable
                  maxLength={40}
                />
              </View>
              <View>
                <View>
                  <Text style={{color: 'black', fontSize: 15}}>Age:</Text>

                  <TextInput
                    style={styles.input1}
                    placeholder="Age"
                    editable
                    maxLength={40}
                  />
                </View>
              </View>
            </View>
            <View style={styles.input}>
              <View>
                <Text style={{color: 'black', fontSize: 15}}>About:</Text>

                <TextInput
                  style={styles.input2}
                  placeholder="About"
                  editable
                  maxLength={40}
                />
              </View>
            </View>
            <View style={styles.input}>
              <View>
                <Text style={{color: 'black', fontSize: 15}}>Intrest:</Text>

                <TextInput
                  style={styles.input2}
                  placeholder="Intrest"
                  editable
                  maxLength={40}
                />
              </View>
            </View>
            <View style={styles.input}>
              <View>
                <Text style={{color: 'black', fontSize: 15}}>Address:</Text>

                <TextInput
                  style={styles.input2}
                  placeholder="Address"
                  editable
                  maxLength={40}
                />
              </View>
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#EE2773',
              // borderWidth: 2,
              // borderColor: '#D56AAC',
              height: 50,
              margin: 20,
              borderRadius: 30,
              // backgroundColor: '',
              opacity: 0.7,
            }}>
            <Text
              style={{
                textAlign: 'center',
                // height: 40,
                // width: 100,
                marginTop: 12,
                color: 'white',
                fontSize: 18,
              }}>
              Save Change
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
    borderColor: '#D56AAC',
    padding: 10,
    borderRadius: 20,
  },
  input1: {
    height: 40,
    margin: 12,
    borderWidth: 1.5,
    borderColor: '#D56AAC',
    padding: 10,
    borderRadius: 20,
    width: 150,
  },
});
export default EditProfile;
