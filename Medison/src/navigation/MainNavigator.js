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
      <MainStack.Screen name="Home" component={HomeScreen} options={{ title: '홈' }} />
      <MainStack.Screen name="IrisScan" component={IrisScanScreen} options={{ title: '홍체 인식' }} />
      <MainStack.Screen name="IrisSuccess" component={IrisSuccessScreen} options={{ title: '홍체 인식 성공' }} />
      <MainStack.Screen name="IrisFail" component={IrisFailScreen} options={{ title: '홍체 인식 실패' }} />
      <MainStack.Screen name="PatientInfo" component={PatientInfoScreen} options={{ title: '환자 의료 정보' }} />
      {/* 다른 메인 화면들이 있다면 여기에 추가 */}
    </MainStack.Navigator>
  );
}

export default MainNavigator;