import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import {persistor, store} from './android/app/src/Store';
import {PersistGate} from 'redux-persist/integration/react';
// import Navigation from './android/app/src/Navigation/Navigation';
import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {createStackNavigator} from '@react-navigation/stack';
import SignUp from './android/app/src/Components/SignUp';
import Home from './android/app/src/Components/Home';
import SetUp2 from './android/app/src/Components/SetUp2';
import SignIn1 from './android/app/src/Components/SignIn1';
import InboxPage from './android/app/src/Components/InboxPage';
import SignUp1 from './android/app/src/Components/SignUp1';
import ForgetPassword from './android/app/src/Components/ForgetPassword ';
import ResetPassword from './android/app/src/Components/ResetPassword';
import Homepage from './android/app/src/Components/HomePage';
import HomeScreens from './android/app/src/Components/HomeScreens';
import AccountSetUp from './android/app/src/Components/AccountSetUp';
import AccountSetUp1 from './android/app/src/Components/AccountSetUp1';
import AccountSetUp2 from './android/app/src/Components/AccountSetUp2';
import AccountSetUp3 from './android/app/src/Components/AccountSetUp3';
import ProfilePage from './android/app/src/Components/ProfilePage';
import EditProfile from './android/app/src/Components/EditProfile';
import NotificationPage from './android/app/src/Components/NotificationPage';
import SecurityPage from './android/app/src/Components/SecurityPage';
import InvitePage from './android/app/src/Components/InvitePage';
import SignIn from './android/app/src/Components/SignIn ';
import PhotoScreen from './android/app/src/Components/PhotoScreen';
import Footer from './android/app/src/Components/Footer';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* <Navigation /> */}
        <Footer />
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="HomeScreens"
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="HomePage" component={Homepage} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="SetUp2" component={SetUp2} />
            <Stack.Screen name="SignIn1" component={SignIn1} />
            <Stack.Screen name="InboxPage" component={InboxPage} />
            <Stack.Screen name="ForgetPassword " component={ForgetPassword} />
            <Stack.Screen name="ResetPassword" component={ResetPassword} />
            <Stack.Screen name="HomeScreens" component={HomeScreens} />
            <Stack.Screen name="AccountSetUp" component={AccountSetUp} />
            <Stack.Screen name="AccountSetUp1" component={AccountSetUp1} />
            <Stack.Screen name="AccountSetUp2" component={AccountSetUp2} />
            <Stack.Screen name="AccountSetUp3" component={AccountSetUp3} />
            <Stack.Screen name="EditProfile" component={EditProfile} />
            <Stack.Screen name="ProfilePage" component={ProfilePage} />
            <Stack.Screen name="Footer" component={Footer} />
            <Stack.Screen
              name="NotificationPage"
              component={NotificationPage}
            />
            <Stack.Screen name="SecurityPage" component={SecurityPage} />
            <Stack.Screen name="InvitePage" component={InvitePage} />
            <Stack.Screen name="PhotoScreen" component={PhotoScreen} />
          </Stack.Navigator>
          <Footer />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
