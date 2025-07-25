// src/navigation/AuthNavigator.js

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/auth/LoginScreen'; // 경로 확인
import FingerPrintScreen from '../screens/auth/FingerPrintScreen'; // 경로 확인
import SuccessScreen from '../screens/auth/SuccessScreen';
import FailScreen from '../screens/auth/FailScreen';

const AuthStack = createStackNavigator();

function AuthNavigator() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Login" component={LoginScreen} options={{ title: ""}} />
      <AuthStack.Screen name="FingerPrint" component={FingerPrintScreen} options={{ title: "지문 인식"}}/>
      <AuthStack.Screen name="Success" component={SuccessScreen} options={{ title: "지문 인식 성공"}}/>
      <AuthStack.Screen name="Fail" component={FailScreen} options={{ title: "지문 인식 실패"}}/>
      {/* 회원가입 화면이 있다면 여기에 추가: <AuthStack.Screen name="Register" component={RegisterScreen} /> */}
    </AuthStack.Navigator>
  );
}

export default AuthNavigator;