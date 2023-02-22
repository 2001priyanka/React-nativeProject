import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Button, StatusBar, StyleSheet, Text, View, Image} from 'react-native';
import Modal from 'react-native-modal';
import {Icon, Input} from 'react-native-elements';
import {useSelector} from 'react-redux';
import {
  responsiveHeight as vh,
  responsiveWidth as vw,
  responsiveFontSize as vf,
} from 'react-native-responsive-dimensions';
import IconFa from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {API_URL, URL} from '../../../../Config';
import RangeSlider from 'react-native-range-slider';

import DocumentPicker from 'react-native-document-picker';
import {PermissionsAndroid} from 'react-native';
import * as RNFS from 'react-native-fs';
import axios from 'axios';

function ModalTester() {
  // const [userData, setUsersData] = useState({
  //   name: '',
  //   email: '',
  //   address1: '',
  //   mobile: '',
  //   gender:'',
  //   age:'',
  //   intrest:'',
  //   about:'',
  // });
  // const token = useSelector(reduxState => reduxState?.signin?.user?.accessToken)

  // const getUsersData = async()=>{
  //   if(token){
  //     try {
  //       const res = await axios({
  //         url: API_URL + '/user/user/getProfile',
  //         method: 'GET',
  //         Headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });
  //       if(res){
  //         console.log('users data in edit profile', res?.data?.user);
  //         setUsersData(res?.data?.user);
  //       }
  //     } catch (error) {
  //       console.log('profile data error', error)
  //     }
  //   }
  // };

  // const updateProfile = async () =>{
  //   if(token){
  //     try{
  //       const res = await axios({
  //         url:API_URL +
  //       })
  //     }
  //   }
  // }
  // useEffect(()=>{
  //   getUsersData();
  // },[token]);
  const navigation = useNavigation();
  const onNextPressed15 = () => {
    navigation.navigate('SignIn1');
  };
  const onNextPressed16 = () => {
    navigation.navigate('EditBiodata');
  };
  const onNextPressed17 = () => {
    navigation.navigate('AccountSetUp2');
  };
  const onNextPressed18 = () => {
    navigation.navigate('EditContactDetails');
  };
  const onNextPressed19 = () => {
    navigation.navigate('InvitePage');
  };
  const onNextPressed20 = () => {
    navigation.navigate('HomeScreens');
  };
  const onNextPressed21 = () => {
    navigation.navigate('PhotoScreen');
  };
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const user = useSelector(reduxState => reduxState?.login?.user?.user?._id);
  const userDetail = useSelector(
    reduxState => reduxState?.login?.user?.user?.profilePic,
  );
  console.log('details', userDetail);
  const name = useSelector(reduxState => reduxState?.login?.user?.user?.name);
  console.log(name);
  const token = useSelector(reduxState => reduxState?.login?.user?.accessToken);

  const updateUserData = async () => {
    if (user) {
      try {
        const res = await axios({
          url: API_URL + `admin/user/${user}`,
          method: 'PUT',
          data: {
            // ...userData,
            // name: userData?.name,
            // email: userData?.email,
            // about: userData?.about,
            // address1: userData?.address1,
            // gender: userData?.gender,
            // age: userData?.age,
            profilePic: imageUri,
          },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (res) {
          console.log('updateUserData res', res);
          navigation.navigate('ProfilePage');
        }
      } catch (error) {
        console.log('updateUserData error', error);
      }
    } else {
      Alert.alert('Required Fields Missing!');
    }
  };

  //different usestates for saving data
  const [files, setFiles] = useState([]);
  const [file, setFile] = useState(null);
  const [imageUri, setimageUri] = useState(null);

  // code to upload photo
  const requestCameraPermission = async () => {
    try {
      // const granted = await PermissionsAndroid.request(
      //   PermissionsAndroid.PERMISSIONS.CAMERA,
      //   {
      //     title: 'App Camera Permission',
      //     message: 'App needs access to your camera ',
      //     buttonNeutral: 'Ask Me Later',
      //     buttonNegative: 'Cancel',
      //     buttonPositive: 'OK',
      //   },
      // );
      // if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      const grants = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        // PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        PermissionsAndroid.PERMISSIONS.CAMERA,
        // PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        // PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
      ]);
      if (
        grants['android.permission.CAMERA'] ===
          PermissionsAndroid.RESULTS.GRANTED &&
        grants['android.permission.WRITE_EXTERNAL_STORAGE'] ===
          PermissionsAndroid.RESULTS.GRANTED &&
        grants['android.permission.READ_EXTERNAL_STORAGE'] ===
          PermissionsAndroid.RESULTS.GRANTED &&
        grants['android.permission.RECORD_AUDIO'] ===
          PermissionsAndroid.RESULTS.GRANTED
      ) {
        console.log('Camera permission given');
        // const options = {
        //   storageOptions: {
        //     path: 'images',
        //     mediaType: 'photo',
        //   },
        //   includeBase64: true,
        // };
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const selectAllFiles = async () => {
    setimageUri(null);
    setFiles(null);
    setFile(null);
    requestCameraPermission();
    //Opening Document Picker for selection of one file
    try {
      const res = await DocumentPicker.pickMultiple({
        type: [DocumentPicker.types.allFiles],
        allowMultiSelection: true,
      });
      //Printing the log realted to the file
      console.log('123asdrfvbgt res x: ', res);
      console.log('123asdrfvbgt typeof res : ' + typeof res);
      console.log('123asdrfvbgt URI : ' + res[0].uri);
      console.log('123asdrfvbgt Type : ' + res[0].type);
      console.log('123asdrfvbgt File Name : ' + res[0].name);
      console.log('123asdrfvbgt File Size : ' + res[0].size);
      setimageUri(res[0].uri);

      if (res[0]) {
        updateUserData();
      }

      // if (res[0]) {
      //   navigation.navigate('newPost', {
      //     imguri: res[0].uri,
      //   });
      // }
      // setIsTrue(true);

      //Setting the state to show single file attributes
      setFiles(res[0]);
      console.log('123asdrfvbgt results>>', res);

      // uploadFile(res[0]);
    } catch (err) {
      //Handling any exception (If any)
      if (DocumentPicker.isCancel(err)) {
        //If user canceled the document selection
        alert('Canceled File Selection');
      } else {
        //For Unknown Error
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };

  const uploadFilesToAPI = async _id => {
    const data = files;
    // console.log('Config 9fb83f', Config);
    // Check if any file is selected or not
    var uploadUrl = `${URL}/upload`; // For testing purposes, go to http://requestb.in/ and create your own link
    try {
      // create an array of objects of the files you want to upload
      var filesArr = [];
      // files.map(async (item, index) => {
      if (files.uri.startsWith('content://')) {
        const urlComponents = files.uri.split('/');
        // const fileNameAndExtension = urlComponents[urlComponents.length - 1];
        const destPath = `${RNFS.ExternalCachesDirectoryPath}/${files.name}.${
          MimeTypeMap[files.type]
        }`;

        filesArr.push({
          name: files.name + MimeTypeMap[files.type],
          // name: 'file',
          filename: files.name + MimeTypeMap[files.type],
          filepath: destPath,
          filetype: files.type,
          uri: files?.uri,
          type: files.type,
        });
        await RNFS.copyFile(files.uri, destPath);
      }
      // });

      var uploadBegin = response => {
        var jobId = response.jobId;
        console.log('UPLOAD HAS BEGUN! JobId: ' + jobId, filesArr);
      };
      // uploadFiles;
      var uploadProgress = response => {
        var percentage = Math.floor(
          (response.totalBytesSent / response.totalBytesExpectedToSend) * 100,
        );
        console.log('UPLOAD IS ' + percentage + '% DONE!');
      };
      RNFS.uploadFiles({
        toUrl: uploadUrl,
        files: filesArr,
        method: 'POST',
        headers: {
          Accept: '*/*',
          // 'Content-Type': 'multipart/form-data',
        },
        fields: {
          // name: 'MHN1.mp3',
          model_id: _id,
          model: 'transaction',
          model_key: 'screenshot',
          // user_id: doc.id,
          // reqType: 'FCM_BCAST',
        },
        begin: uploadBegin,
        progress: uploadProgress,
      })
        .then(response => {
          console.log('responseZZZ1', response);
          if (response.statusCode == 200) {
            console.log('FILES UPLOADED!'); // response.statusCode, response.headers, response.body
            Alert.alert('Purchase Successful!!');
            navigation.navigate('home');
          } else {
            console.log('SERVER ERROR');
          }
        })
        .catch(err => {
          if (err.description === 'cancelled') {
            // cancelled by user
          }
          console.log(err);
        });
    } catch (error) {
      console.log('UPLOADS', error);
    }
    if (data != null && data?.length > 0 && false) {
      // If file selected then create FormData
      const fileToUpload = data;
      const form = new FormData();

      console.log('TextReq.js:290 58eef2 item', filesArr);
      filesArr.map((item, index) => {
        // form.append(`files[${index}]`, item);
        // console.log('TextReq.js:231 b3f667 ', {
        //   uri: item?.uri,
        //   name: 'image.jpg',
        //   type: 'image/jpeg',
        // });
      });
      // form.append('files', {
      //   uri: fileToUpload[0]?.uri,
      //   name: 'image.jpg',
      //   type: 'image/jpeg',
      // });
      // form.append('files[]', fileToUpload);
      form.append('files', filesArr);
      // form.append('files', fileToUpload[0]);
      // form.append('apiRoute', 'prescription');
      form.append('userId', doc._id);
      console.log('TextReq.js:227 9fb83f form', form);
      await axios({
        url: `${URL}/upload`,
        // url: 'http://3.16.156.10:3001/api/upload',
        //url: 'http://13.232.211.114:3000/api/upload',
        method: 'POST',
        data: form,
        headers: {
          'Content-Type': 'multipart/form-data; boundary=BOUNDARY',
          // 'Access-Control-Allow-Origin': '*',
          // 'Access-Control-Allow-Credentials': true,
        },
      })
        .then(res => {
          console.log('res.data >>> ' + res.data);
          if (res.data) {
            alert('File Upload Successfully!');
          }
        })
        .catch(err => {
          alert(err);
          console.log('err >>> ' + err);
        });
    }
  };

  return (
    <View style={styles.flexView}>
      <StatusBar />
      <View>
        <View style={styles.uppersection}>
          <View style={styles.uppersection}>
            <View>
              <IconFa
                name="heart-multiple"
                style={{fontSize: vf(4), color: '#fe5e75'}}
              />
            </View>
            <View style={{paddingRight: 120}}>
              <Text
                style={{fontSize: vf(2.5), paddingLeft: 10, color: 'black'}}>
                Profile
              </Text>
            </View>
          </View>
          <View style={styles.uppersection2}>
            <View
              style={{
                borderRadius: 50,
              }}>
              <IconFa
                name="playlist-edit"
                style={{
                  fontSize: 30,
                  color: '#fe5e75',
                }}
              />
            </View>
            <View
              style={{
                height: vh(5),
                borderRadius: 50,
              }}>
              <IconFa
                name="dots-vertical"
                style={{
                  paddingLeft: 10,
                  paddingRight: 10,
                  fontSize: 30,
                  color: '#fe5e75',
                }}
              />
            </View>
          </View>
        </View>
        <View style={{alignSelf: 'center'}}>
          <View>
            <Image
              source={{
                // uri: 'https://6.vikiplatform.com/image/f39b70cc709449058542b107d493cff7.jpg?x=b&a=0x0&s=460x268&e=t&f=t&cb=1',
                uri: userDetail,
              }}
              style={{
                height: vh(15),
                width: vw(30),
                borderRadius: 100,
                marginTop: 20,
                alignSelf: 'center',
              }}
            />
          </View>

          <View
            style={{
              backgroundColor: '#fe5e75',
              position: 'absolute',
              justifyContent: 'center',
              alignSelf: 'center',
              bottom: 0,
              right: 0,
              width: vw(6.5),
              height: vh(3.5),
              borderRadius: 10,
              color: 'white',
              paddingLeft: 3,
            }}>
            <TouchableOpacity onPress={selectAllFiles}>
              <IconFa
                name="square-edit-outline"
                style={{fontSize: vf(2.5), color: 'white'}}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text
            style={{
              textAlign: 'center',
              fontSize: vf(2.5),
              color: 'black',
              marginTop: 10,
            }}>
            {name}
          </Text>
        </View>
        <View style={{margin: 20}}>
          <View style={styles.uppersection1}>
            <View
              style={{
                backgroundColor: '#FFDBE9',
                width: vw(10),
                height: vh(5),
                borderRadius: 50,
                justifyContent: 'center',
              }}>
              <IconFa
                name="account"
                style={{
                  fontSize: vf(2.5),
                  color: '#fe5e75',
                  marginLeft: 10,
                }}
              />
            </View>
            <View>
              <Text
                style={{
                  paddingRight: 170,
                  fontSize: 18,
                  color: 'black',
                  marginTop: 4,
                }}
                onPress={onNextPressed16}>
                Edit Biodata
              </Text>
            </View>
            <View>
              <IconFa
                name="chevron-right"
                style={{fontSize: vf(2.5), color: '#fe5e75'}}
              />
            </View>
          </View>
          <View style={styles.uppersection1}>
            <View
              style={{
                backgroundColor: '#FFDBE9',
                width: vw(10),
                height: vh(5),
                borderRadius: 50,
                justifyContent: 'center',
              }}>
              <IconFa
                name="bell"
                style={{
                  fontSize: vf(2.5),
                  color: '#fe5e75',
                  marginLeft: 10,
                }}
              />
            </View>
            <View>
              <Text
                style={{
                  paddingRight: 170,
                  fontSize: 18,
                  color: 'black',
                  marginTop: 4,
                }}
                onPress={onNextPressed17}>
                Edit Interest
              </Text>
            </View>
            <View>
              <IconFa
                name="chevron-right"
                style={{fontSize: vf(2.5), color: '#fe5e75'}}
              />
            </View>
          </View>
          <View style={styles.uppersection1}>
            <View
              style={{
                backgroundColor: '#FFDBE9',
                width: vw(10),
                height: vh(5),
                borderRadius: 50,
                justifyContent: 'center',
              }}>
              <IconFa
                name="lock"
                style={{
                  fontSize: vf(2.5),
                  color: '#fe5e75',
                  marginLeft: 10,
                }}
              />
            </View>
            <View>
              <Text
                style={{
                  paddingRight: 100,
                  fontSize: 18,
                  color: 'black',
                  marginTop: 4,
                }}
                onPress={onNextPressed18}>
                Edit Contact Details
              </Text>
            </View>
            <View>
              <IconFa
                name="chevron-right"
                style={{fontSize: vf(2.5), color: '#fe5e75'}}
              />
            </View>
          </View>

          <View style={styles.uppersection1}>
            <View
              style={{
                backgroundColor: '#FFDBE9',
                width: vw(10),
                height: vh(5),
                borderRadius: 50,
                justifyContent: 'center',
              }}>
              <IconFa
                name="account-multiple"
                style={{
                  fontSize: vf(2.5),
                  color: '#fe5e75',
                  marginLeft: 10,
                }}
              />
            </View>
            <View>
              <Text
                style={{
                  paddingRight: 145,
                  fontSize: 18,
                  color: 'black',
                  marginTop: 4,
                }}
                onPress={onNextPressed19}>
                Invite Friends
              </Text>
            </View>
            <View>
              <IconFa
                name="chevron-right"
                style={{fontSize: vf(2.5), color: '#fe5e75'}}
              />
            </View>
          </View>
          <View style={styles.uppersection1}>
            <View
              style={{
                backgroundColor: '#FFDBE9',
                width: vw(10),
                height: vh(5),
                borderRadius: 50,
                justifyContent: 'center',
                alignSelf: 'center',
              }}>
              <IconFa
                name="logout"
                style={{
                  fontSize: vf(2.5),
                  color: '#fe5e75',
                  marginLeft: 10,
                }}
              />
            </View>
            <View>
              <Text
                style={{
                  paddingRight: 225,
                  fontSize: 18,
                  color: 'black',
                  marginTop: 8,
                }}
                onPress={toggleModal}>
                Logout
              </Text>
            </View>
          </View>
          <View style={styles.uppersection}>
            <TouchableOpacity>
              <View>
                <IconFa
                  name="home"
                  style={{fontSize: 25, color: '#fe5e75'}}
                  onPress={onNextPressed20}
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
      </View>

      <Modal
        onBackdropPress={() => setModalVisible(false)}
        onBackButtonPress={() => setModalVisible(false)}
        isVisible={isModalVisible}
        swipeDirection="down"
        onSwipeComplete={toggleModal}
        animationIn="bounceInUp"
        // animationOut="bounceOutDown"
        animationInTiming={900}
        animationOutTiming={500}
        backdropTransitionInTiming={900}
        backdropTransitionOutTiming={500}
        style={styles.modal}>
        <View style={styles.modalContent}>
          <View style={styles.center}>
            <View style={styles.barIcon} />
            <View>
              <IconFa
                name="logout"
                style={{fontSize: 40, marginTop: 30, color: '#fe5e75'}}
              />
            </View>
            <Text style={styles.text}>Are you sure want to logout</Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={styles.body1}>
                <Text
                  style={{
                    textAlign: 'center',
                    color: '#fe5e75',
                  }}>
                  Cancel
                </Text>
              </View>
              <View style={styles.body}>
                <TouchableOpacity>
                  <Text
                    style={{
                      textAlign: 'center',
                      color: 'white',
                      fontSize: 18,
                    }}
                    onPress={onNextPressed15}>
                    Yes, Logout
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default ModalTester;

const styles = StyleSheet.create({
  flexView: {
    flex: 1,
    backgroundColor: 'white',
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    backgroundColor: 'white',
    paddingTop: 12,
    paddingHorizontal: 12,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    minHeight: 200,
    paddingBottom: 20,
  },
  center: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  barIcon: {
    width: 60,
    height: 5,
    backgroundColor: '#bbb',
    borderRadius: 3,
  },
  text: {
    color: 'black',
    fontSize: vf(2.5),
    marginTop: 30,
  },
  btnContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 500,
  },
  body: {
    color: 'black',
    fontSize: 15,
    height: 50,
    width: vh(15),
    backgroundColor: '#fe5e75',
    borderRadius: 30,
    borderColor: '#fe5e75',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  body1: {
    fontSize: 15,
    height: 50,
    width: vh(15),
    borderWidth: 2,
    borderRadius: 30,
    borderColor: '#fe5e75',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    // paddingLeft:20,
  },
  uppersection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    // paddingRight:20,
  },
  uppersection2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    paddingLeft: 20,
    // margin:30,
  },
  uppersection1: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    borderBottomWidth: 0.5,
    height: 50,
    margin: 5,
  },
});
