// src/navigation/MainNavigator.js

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/Main/HomeScreen'; // 경로 확인

const MainStack = createStackNavigator();

function MainNavigator() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Home" component={HomeScreen} options={{ title: '홈' }} />
      {/* 다른 메인 화면들이 있다면 여기에 추가 */}
    </MainStack.Navigator>
  );
}

export default MainNavigator;