import React, {useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  Image,
  View,
  FlatList,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {
  responsiveHeight as vh,
  responsiveWidth as vw,
  responsiveFontSize as vf,
} from 'react-native-responsive-dimensions';
import DocumentPicker from 'react-native-document-picker';
import {PermissionsAndroid} from 'react-native';
import * as RNFS from 'react-native-fs';
import axios, {Axios} from 'axios';
import IconFa from 'react-native-vector-icons/MaterialCommunityIcons';
// import IconFa from 'react-native-vector-icons/MaterialIcons';
import Modal from 'react-native-modal';
import {API_URL, URL} from '../../../../Config';
import {useEffect} from 'react';
import MimeTypeMap from '../../../../MimeTypeMap';

const PhotoScreen = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const [image, setImage] = useState({
    image1: '',
    image2: '',
    image3: '',
    image4: '',
    image5: '',
    image6: '',
    image7: '',
    image8: '',
    image9: '',
  });

  const [files, setFiles] = useState([]);
  const [imageUri, setimageUri] = useState(null);
  const [photo, SetPhoto] = useState([
    {
      name: 'devwithsaad and new_javascript',
      id: '1',
      text: ' devwithsaad what is redux toolkit? Follow @nasir for more such content...',
      likes: '1,025',
      days: '3',
      img: 'https://miro.medium.com/max/1400/1*LyZcwuLWv2FArOumCxobpA.png',
    },
    {
      name: 'devwithsaad',
      id: '2',
      text: 'devwithsaad what is redux toolkit? Follow @devwithsaad for more such content...',
      likes: '1,000',
      days: '2',
      img: 'https://miro.medium.com/max/1400/0*KLsMk7RfsSQnW9WE',
    },
    {
      name: 'devwithsaad',
      id: '3',
      text: 'devwithsaad what is redux toolkit? Follow @devwithsaad for more such content...',
      likes: '1,000',
      days: '2',
      img: 'https://miro.medium.com/max/1400/0*KLsMk7RfsSQnW9WE',
    },
    {
      name: 'devwithsaad',
      id: '4',
      text: 'devwithsaad what is redux toolkit? Follow @devwithsaad for more such content...',
      likes: '1,000',
      days: '2',
      img: 'https://miro.medium.com/max/1400/0*KLsMk7RfsSQnW9WE',
    },
  ]);
  const navigation = useNavigation();
  const onNextPressed14 = () => {
    navigation.navigate('AccountSetUp2');
  };

  const route = useRoute();

  const usersData = route?.params?.userData;
  const imageUrl = route?.params?.imageUri;
  const location = route?.params?.location;

  const _id = route?.params?._id;

  const _renderItem = ({item, index}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <TouchableOpacity
          style={styles.body}
          onPress={e => {
            selectAllFiles(item);
            console.log('item', item);
          }}>
          <Image
            source={{
              uri:
                item == 1
                  ? image?.image1
                  : item == 2
                  ? image?.image2
                  : item == 3
                  ? image?.image3
                  : item == 4
                  ? image?.image4
                  : item == 5
                  ? image?.image5
                  : item == 6
                  ? image?.image6
                  : item == 7
                  ? image?.image7
                  : item == 8
                  ? image?.image8
                  : item == 9
                  ? image?.image9
                  : null,
            }}
            style={{height: vh(33), width: vw(40)}}
          />

          {/* <View
            style={{
              backgroundColor: '#fe5e75',
              width: 60,
              height: 60,
              borderRadius: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <IconFa
              name="plus"
              style={{
                // marginTop: 15,
                color: 'white',
              }}
              size={40}
            />
          </View> */}
        </TouchableOpacity>
      </View>
    );
  };
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

  const selectAllFiles = async item => {
    requestCameraPermission();
    console.log('item', item);
    //Opening Document Picker for selection of one file
    try {
      const res = await DocumentPicker.pickMultiple({
        type: [DocumentPicker.types.allFiles],
        allowMultiSelection: true,
      });
      //Printing the log realted to the file
      console.log('123asdrfvbgt res xxx: ', res);
      console.log('123asdrfvbgt typeof res : ' + typeof res);
      console.log('123asdrfvbgt URI : ' + res[0].uri);
      console.log('123asdrfvbgt Type : ' + res[0].type);
      console.log('123asdrfvbgt File Name : ' + res[0].name);
      console.log('123asdrfvbgt File Size : ' + res[0].size);
      console.log('123asdrfvbgt File id: ' + res[0]._id);
      setimageUri(res[0].uri);

      switch (item) {
        case 1:
          console.log('case 1', item);
          setImage({
            ...image,
            image1: res[0].uri,
          });
          break;
        case 2:
          setImage({
            ...image,
            image2: res[0].uri,
          });
          break;
        case 3:
          setImage({
            ...image,
            image3: res[0].uri,
          });
          break;
        case 4:
          setImage({
            ...image,
            image4: res[0].uri,
          });
          break;
        case 5:
          setImage({
            ...image,
            image5: res[0].uri,
          });
          break;
        case 6:
          setImage({
            ...image,
            image6: res[0].uri,
          });
          break;
        case 7:
          setImage({
            ...image,
            image7: res[0].uri,
          });
          break;
        case 8:
          setImage({
            ...image,
            image8: res[0].uri,
          });
          break;
        case 9:
          setImage({
            ...image,
            image9: res[0].uri,
          });
          break;

        default:
          break;
      }

      //Setting the state to show single file attributes

      setFiles([...files, ...res]);
      if (files[3]) {
        setIsTrue(true);
      }
      console.log('123asdrfvbgt results>>', res);
      console.log('files', files);
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
      files.map(async (item, index) => {
        if (item.uri.startsWith('content://')) {
          const urlComponents = item.uri.split('/');
          // const fileNameAndExtension = urlComponents[urlComponents.length - 1];
          const destPath = `${RNFS.ExternalCachesDirectoryPath}/${item.name}.${
            MimeTypeMap[item.type]
          }`;

          filesArr.push({
            name: item.name + MimeTypeMap[item.type],
            // name: 'file',
            filename: item.name + MimeTypeMap[item.type],
            filepath: destPath,
            filetype: item.type,
            uri: item?.uri,
            type: item.type,
          });
          await RNFS.copyFile(item.uri, destPath);
        }
      });
      var uploadBegin = response => {
        var jobId = response.jobId;
        // console.log('UPLOAD HAS BEGUN! JobId: ' + jobId, filesArr);
      };
      // uploadFiles;
      var uploadProgress = response => {
        var percentage = Math.floor(
          (response.totalBytesSent / response.totalBytesExpectedToSend) * 100,
        );
        // console.log('UPLOAD IS ' + percentage + '% DONE!');
      };
      uploadFiles({
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
          model: 'media',
          model_key: 'content',
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

  // new functions from admin panel
  const submitHandler = async () => {
    console.log('submitHandler called');
    if (postData.user_id != '') {
      console.log('CALL API');

      try {
        const postRes = await axios({
          url: API_URL + '/admin/post',
          method: 'POST',
          data: {
            user_id: postData?.user_id,
            content: postData?.content,
          },
        });

        if (postRes) {
          console.log('postRes ', postRes);
          if (postRes?.data?.success) {
            // navigate("/posts");
            createMedia(postRes?.data?.data?._id);
          }
        }
      } catch (error) {
        console.log('API error', error);
      }
    } else {
      window.alert('Required Fields Missing');
    }
  };

  const createMedia = async post_id => {
    try {
      const mediaRes = await axios({
        url: API_URL + '/admin/media',
        method: 'POST',
        data: {
          user_id: postData?.user_id,
          post_id,
        },
      });

      if (mediaRes) {
        console.log('mediaRes ', mediaRes);
        if (mediaRes?.data?.success) {
          updatePost(post_id, mediaRes?.data?.data?._id);
          // navigate("/posts");
          // uploadMedia(mediaRes?.data?.data?._id);
          uploadFilesToAPI(mediaRes?.data?.data?._id);
        }
      }
    } catch (error) {
      console.log('API error', error);
    }
  };
  const updatePost = async (post_id, media_id) => {
    try {
      const updatePostRes = await axios({
        url: API_URL + '/admin/post/' + post_id,
        method: 'PUT',
        data: {
          //  user_id: postData?.user_id,
          media_id,
        },
      });

      if (updatePostRes) {
        console.log('updatePostRes ', updatePostRes);
        if (updatePostRes?.data?.success) {
          // navigate("/posts");
          // uploadMedia(updatePostRes?.data?.data?._id);
        }
      }
    } catch (error) {
      console.log('API error', error);
    }
  };

  // code for sending all user images

  const uploadUserImages = async () => {
    try {
      const res = await axios({
        url: API_URL + 'UserImage',
        method: 'POST',
        data: {
          userId: _id,
          image1: image?.image1,
          image2: image?.image2,
          image3: image?.image3,
          image4: image?.image4,
          image5: image?.image5,
          image6: image?.image6,
          image7: image?.image7,
          image8: image?.image8,
          image9: image?.image9,
        },
      });

      if (res) {
        console.log('uploadUserImages res', res);
        navigation.navigate('AccountSetUp2');
      }
    } catch (error) {
      console.log('uploadUserImages error', error);
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{padding: 20}}>
          <StatusBar />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 20,
            }}>
            <Text style={styles.uppersection}>
              <IconFa
                name="arrow-left"
                style={{fontSize: 25, color: '#fe5e75', paddingRight: 10}}
              />
            </Text>
            <Text style={{color: 'black', fontSize: 25, paddingRight: 50}}>
              Add Your Best Photo
            </Text>
          </View>
          <View>
            <Text style={{fontSize: 18, color: 'black', marginTop: 20}}>
              Add your best photos to get a higher amount of daily matches
            </Text>
          </View>
        </View>

        <FlatList data={arr} renderItem={_renderItem} numColumns={2} />

        <TouchableOpacity
          onPress={() => {
            uploadUserImages();
          }}
          style={{
            backgroundColor: '#fe5e75',
            height: 50,
            margin: 20,
            borderRadius: 30,
            marginTop: 80,
          }}>
          <Text
            style={{
              textAlign: 'center',
              marginTop: 12,
              color: 'white',
              fontSize: 20,
            }}>
            Next
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  uppersection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginTop: 10,
    // paddingLeft:80,
    padding: 5,
  },
  input2: {
    height: 40,
    margin: 12,
    borderWidth: 1.4,
    borderColor: '#fe5e75',
    padding: 10,
    borderRadius: 20,
  },
  input1: {
    height: 40,
    margin: 12,
    borderWidth: 1.5,
    borderColor: '#fe5e75',
    padding: 10,
    borderRadius: 20,
    width: 150,
  },
  body1: {
    fontSize: 15,
    height: vh(25),
    width: vw(40),
    // borderWidth: 2,
    borderRadius: 20,
    // borderColor: '#fe5e75',
    // flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  body: {
    fontSize: 15,
    height: vh(27),
    width: vw(40),
    borderWidth: 2,
    borderRadius: 20,
    // borderColor: '#D9DDDF',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    borderStyle: 'dashed',
    borderColor: '#fe5e75',
    backgroundColor: '#FFDBE9',
    marginHorizontal: 20,
    overflow: 'hidden',
  },
});
export default PhotoScreen;
