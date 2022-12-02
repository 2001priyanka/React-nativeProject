import React from 'react';
// import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

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

const Homepage = () => {
 const navigation = useNavigation();
 const onNextPressed = () => {
   navigation.navigate('Home');
 };
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{backgroundColor: 'white'}}>
          <View>
            <Image
              source={{
                uri: 'https://i.dlpng.com/static/png/6509551_preview.png',
              }}
              style={{
                height: 450,
                width: 450,
                borderRadius: 10,
                // marginLeft: 100,
                // marginRight: 40,
                marginTop: 100,
                alignSelf: 'center',
              }}
            />
            <TouchableOpacity>
              <Image
                source={{
                  
                    uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEX/////cn3/hI3/lZ7/p67/uL7/ys7/3N7/7e//9fb/+Pn/gIn/+vr/gov/tbv/fYf/4uT/0dT/xcn/qa//5+n/kJr/a3f/oan/rrX/1Nf/3+H/h5D/Z3P/m6T/bXj/kZr/vsT/Ym//doFhI0FgAAAEeklEQVR4nO3b6XaqMBQFYJUxiEyC4Ai37/+QF9BWMshQsYlxfz9b6cpemU4iXSwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD6Yl9pBEdipJ7shL+InZRiu1+swLBNfdmNewcnCzepqE2aO7ObMz/7Jd81oy27Q3OL1iraOZTdpXi4bsI7oym7UrLaChFvZjZpTGnIBV6swld2sGQV8F9adGMhu1nz880aQcHPWZ1d0M0HA1SrTZ61xj8KERyah6zhvMTW9NIrYpo9IGBunxr9jRf60uVP5TnE2amcr6vx0eJTuN5fL8uryZf19u0eLzLI0WpkR3PtiaKXxre94rZOh7BJkZ8ZdZtwn1cBusT0tKbtM0Yj20aD9ROzf8a3dkrEzJEXoF2VMQOP8M1D7qraIC1gPVBXnom+yAY2s+v5lX+VtXPiEyy8FV1Sn5BIaxk87H5+e0pMg4PJSyUnRpxAkzO6HwIcnYH4Wto5SQvTxzoIuLIv7Bx7dYggH6XL5T0KGfqkgYL3WdD4hvonyVsKAy5NyBVwkTEiv+qLbRBI+SKjcXdWYhCIPEx7+oNGTuMKA+eBz3vFBQvWOVsKVZsTGnYtXmtPrWzyVxZU0dcIRkykR7hYXBes24UQc8RwRJ1TxOjXgOrEc1cytaJhuXt3a3yBswKwYfqjmfQm6cP/ixv4Os+ln25HV857rRCWPFo303BmoZTH6eJAwEXdbRU/A9UCtjKwtwMvSmLJU7L86GS87VXuwReLmKiq3JtZc3na3u1zjnYxo+PPviCT5MQxXhqVcxT0jjxBdv+EHgDlovkh4sVWYZmHFuoa089xs5bl2L8k0SHDL12YM5rmq9tyWEmOCFCZlfLn9mE/cG6JABV6ZjOrpP+m7HdIjRjmbMH+6bnYpc7TyGQEb0DSffUuG0AklfwdFuC6sO/HJNrmuSp3oiBI+dx3vsQnlLqi2KOFzmyJhE8odpkj4C4ol1H8e6r+W6r8ffkBNo39d+gFnC/3Phwv9z/iLD7inaWh+1wYAADCNH9mVZVWx/DPBixyqILBqQZBMzei50eFwSGWfBwfEbbyrYNIrsH7q3EQqF0d2J+C0iL7ToW437qmAdcTRA5UKqG5EYrGSsY+mdELlXvG+YbtwfCd6DkPNldhPuD4MRr6957IJ1XyzjR+k9b447tGITeiocD/DcblBWhv36IFLqOSO8QEJfz9K+YRKjlK/4lca9u7NryuziL/lTdmAim4XMb9b0Gsi2SeJbdtJsme2dMImVPQtWn4iVlRvRfYdsx2wi6mSg3TBlqVsYdoNyEZktnw1N/xFMxPpypva712bRqegxqmiY7ThdSMyy4zNoh8lB/V7sOHbwS1jYNH/15NyCdmectvJeEhVnYPf3LiqD/gWt1zuuYT8fzb5nqd6vFbz7R//vR8XkB2mby/hAo4+PL4J/RPqP0rHrDTvbXi3eHu6D9Khqk0LfZW3JnpOT7p4eALWyINbDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgLfyH0sVUMDlGRUNAAAAAElFTkSuQmCC',
                }}
                onPress={onNextPressed}
                style={{
                  height: 100,
                  width: 100,
                  alignSelf: 'center',
                  
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({});
export default Homepage;
