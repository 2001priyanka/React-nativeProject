import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import IconFa from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFa5 from 'react-native-vector-icons/FontAwesome5';
import IconO from 'react-native-vector-icons/Octicons';

import {
  responsiveFontSize as vf,
  responsiveHeight as vh,
  responsiveScreenWidth as vw,
} from 'react-native-responsive-dimensions';

const Dashboard = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#E5E7E9'}}>
      <ScrollView>
        <View className="outer">
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 20,
            }}>
            <View
              className="profilePic"
              style={{
                borderWidth: 2,
                padding: 10,
                borderRadius: 50,
                marginLeft: 10,
              }}>
              <View>
                <Image
                  source={{
                    uri: 'https://www.citypng.com/public/uploads/preview/download-black-male-user-profile-icon-png-116371332534k5baafcll.png',
                  }}
                  style={{width: 50, height: 50}}
                />
              </View>
            </View>
            <View
              className="nameNdDashBoard"
              style={{
                marginLeft: 30,
              }}>
              <View
                style={{
                  borderBottomWidth: 1,
                }}>
                <Text
                  style={{
                    fontSize: vf(3),
                    fontWeight: '600',
                    color: 'black',
                  }}>
                  User Name
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    fontSize: vf(4),
                    fontWeight: '600',
                    color: 'black',
                  }}>
                  Dashboard
                </Text>
              </View>
            </View>
          </View>

          <View
            className="tabs"
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 20,
              paddingHorizontal: 10,
            }}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: vh(5),
                width: vw(26),
                borderWidth: 1,
                borderRadius: 5,
                borderColor: '#EB984E',
                elevation: 3,
                backgroundColor: '#EB984E',
              }}>
              <Text
                style={{fontSize: vf(2), fontWeight: '500', color: 'white'}}>
                TAB 1
              </Text>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: vh(5),
                width: vw(26),
                borderWidth: 1,
                borderRadius: 5,
                borderColor: '#F7DC6F',
                elevation: 3,
                backgroundColor: '#F7DC6F',
              }}>
              <Text
                style={{fontSize: vf(2), fontWeight: '500', color: 'white'}}>
                TAB 2
              </Text>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: vh(5),
                width: vw(26),
                borderWidth: 1,
                borderRadius: 5,
                borderColor: '#E74C3C',
                elevation: 3,
                backgroundColor: '#E74C3C',
              }}>
              <Text
                style={{fontSize: vf(2), fontWeight: '500', color: 'white'}}>
                TAB 3
              </Text>
            </View>
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: vh(5),
                width: vw(10),
                borderWidth: 1,
                borderRadius: 5,
                borderColor: '#34495E',
                elevation: 3,
                backgroundColor: '#34495E',
              }}>
              <Text
                style={{fontSize: vf(3), fontWeight: '500', color: 'white'}}>
                +
              </Text>
            </TouchableOpacity>
          </View>

          <View
            className="belowTabs"
            style={{
              marginTop: 20,
              borderRadius: 10,
            }}>
            <View
              className="row1"
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                paddingHorizontal: 10,
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: vh(16),
                  width: vw(30),
                  borderWidth: 1,
                  borderRadius: 5,
                  borderColor: '#ddd',
                  elevation: 3,
                  backgroundColor: '#F0F3F4',
                }}>
                <IconFa5 name="user" size={40} color={'#CACFD2'} />
                <Text
                  style={{
                    fontSize: vf(2),
                    fontWeight: '500',
                    color: 'black',
                    marginTop: 10,
                  }}>
                  Username
                </Text>
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: vh(16),
                  width: vw(30),
                  borderWidth: 1,
                  borderRadius: 5,
                  borderColor: '#ddd',
                  elevation: 3,
                  backgroundColor: '#F0F3F4',
                }}>
                <IconFa5 name="list-ul" size={40} color={'#CACFD2'} />
                <Text
                  style={{
                    fontSize: vf(2),
                    fontWeight: '500',
                    color: 'black',
                    marginTop: 10,
                  }}>
                  To Do
                </Text>
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: vh(16),
                  width: vw(30),
                  borderWidth: 1,
                  borderRadius: 5,
                  borderColor: '#ddd',
                  elevation: 3,
                  backgroundColor: '#F0F3F4',
                }}>
                <IconFa5 size={40} name="calendar-alt" color={'#CACFD2'} />
                <Text
                  style={{
                    fontSize: vf(2),
                    fontWeight: '500',
                    color: 'black',
                    marginTop: 10,
                  }}>
                  Date
                </Text>
              </View>
            </View>
            <View
              className="row2"
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginTop: 20,
                paddingHorizontal: 10,
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: vh(16),
                  width: vw(30),
                  borderWidth: 1,
                  borderRadius: 5,
                  borderColor: '#ddd',
                  elevation: 3,
                  backgroundColor: '#F0F3F4',
                }}>
                <IconFa5 name="user" size={40} color={'#CACFD2'} />
                <Text
                  style={{
                    fontSize: vf(2),
                    fontWeight: '500',
                    color: '#000',
                    marginTop: 10,
                  }}>
                  Username
                </Text>
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: vh(16),
                  width: vw(30),
                  borderWidth: 1,
                  borderRadius: 5,
                  borderColor: '#ddd',
                  elevation: 3,
                  backgroundColor: '#F0F3F4',
                }}>
                <IconFa5 name="list-ul" size={40} color={'#CACFD2'} />
                <Text
                  style={{
                    fontSize: vf(2),
                    fontWeight: '500',
                    color: '#000',
                    marginTop: 10,
                  }}>
                  To Do
                </Text>
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: vh(16),
                  width: vw(30),
                  borderWidth: 1,
                  borderRadius: 5,
                  borderColor: '#ddd',
                  elevation: 3,
                  backgroundColor: '#F0F3F4',
                }}>
                <IconFa5 size={40} name="calendar-alt" color={'#CACFD2'} />
                <Text
                  style={{
                    fontSize: vf(2),
                    fontWeight: '500',
                    color: '#000',
                    marginTop: 10,
                  }}>
                  Date
                </Text>
              </View>
            </View>
          </View>
          <View
            className="todoCols"
            style={{
              marginTop: 20,
              paddingHorizontal: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                borderWidth: 1,
                borderRadius: 5,
                borderColor: '#ddd',
                borderBottomWidth: 0,
                elevation: 3,
                height: vh(8),
                backgroundColor: 'white',
                marginBottom: 5,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    marginLeft: 10,
                    color: 'black',
                  }}>
                  Task 1
                </Text>
              </View>

              <Text
                style={{
                  color: 'black',
                }}>
                Name
              </Text>
              <View
                style={{
                  borderWidth: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 20,
                  height: 40,
                  width: 40,
                }}>
                <Image
                  source={{
                    uri: 'https://www.citypng.com/public/uploads/preview/download-black-male-user-profile-icon-png-116371332534k5baafcll.png',
                  }}
                  style={{
                    height: 20,
                    width: 20,
                  }}
                />
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                borderWidth: 1,
                borderRadius: 5,
                borderColor: '#ddd',
                borderBottomWidth: 0,
                elevation: 3,
                height: vh(8),
                backgroundColor: 'white',
                marginBottom: 5,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    marginLeft: 10,
                    color: 'black',
                  }}>
                  Task 2
                </Text>
              </View>

              <Text
                style={{
                  color: 'black',
                }}>
                Name
              </Text>
              <View
                style={{
                  borderWidth: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 20,
                  height: 40,
                  width: 40,
                }}>
                <Image
                  source={{
                    uri: 'https://www.citypng.com/public/uploads/preview/download-black-male-user-profile-icon-png-116371332534k5baafcll.png',
                  }}
                  style={{
                    height: 20,
                    width: 20,
                  }}
                />
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                borderWidth: 1,
                borderRadius: 5,
                borderColor: '#ddd',
                borderBottomWidth: 0,
                elevation: 3,
                height: vh(8),
                backgroundColor: 'white',
                marginBottom: 5,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    marginLeft: 10,
                    color: 'black',
                  }}>
                  Task 3
                </Text>
              </View>

              <Text
                style={{
                  color: 'black',
                }}>
                Name
              </Text>
              <View
                style={{
                  borderWidth: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 20,
                  height: 40,
                  width: 40,
                }}>
                <Image
                  source={{
                    uri: 'https://www.citypng.com/public/uploads/preview/download-black-male-user-profile-icon-png-116371332534k5baafcll.png',
                  }}
                  style={{
                    height: 20,
                    width: 20,
                  }}
                />
              </View>
            </View>
          </View>
          <View
            style={{
              marginTop: 20,
              paddingHorizontal: 10,
            }}>
            <View
              className="reminderEvents"
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 10,
                borderWidth: 1,
                borderRadius: 5,
                borderColor: '#ddd',
                elevation: 3,
                height: vh(7),
                backgroundColor: 'white',
              }}>
              <Text
                style={{
                  color: 'black',
                  fontWeight: '500',
                  fontSize: vf(2),
                }}>
                Reminders & Events
              </Text>
            </View>
            <View
              className="rows"
              style={{
                flexDirection: 'row',
                marginBottom: 15,
              }}>
              <View
                className="col1"
                style={{
                  paddingLeft: 10,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 10,
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      width: vw(40),
                      marginLeft: 5,
                      borderRadius: 5,
                      borderBottomWidth: 0,
                      elevation: 2,
                      height: vh(4),
                      borderColor: '#ddd',
                      borderWidth: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: 'white',
                    }}>
                    <Text
                      style={{
                        color: 'black',
                      }}>
                      Call Abc
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 10,
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      width: vw(40),
                      marginLeft: 5,
                      borderRadius: 5,
                      borderBottomWidth: 0,
                      elevation: 2,
                      height: vh(4),
                      borderColor: '#ddd',
                      borderWidth: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: 'white',
                    }}>
                    <Text
                      style={{
                        color: 'black',
                      }}>
                      Call Abc
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 10,
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      width: vw(40),
                      marginLeft: 5,
                      borderRadius: 5,
                      borderBottomWidth: 0,
                      elevation: 2,
                      height: vh(4),
                      borderColor: '#ddd',
                      borderWidth: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: 'white',
                    }}>
                    <Text
                      style={{
                        color: 'black',
                      }}>
                      Call Abc
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  borderLeftWidth: 1,
                  height: vh(15),
                  marginTop: 5,
                  marginHorizontal: 10,
                  borderLeftColor: 'white',
                }}></View>
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 10,
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      width: vw(40),
                      marginLeft: 5,
                      borderRadius: 5,
                      borderBottomWidth: 0,
                      elevation: 2,
                      height: vh(4),
                      borderColor: '#ddd',
                      borderWidth: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: 'white',
                    }}>
                    <Text
                      style={{
                        color: 'black',
                      }}>
                      Call Abc
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 10,
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      width: vw(40),
                      marginLeft: 5,
                      borderRadius: 5,
                      borderBottomWidth: 0,
                      elevation: 2,
                      height: vh(4),
                      borderColor: '#ddd',
                      borderWidth: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: 'white',
                    }}>
                    <Text
                      style={{
                        color: 'black',
                      }}>
                      Call Abc
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({});
