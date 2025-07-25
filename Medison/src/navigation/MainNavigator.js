// src/navigation/MainNavigator.js

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/main/HomeScreen'; // 경로 확인
import IrisScanScreen from '../screens/main/IrisScanScreen';
import IrisSuccessScreen from '../screens/main/IrisSuccessScreen';
import IrisFailScreen from '../screens/main/IrisFailScreen';
import PatientInfoScreen from '../screens/main/PatientInfoScreen';

const MainStack = createStackNavigator();

function MainNavigator() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Home" component={HomeScreen} />
      <MainStack.Screen name="IrisScan" component={IrisScanScreen} />
      <MainStack.Screen name="IrisSuccess" component={IrisSuccessScreen} />
      <MainStack.Screen name="IrisFail" component={IrisFailScreen} />
      <MainStack.Screen name="PatientInfo" component={PatientInfoScreen}  />
      {/* 다른 메인 화면들이 있다면 여기에 추가 */}
    </MainStack.Navigator>
  );
}

export default MainNavigator;