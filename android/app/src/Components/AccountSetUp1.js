import React, {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  Image,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {useSelector} from 'react-redux';
import {
  responsiveHeight as vh,
  responsiveWidth as vw,
  responsiveFontSize as vf,
} from 'react-native-responsive-dimensions';
import IconFa from 'react-native-vector-icons/MaterialCommunityIcons';
import {SearchBar} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Icon, Input} from 'react-native-elements';
import {API_URL, URL} from '../../../../Config';
import axios from 'axios';

import DocumentPicker from 'react-native-document-picker';
import {PermissionsAndroid} from 'react-native';
import * as RNFS from 'react-native-fs';
// import IconFa from 'react-native-vector-icons/MaterialIcons';

const AccountSetUp1 = () => {
  //  const [name, setName] = useState('');
  //  const [number, setNumber] = useState('');
  //  const [email, setEmail] = useState('');
  //  const [gender, setGender] = useState('');
  //  const [location, setLocation] = useState('');
  //  const [msgs, setMsgs] = useState([]);
  const [text, onChangeText] = React.useState(null);

  const token = useSelector(reduxState => reduxState?.login?.user?.accessToken);
  console.log('token', token);
  const navigation = useNavigation();

  const route = useRoute();
  const countryName = route?.params?.countryName;

  const onNextPressed12 = () => {
    navigation.navigate('PhotoScreen');
  };

  // const getUsersData = async () => {
  //   if (token) {
  //     try {
  //       const res = await axios({
  //         url: API_URL + 'user/user/getProfile',
  //         method: 'GET',
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });
  //       if (res) {
  //         console.log('Users data', res?.data?.users);
  //         setUserDetail(res?.data?.user);
  //       }
  //     } catch (error) {
  //       console.log('profile data error', error);
  //     }
  //   }
  // };

  // const submitUserProfileData = async () => {
  //   try {
  //     const res = await axios({
  //       url: API_URL + 'admin/user',
  //       method: 'POST',
  //       data: {
  //         ...userDetail,
  //       },
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //     if (res) {
  //       console.log('update users res', res);
  //       navigation.navigate('homepage');
  //     }
  //   } catch (error) {
  //     console.log('submit user data', error);
  //   }
  // };
  // useEffect(() => {
  //   getUsersData();
  // }, [token]);

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

  const _renderItem = ({item, index}) => {
    return (
      <View style={styles.uppersection1}>
        <View>
          <Image
            source={{
              uri: item.img,
            }}
            style={{
              height: vh(20),
              width: 70,
              borderRadius: 40,
            }}
          />
        </View>
        <View>
          <Text style={{fontSize: 15, marginTop: 10}}>{item.msg}</Text>
        </View>
        <View>
          <Text style={{fontSize: 18, color: 'black', marginTop: 20}}>
            {item.name}
          </Text>
        </View>
        <View>
          {item.new && (
            <View
              style={{
                height: 30,
                width: 30,
                borderRadius: 40,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  alignSelf: 'center',
                  color: '#fe5e75',
                  marginTop: 10,
                }}>
                <IconFa name="circle-outline" style={{fontSize: 20}} />
              </Text>
            </View>
          )}
          <Text style={{marginTop: 10, fontSize: 18}}>{item.time}</Text>
        </View>
      </View>
    );
  };

  const location = route?.params?.countryName;

  const _id = route?.params?._id;
  console.log(route);

  const [userDetail, setUserDetail] = useState({
    name: '',
    email: '',
    phoneNo: '',
    gender: '',
    location: '',
    profilePic: '',
  });

  const getUser = async () => {
    if (_id) {
      try {
        const res = await axios({
          url: API_URL + `admin/user/${_id}`,
          method: 'GET',
        });

        if (res) {
          console.log('getUser res', res);
          setUserDetail(res?.data?.results);
        }
      } catch (error) {
        console.log('getUser error', error);
      }
    }
  };

  const [isTrue, setIsTrue] = useState(false);

  const accessToken = useSelector(
    reduxState => reduxState?.login?.user?.accessToken,
  );

  const updateUser = async () => {
    if (_id) {
      try {
        const res = await axios({
          url: API_URL + `admin/user/${_id}`,
          method: 'PUT',
          data: {
            name: userDetail?.name,
            email: userDetail?.email,
            phoneNo: userDetail?.phoneNo,
            gender: userDetail?.gender,
            location,
            profilePic: imageUri,
          },
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (res) {
          console.log('updateUser ress', res);

          navigation.navigate('PhotoScreen');
        }
      } catch (error) {
        console.log('updateUser error', error);
      }
    }
  };

  useEffect(() => {
    if (_id) {
      getUser();
    }
  }, [_id]);

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <View>
            <Text style={styles.upperSection}>
              <IconFa
                name="arrow-left"
                style={{fontSize: 25, color: '#fe5e75'}}
              />
              <Text style={{paddingLeft: 10, color: 'black'}}>
                Fill Your Profile
              </Text>
            </Text>
          </View>

          <View style={{alignSelf: 'center'}}>
            <View style={{}}>
              <Image
                source={{
                  uri: imageUri
                    ? imageUri
                    : 'https://i.pinimg.com/236x/47/5a/86/475a86177aeedacf8dc7f5e2b4eff61f.jpg',
                }}
                style={{
                  height: vh(15),
                  width: vw(30),
                  borderRadius: 100,
                  // marginTop: 20,
                  alignSelf: 'center',
                  borderWidth: 1,
                  borderColor: '#fe5e75',
                }}
              />
            </View>
            <TouchableOpacity
              onPress={selectAllFiles}
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
              <IconFa
                name="square-edit-outline"
                style={{fontSize: vf(2.5), color: 'white'}}
              />
            </TouchableOpacity>
          </View>
          <Text style={{textAlign: 'center', fontSize: 20, color: 'black'}}>
            {userDetail?.name}
          </Text>
          <View style={styles.input}>
            <View>
              <View>
                <Text
                  style={{
                    alignSelf: 'flex-start',
                    marginLeft: 25,
                    flexDirection: 'row',
                    fontWeight: '500',
                    marginTop: 5,
                  }}>
                  Full Name:
                </Text>
              </View>

              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  margin: 12,
                  borderWidth: 0.5,
                  height: vh(5),
                  borderRadius: 20,
                }}>
                <View>
                  <TextInput
                    placeholder="Full Name"
                    editable
                    maxLength={40}
                    onChangeText={e => {
                      console.log(e);
                      setUserDetail({
                        ...userDetail,
                        name: e,
                      });
                    }}
                    value={userDetail?.name}
                  />
                </View>

                <IconFa style={{marginTop: 15, paddingLeft: 200}} />
              </View>
            </View>
            <View>
              <View>
                <Text
                  style={{
                    alignSelf: 'flex-start',
                    marginLeft: 25,
                    flexDirection: 'row',
                    fontWeight: '500',
                    marginTop: 5,
                  }}>
                  Email:
                </Text>
              </View>

              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  // justifyContent: 'space-around',
                  margin: 12,
                  borderWidth: 0.5,
                  height: vh(5),
                  // padding: 10,
                  borderRadius: 20,
                }}>
                <View>
                  <TextInput
                    // style={{margi}}
                    placeholder="Email"
                    editable
                    maxLength={40}
                    onChangeText={txt => {
                      // setEmail(txt);
                      setUserDetail({
                        ...userDetail,
                        email: txt,
                      });
                    }}
                    value={userDetail?.email}
                  />
                </View>
                <View>
                  {/* <IconFa
                    name="email"
                    style={{marginTop: 9, paddingLeft: 200, fontSize: vf(2.5)}}
                  /> */}
                </View>
              </View>
            </View>
            <View>
              <View>
                <Text
                  style={{
                    alignSelf: 'flex-start',
                    marginLeft: 25,
                    flexDirection: 'row',
                    fontWeight: '500',
                    marginTop: 5,
                  }}>
                  Phone Number:
                </Text>
              </View>

              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  margin: 12,
                  borderWidth: 0.5,
                  height: vh(5),
                  // padding: 10,
                  borderRadius: 20,
                }}>
                <View>
                  <TextInput
                    // style={{margi}}
                    placeholder="Phone Number"
                    editable
                    maxLength={40}
                    onChangeText={txt => {
                      // setNumber(txt);
                      setUserDetail({
                        ...userDetail,
                        phoneNo: txt,
                      });
                    }}
                    value={userDetail?.phoneNo}
                  />
                </View>
                <View>
                  <IconFa
                    name="phone"
                    style={{marginTop: 9, paddingLeft: 150, fontSize: vf(2.5)}}
                  />
                </View>
              </View>
            </View>
            <View>
              <View>
                <Text
                  style={{
                    alignSelf: 'flex-start',
                    marginLeft: 25,
                    flexDirection: 'row',
                    fontWeight: '500',
                    marginTop: 5,
                  }}>
                  Gender:
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  margin: 12,
                  borderWidth: 0.5,
                  height: vh(5),
                  // padding: 10,
                  borderRadius: 20,
                }}>
                <View>
                  <TextInput
                    // style={{margi}}
                    placeholder="Gender"
                    editable
                    maxLength={40}
                    onChangeText={txt => {
                      // setGender(txt);
                      setUserDetail({
                        ...userDetail,
                        gender: txt,
                      });
                    }}
                    value={userDetail?.gender}
                  />
                </View>
                <View>
                  <IconFa
                    name="chevron-down"
                    style={{marginTop: 9, paddingLeft: 200, fontSize: vf(3)}}
                  />
                </View>
              </View>
            </View>
            <View>
              <View>
                <Text
                  style={{
                    alignSelf: 'flex-start',
                    marginLeft: 25,
                    flexDirection: 'row',
                    fontWeight: '500',
                    marginTop: 5,
                  }}>
                  Location:
                </Text>
              </View>

              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  margin: 12,
                  borderWidth: 0.5,
                  height: vh(5),
                  // padding: 10,
                  borderRadius: 20,
                }}>
                <View>
                  <TextInput
                    // style={{margi}}
                    placeholder="Location"
                    editable
                    maxLength={40}
                    onChangeText={txt => {
                      // setLocation(txt);
                      setUserDetail({
                        ...userDetail,
                        location: txt,
                      });
                    }}
                    value={location}
                  />
                </View>
                <View>
                  <IconFa
                    name="map-marker"
                    style={{marginTop: 9, paddingLeft: 200, fontSize: vf(2.5)}}
                  />
                </View>
              </View>
            </View>
          </View>

          {/* <FlatList data={msgs} renderItem={_renderItem} /> */}
          <TouchableOpacity
            onPress={() => {
              // navigation.navigate('PhotoScreen');
              updateUser();
            }}
            style={{
              backgroundColor: '#fe5e75',
              height: 50,
              // width:vw(90),
              margin: 10,
              borderRadius: 30,
            }}>
            <Text
              style={{
                textAlign: 'center',
                marginTop: 10,
                color: 'white',
                fontSize: 20,
              }}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  uppersection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  uppersection1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    padding: 5,
    borderWidth: 1,
    borderColor: '#B3B0B0',

    borderRadius: 10,
    margin: 15,
  },
  uppersection3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
  upperSection: {
    margin: 20,
    fontSize: 25,
    paddingLeft: 10,
  },
  input: {
    display: 'flex',
    // heigh/t:vh(90),
    margin: 8,
    padding: 10,
  },
  input2: {
    // height: 40,
  },
});
export default AccountSetUp1;
