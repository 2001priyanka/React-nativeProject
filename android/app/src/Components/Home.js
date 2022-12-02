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
  Button,
} from 'react-native';
import IconFa from 'react-native-vector-icons/MaterialCommunityIcons';

const Home1 = () => {
  // const [text, onChangeText] = React.useState(null);
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <ScrollView horizontal={true}>
            <View>
              <Image
                source={{
                  uri: 'https://cdn.popbela.com/content-images/post/20190710/untitled-design-5-c6cf2aacbad735462f497daa5c611f4f.jpg',
                }}
                style={{
                  height: 300,
                  width: 250,
                  borderRadius: 30,
                  marginLeft: 100,
                  // marginRight: 40,
                  marginTop: 50,
                }}
              />
            </View>
            <View>
              <Image
                source={{
                  uri: 'https://awsimages.detik.net.id/community/media/visual/2022/02/28/model-rambut-pendek-wanita-ala-artis-korea.jpeg?w=1200',
                }}
                style={{
                  height: 300,
                  width: 250,
                  borderRadius: 30,
                  marginLeft: 30,
                  // marginRight: 40,
                  marginTop: 50,
                }}
              />
            </View>
            <View>
              <Image
                source={{
                  uri: 'https://i.pinimg.com/originals/b7/bd/74/b7bd74c610800cdc0e28d22c2b5c0e6c.jpg',
                }}
                style={{
                  height: 300,
                  width: 250,
                  borderRadius: 30,
                  marginLeft: 30,
                  // marginRight: 40,
                  marginTop: 50,
                }}
              />
            </View>
          </ScrollView>
          <View>
            <Text
              style={{
                fontSize: 25,
                padding: 40,
                margin: 20,
                textAlign: 'center',
                color: 'black',
                marginTop: 30,
              }}>
              Find People who <Text style={{color: '#D56AAC'}}>match</Text> with
              you
            </Text>
          </View>
          <View>
            <Text
              style={{textAlign: 'center', marginTop: 100, color: '#D56AAC'}}>
              Skip
            </Text>
          </View>
          <View
            style={{
              backgroundColor: '#D56AAC',
              height: 50,
              margin: 20,
              borderRadius: 30,
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 20,
                marginTop: 12,
                color: 'white',
              }}>
              Next
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({});
export default Home1;
