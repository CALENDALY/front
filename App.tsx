import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Main from './src/pages/Main';
import GroupList from './src/pages/GroupList';
import MyPage from './src/pages/MyPage';
import SignIn from './src/pages/SignIn';
import SignUp from './src/pages/SignUp';

type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

export type LoggedInParamList = {
  Main: undefined;
  GroupList: undefined;
  MyPage: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

function App() {
  const [isLoggedIn, setIsLoggenIn] = useState(true);

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <Tab.Navigator>
          <Tab.Screen
            name="main"
            component={Main}
            options={{title: '메인페이지'}}
          />
          <Tab.Screen
            name="GroupList"
            component={GroupList}
            options={{title: '그룹페이지'}}
          />
          <Tab.Screen
            name="MyPage"
            component={MyPage}
            options={{title: '마이페이지'}}
          />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default App;
