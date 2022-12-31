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

const InvitePage = () => {
  const [text, onChangeText] = React.useState(null);
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <View>
            <Text style={styles.uppersection}>
              <IconFa
                name="arrow-left"
                style={{fontSize: 25, color: '#fe5e75'}}
              />
              <Text style={{color: 'black', fontSize: 25}}>Invite Friends</Text>
            </Text>
          </View>
          <View style={styles.uppersection1}>
            <View>
              <Image
                source={{
                  uri: 'https://6.vikiplatform.com/image/f39b70cc709449058542b107d493cff7.jpg?x=b&a=0x0&s=460x268&e=t&f=t&cb=1',
                }}
                style={{
                  height: 80,
                  width: 80,
                  borderRadius: 20,
                }}
              />
            </View>
            <View>
              <Text style={{fontSize: 18, color: 'black', marginTop: 20}}>
                Brendan Foster
              </Text>
              <Text style={{fontSize: 15}}>+2342983234</Text>
            </View>
            <View>
              <Text
                style={{
                  textAlign: 'center',
                  marginTop: 30,
                  color: '#fe5e75',
                  fontSize: 18,
                  borderWidth: 1.5,
                  borderColor: '#fe5e75',
                  height: 30,
                  width: 70,
                  borderRadius: 15,
                }}>
                Invite
              </Text>
            </View>
          </View>
          <View style={styles.uppersection1}>
            <View>
              <Image
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNbPyNdsZ_77IshR1HUkl_r5ducV6WvbZSbiMMNgrBO5B1fHYjWvblMhWee_-Tj0qgjsw&usqp=CAU',
                }}
                style={{
                  height: 80,
                  width: 80,
                  borderRadius: 20,
                }}
              />
            </View>
            <View>
              <Text style={{fontSize: 18, color: 'black', marginTop: 20}}>
                James Howard
              </Text>
              <Text style={{fontSize: 15}}>+2342983234</Text>
            </View>
            <View>
              <Text
                style={{
                  backgroundColor: '#fe5e75',
                  textAlign: 'center',
                  marginTop: 30,
                  color: 'white',
                  fontSize: 18,
                  // borderWidth: 1.5,
                  // borderColor: '#fe5e75',
                  height: 30,
                  width: 70,
                  borderRadius: 15,
                }}>
                Invite
              </Text>
            </View>
          </View>
          <View style={styles.uppersection1}>
            <View>
              <Image
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj5DqYagSZdlzTJ4t_cdcvacMgJMHmseEHCQ&usqp=CAU',
                }}
                style={{
                  height: 80,
                  width: 80,
                  borderRadius: 20,
                }}
              />
            </View>
            <View>
              <Text style={{fontSize: 18, color: 'black', marginTop: 20}}>
                Nathalia Barber
              </Text>
              <Text style={{fontSize: 15}}>+2342983234</Text>
            </View>
            <View>
              <Text
                style={{
                  backgroundColor: '#fe5e75',
                  textAlign: 'center',
                  marginTop: 30,
                  color: 'white',
                  fontSize: 18,
                  // borderWidth: 1.5,
                  // borderColor: '#fe5e75',
                  height: 30,
                  width: 70,
                  borderRadius: 15,
                }}>
                Invite
              </Text>
            </View>
          </View>
          <View style={styles.uppersection1}>
            <View>
              <Image
                source={{
                  uri: 'https://play-lh.googleusercontent.com/UHhUtvrLMheJFA1xPm8ZZt4qVjygbb2D1fi9MIbkfHb1bHtcDX9JeAgqmysK9qoHNM9a=w240-h480-rw',
                }}
                style={{
                  height: 80,
                  width: 80,
                  borderRadius: 20,
                }}
              />
            </View>
            <View>
              <Text style={{fontSize: 18, color: 'black', marginTop: 20}}>
                Julianna Mcpherson
              </Text>
              <Text style={{fontSize: 15}}>+2342983234</Text>
            </View>
            <View>
              <Text
                style={{
                  textAlign: 'center',
                  marginTop: 30,
                  color: '#fe5e75',
                  fontSize: 18,
                  borderWidth: 1.5,
                  borderColor: '#fe5e75',
                  height: 30,
                  width: 70,
                  borderRadius: 15,
                }}>
                Invite
              </Text>
            </View>
          </View>
          <View style={styles.uppersection1}>
            <View>
              <Image
                source={{
                  uri: 'https://i0.wp.com/www.wonderslist.com/wp-content/uploads/2021/05/Cha-Eun-woo-Most-Handsome-Korean-Actors-2021.jpg',
                }}
                style={{
                  height: 80,
                  width: 80,
                  borderRadius: 20,
                }}
              />
            </View>
            <View>
              <Text style={{fontSize: 18, color: 'black', marginTop: 20}}>
                Morgan Chaney
              </Text>
              <Text style={{fontSize: 15}}>+2342983234</Text>
            </View>
            <View>
              <Text
                style={{
                  backgroundColor: '#fe5e75',
                  textAlign: 'center',
                  marginTop: 30,
                  color: 'white',
                  fontSize: 18,
                  // borderWidth: 1.5,
                  // borderColor: '#fe5e75',
                  height: 30,
                  width: 70,
                  borderRadius: 15,
                }}>
                Invite
              </Text>
            </View>
          </View>
          <View style={styles.uppersection1}>
            <View>
              <Image
                source={{
                  uri: 'https://6.vikiplatform.com/image/f39b70cc709449058542b107d493cff7.jpg?x=b&a=0x0&s=460x268&e=t&f=t&cb=1',
                }}
                style={{
                  height: 80,
                  width: 80,
                  borderRadius: 20,
                }}
              />
            </View>
            <View>
              <Text style={{fontSize: 18, color: 'black', marginTop: 20}}>
                James Howard
              </Text>
              <Text style={{fontSize: 15}}>+2342983234</Text>
            </View>
            <View>
              <Text
                style={{
                  textAlign: 'center',
                  marginTop: 30,
                  color: '#fe5e75',
                  fontSize: 18,
                  borderWidth: 1.5,
                  borderColor: '#fe5e75',
                  height: 30,
                  width: 70,
                  borderRadius: 15,
                }}>
                Invite
              </Text>
            </View>
          </View>
          <View style={styles.uppersection1}>
            <View>
              <Image
                source={{
                  uri: 'https://6.vikiplatform.com/image/f39b70cc709449058542b107d493cff7.jpg?x=b&a=0x0&s=460x268&e=t&f=t&cb=1',
                }}
                style={{
                  height: 80,
                  width: 80,
                  borderRadius: 20,
                }}
              />
            </View>
            <View>
              <Text style={{fontSize: 18, color: 'black', marginTop: 20}}>
                James Howard
              </Text>
              <Text style={{fontSize: 15}}>+2342983234</Text>
            </View>
            <View>
              <Text
                style={{
                  textAlign: 'center',
                  marginTop: 30,
                  color: '#fe5e75',
                  fontSize: 18,
                  borderWidth: 1.5,
                  borderColor: '#fe5e75',
                  height: 30,
                  width: 70,
                  borderRadius: 15,
                }}>
                Invite
              </Text>
            </View>
          </View>
          <View style={styles.uppersection1}>
            <View>
              <Image
                source={{
                  uri: 'https://6.vikiplatform.com/image/f39b70cc709449058542b107d493cff7.jpg?x=b&a=0x0&s=460x268&e=t&f=t&cb=1',
                }}
                style={{
                  height: 80,
                  width: 80,
                  borderRadius: 20,
                }}
              />
            </View>
            <View>
              <Text style={{fontSize: 18, color: 'black', marginTop: 20}}>
                James Howard
              </Text>
              <Text style={{fontSize: 15}}>+2342983234</Text>
            </View>
            <View>
              <Text
                style={{
                  textAlign: 'center',
                  marginTop: 30,
                  color: '#fe5e75',
                  fontSize: 18,
                  borderWidth: 1.5,
                  borderColor: '#fe5e75',
                  height: 30,
                  width: 70,
                  borderRadius: 15,
                }}>
                Invite
              </Text>
            </View>
          </View>
          <View style={styles.uppersection1}>
            <View>
              <Image
                source={{
                  uri: 'https://6.vikiplatform.com/image/f39b70cc709449058542b107d493cff7.jpg?x=b&a=0x0&s=460x268&e=t&f=t&cb=1',
                }}
                style={{
                  height: 80,
                  width: 80,
                  borderRadius: 20,
                }}
              />
            </View>
            <View>
              <Text style={{fontSize: 18, color: 'black', marginTop: 20}}>
                James Howard
              </Text>
              <Text style={{fontSize: 15}}>+2342983234</Text>
            </View>
            <View>
              <Text
                style={{
                  textAlign: 'center',
                  marginTop: 30,
                  color: '#fe5e75',
                  fontSize: 18,
                  borderWidth: 1.5,
                  borderColor: '#fe5e75',
                  height: 30,
                  width: 70,
                  borderRadius: 15,
                }}>
                Invite
              </Text>
            </View>
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
    // paddingLeft: 30,
    padding: 20,
    // borderWidth: 1,
  },
  uppersection1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    // paddingLeft: 30,
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 10,
    margin: 15,
  },
});
export default InvitePage;
