import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Homepage"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignUp1" component={SignUp1} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignIn1" component={SignIn1} />
        <Stack.Screen name="SignIn2" component={SignIn2} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="ResetPassword1" component={ResetPassword1} />
        <Stack.Screen name="ResetPassword2" component={ResetPassword2} />
        <Stack.Screen name="SetUp2" component={SetUp2} />
        <Stack.Screen name="ProfilePage" component={ProfilePage} />
        <Stack.Screen name="NotificationPage" component={NotificationPage} />
        <Stack.Screen name="InvitePage" component={InvitePage} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="SecurityPage" component={SecurityPage} />
        <Stack.Screen name="InboxPage" component={InboxPage} />
        {/* <Stack.Screen name="Home" component={Home} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App