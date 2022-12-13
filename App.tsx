import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Main from './src/pages/MainPage';
import GroupList from './src/pages/GroupList';
import MyPage from './src/pages/MyPage';
import SignIn from './src/pages/SignIn';
import SignUp from './src/pages/SignUp';
import GroupMaking from './src/pages/GroupMaking';
import GroupMain from './src/pages/GroupMain';

type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  GroupMaking: undefined;
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
            options={{headerShown: false}}
          />
          <Tab.Screen
            name="GroupMain"
            component={GroupMain}
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
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{title: '로그인'}}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{title: '회원가입'}}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default App;
