import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  FlatList,
} from 'react-native';
import {
  responsiveHeight as vH,
  responsiveWidth as vW,
  responsiveFontSize as vF,
} from 'react-native-responsive-dimensions';
import {Button, ListItem} from 'react-native-elements';
import {useSelector, useDispatch} from 'react-redux';
import {Avatar, Accessory} from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import {CheckBox} from 'react-native-elements';
// import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import moment from 'moment';

// import DocFrame from './DocFrame';
// import ReactChipsInput from 'react-native-chips';
// import Input from '../../Component/Input';
// import DocumentPicker from 'react-native-document-picker';

// import {Config, URL} from '../../../Config';

import {PermissionsAndroid} from 'react-native';

// import ActionSheet from 'react-native-actions-sheet';
import axios from 'axios';
import {GiftedChat} from 'react-native-gifted-chat';
import Map from 'react-native-vector-icons/Feather';
import {Alert} from 'react-native';
import {CHAT_URL} from '../../../../Config';
import {useRoute} from '@react-navigation/native';
import Footer from '../Components/Footer';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const route = useRoute();
  const appt = route?.params?.appt;
  const pt = appt?.users[0];
  const userData = useSelector(reduxState => reduxState.login.user.user);
  const [state, setState] = useState();

  const firstmsg = {
    _id: 1,
    text: appt?.content,
    createdAt: moment(appt?.createdAt).toDate(),
    user: {
      _id: pt?._id,
      name: `Patient : ${pt?.privacy ? pt?.uid : pt?.name}`,
      avatar: 'https://placeimg.com/140/140/any',
    },
  };
  useEffect(() => {
    setMessages([firstmsg]);
  }, []);

  const onSend = useCallback(async (sentMsgs = []) => {
    console.log('user sentMsgs', sentMsgs);
    try {
      const res = await axios({
        url: CHAT_URL + '/user/message',
        method: 'POST',
        data: {
          sender_id: appt?.doctors[0]?._id,
          sendappt_id: appt?._id,
          user_id: pt?._id,
          message: sentMsgs[0].text,
          sentBy: 'sender',
        },
      });
      if (res) {
        console.log('chat response', res?.data);
      }
    } catch (error) {
      console.log('messages error', error);
    }
  }, []);

  const getMessages = async () => {
    // console.log('response. message appt', appt);
    // console.log('response. message appt pt', pt);

    try {
      const res = await axios({
        url: CHAT_URL + '/user/message',
        method: 'GET',
      });
      if (res) {
        // console.log('get messages response', res?.data);
        let myMsgs = res?.data?.message.map(item => {
          // console.log(
          //   'myitem',
          //   moment(item?.createdAt).toDate().toDateString(),
          //   new Date(),
          //   item?.createdAt,
          // );
          return {
            _id: item?._id,
            text: item?.message,
            createdAt: moment(item?.createdAt).toDate(),

            user: {
              _id:
                item?.sentBy == 'doctor'
                  ? item?.doctor_id[0]
                  : item?.user_id[0],
              name: `${item?.sentBy == 'doctor' ? 'Doctor' : 'Patient'} : ${
                pt?.privacy ? pt?.uid : pt?.name
              }`,
              avatar: 'https://placeimg.com/140/140/any',
            },
          };
        });
        setMessages(previousMessages => GiftedChat.append(firstmsg, myMsgs));
      }
    } catch (error) {
      console.log('get messages error', error);
    }
  };

  useEffect(() => {
    // useRef value stored in .current property
    let msgSync = setInterval(() => {
      getMessages();
    }, 1000);

    // clear on component unmount
    return () => {
      clearInterval(msgSync);
    };
  }, []);

  return (
    <View>
      <View style={{height: vH(97), width: vW(100)}}>
        <GiftedChat
          messages={messages}
          onSend={message => onSend(message)}
          user={{
            _id: appt?.doctors[0]?._id,
          }}
        />
      </View>
    </View>
  );
};
export default Chat;
