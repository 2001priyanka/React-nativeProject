import react from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import IconFa from 'react-native-vector-icons/MaterialCommunityIcons';

const Footer = () => {
  <View>
    <View style={styles.uppersection}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('HomeScreens');
        }}>
        <IconFa
          name="home"
          style={{fontSize: 25, color: '#fe5e75'}}
          //   onPress={onNextPressed20}
        />
      </TouchableOpacity>

      <TouchableOpacity>
        <IconFa name="map" style={{fontSize: 25, color: '#fe5e75'}} />
      </TouchableOpacity>
      <TouchableOpacity>
        <IconFa name="heart" style={{fontSize: 25, color: '#fe5e75'}} />
      </TouchableOpacity>
      <TouchableOpacity>
        <IconFa
          name="message-bulleted"
          style={{fontSize: 25, color: '#fe5e75'}}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <IconFa name="account" style={{fontSize: 25, color: '#fe5e75'}} />
      </TouchableOpacity>
    </View>
  </View>;
};
export default Footer;

const styles = StyleSheet.create({
  uppersection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    // marginTop: 20,
    alignContent: 'flex-end',
    // paddingRight:20,
  },
});
