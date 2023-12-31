import React from 'react';

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

const SecurityPage = () => {
  const [text, onChangeText] = React.useState(null);
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <View>
            <Text style={styles.uppersection}>
              <IconFa
                name="arrow-left"
                style={{fontSize: 25, color: '#fe5e75', paddingLeft: 30}}
              />
              <Text style={{color: 'black', fontSize: 30, paddingLeft: 30}}>
                Security
              </Text>
            </Text>
          </View>
          <View style={styles.uppersection}>
            <View>
              <Text style={{fontSize: 20, color: 'black'}}>Face ID</Text>
            </View>
            <View>
              <IconFa
                name="toggle-switch"
                style={{fontSize: 50, color: '#fe5e75'}}
              />
            </View>
          </View>
          <View style={styles.uppersection}>
            <View>
              <Text style={{fontSize: 20, color: 'black'}}>Remember me</Text>
            </View>
            <View>
              <IconFa
                name="toggle-switch"
                style={{fontSize: 50, color: '#fe5e75'}}
              />
            </View>
          </View>
          <View style={styles.uppersection}>
            <View>
              <Text style={{fontSize: 20, color: 'black'}}>Touch ID</Text>
            </View>
            <View>
              <IconFa name="toggle-switch-off" style={{fontSize: 50}} />
            </View>
          </View>
          <View
            style={{
              // backgroundColor: '#fe5e75',
              borderWidth: 2,
              borderColor: '#fe5e75',
              height: 50,
              margin: 20,
              borderRadius: 30,
            }}>
            <Text
              style={{
                textAlign: 'center',
                // height: 40,
                // width: 100,
                marginTop: 12,
                color: '#fe5e75',
                fontSize: 18,
              }}>
              Change Password
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
    marginTop: 10,
    paddingLeft: 40,
    padding: 20,
  },
});
export default SecurityPage;
