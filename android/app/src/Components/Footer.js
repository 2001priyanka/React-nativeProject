import react from 'react';
import {Text, View, StyleSheet} from 'react-native';
 import {TouchableOpacity} from 'react-native-gesture-handler';
 import IconFa from 'react-native-vector-icons/MaterialCommunityIcons';

const Footer = ()=>{
<View>
  <View style={styles.uppersection}>
    <TouchableOpacity>
      <View>
        <IconFa
          name="home"
          style={{fontSize: 25, color: '#fe5e75'}}
        //   onPress={onNextPressed20}
        />
      </View>
    </TouchableOpacity>
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
    <View>
      <IconFa name="account" style={{fontSize: 25, color: '#fe5e75'}} />
    </View>
  </View>
</View>

 }
export default Footer;

const styles = StyleSheet.create({
  uppersection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    // paddingRight:20,
  },
});