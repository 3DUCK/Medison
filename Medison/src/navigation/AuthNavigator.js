// src/navigation/AuthNavigator.js

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/Auth/LoginScreen'; // 경로 확인
import FingerPrintScreen from '../screens/Auth/FingerPrintScreen'; // 경로 확인
import SuccessScreen from '../screens/Auth/SuccessScreen';
import FailScreen from '../screens/Auth/FailScreen';

const AuthStack = createStackNavigator();

function AuthNavigator() {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="FingerPrint" component={FingerPrintScreen} />
      <AuthStack.Screen name="Success" component={SuccessScreen} />
      <AuthStack.Screen name="Fail" component={FailScreen} />
      {/* 회원가입 화면이 있다면 여기에 추가: <AuthStack.Screen name="Register" component={RegisterScreen} /> */}
    </AuthStack.Navigator>
  );
}

export default AuthNavigator;