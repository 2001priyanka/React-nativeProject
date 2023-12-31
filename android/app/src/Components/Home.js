import React, {useState} from 'react';
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
import {
  responsiveHeight as vh,
  responsiveWidth as vw,
  responsiveFontSize as vf,
} from 'react-native-responsive-dimensions';
import AppIntroSlider from 'react-native-app-intro-slider';
import IconFa from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Home1 = () => {
  const navigation = useNavigation();
  const onNextPressed1 = () => {
    navigation.navigate('SignIn');
  };
  const onNextPressed2 = () => {
    navigation.navigate('SignIn');
  };

  const [showRealApp, setShowRealApp] = useState(false);
  const onDone = () => {
    setShowRealApp(true);
    //  onPress = {onNext2Pressed};
  };
  const RenderNextButton = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          alignItems: 'center',
          backgroundColor: '#808B96',
          width: vw(30),
          height: vh(6),
          borderRadius: 10,
        }}>
        <Text style={{color: 'white', fontSize: vf(2.5), fontWeight: '600'}}>
          Next
        </Text>
      </View>
    );
  };
  const slides = [
    {
      key: 's1',
      text: 'Skip',
      title: 'Find People who match with you',
      image: {
        uri: 'https://www.globalgranary.life/wp-content/uploads/2019/04/KimSoHyun-e1556528908202.jpg',
      },
      backgroundColor: '#fe5e75',
    },
    {
      key: 's2',
      title: 'Find People who match with you',
      // text: 'Upto 25% off on Domestic Flights',
      text: 'Skip',
      image: {
        uri: 'https://media.theindependent.sg/wp-content/uploads/2022/10/16111924/452126-han-so-hee-and-her-appearances-in-korean-dramas.jpg',
      },
      backgroundColor: '#fe5e75',
      height: vh(100),
    },
    {
      key: 's3',
      title: 'Find People who match with you',
      text: 'Skip',
      image: {
        uri: 'https://images.saymedia-content.com/.image/t_share/MTc1MTE0NTkzNjkyNDkzNjM2/top-10-most-successful-beautiful-korean-drama-actresses.jpg',
      },
      backgroundColor: '#fe5e75',
    },
  ];

  const RenderDoneButton = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          alignItems: 'center',
          backgroundColor: '#808B96',
          width: vw(30),
          height: vh(6),
          borderRadius: 10,
        }}>
        <Text
          style={{color: 'white', fontSize: vf(2.5), fontWeight: '600'}}
          onPress={onNextPressed1}>
          Done
        </Text>
      </View>
    );
  };
  const RenderItem = ({item}) => {
    return (
      <>
        <View
          style={{
            flex: 1,
            backgroundColor: item.backgroundColor,
            height: item.height,
            alignItems: 'center',
            justifyContent: 'space-around',
            paddingBottom: 100,
          }}>
          <Text style={styles.introTitleStyle2} onPress={onNextPressed2}>
            {item.text}
          </Text>
          <View>
            <Image
              style={styles.introImageStyle1}
              source={item.image}
              // onPress={onNext2Pressed}
            />
          </View>
          <View style={{backgroundColor: '#fff', borderRadius: 5}}>
            <Text style={styles.introTitleStyle}>{item.title}</Text>
          </View>
        </View>
      </>
    );
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          {showRealApp ? (
            <SafeAreaView>
              <View></View>
            </SafeAreaView>
          ) : (
            <AppIntroSlider
              data={slides}
              renderItem={RenderItem}
              // onPress={onNext2Pressed}
              onDone={onDone}
              renderDoneButton={RenderDoneButton}
              renderNextButton={RenderNextButton}
            />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home1;

const styles = StyleSheet.create({
  titleStyle: {
    padding: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  paragraphStyle: {
    // padding: 20,
    textAlign: 'center',
    fontSize: 16,
  },
  introImageStyle1: {
    width: vw(70),
    height: vh(50),
    borderRadius: 30,
    borderWidth: 3,
    borderColor: '#fff',

    // marginBottom: 75,
  },
  introImageStyle: {
    width: vw(80),
    height: vh(80),
    borderRadius: 30,
    // marginBottom: 100,
  },
  introTextStyle: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    paddingVertical: 30,
  },
  introTitleStyle1: {
    fontSize: 20,
    color: 'white',
    textAlign: 'right',
    marginLeft: 300,
    fontWeight: 'bold',
    margin: 30,
  },
  introTitleStyle2: {
    fontSize: 20,
    color: 'white',
    alignSelf: 'flex-end',
    marginTop: 20,
    width: vw(20),
    height: vh(4),
    margin: 30,
    backgroundColor: '#808B96',
    borderRadius: 20,
    textAlign: 'center',
  },
  introTitleStyle: {
    // flex: 1,
    fontSize: vf(2.5),
    color: 'black',
    textAlign: 'center',
    marginTop: 30,
    // height:vh(5),
    color: '#5D6D7E',

    margin: 30,
  },
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
