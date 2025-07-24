// src/navigation/AppNavigator.js

import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; // Stack Navigator 임포트!

import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';

const RootStack = createStackNavigator(); // 최상위 스택 내비게이터 생성

function AppNavigator() {
    // 실제 앱에서는 이곳에서 AsyncStorage 등을 통해 유저 토큰을 불러와 로그인 상태를 확인합니다.
    // 여기서는 프로토타입이므로 초기에는 항상 로그인 화면(AuthNavigator)이 보이도록 null로 설정합니다.
    const [userToken, setUserToken] = useState(null);
    const [isLoading, setIsLoading] = useState(true); // 초기 로딩 상태

    useEffect(() => {
        const checkLoginStatus = async () => {
            // 실제 앱 시작 시 로그인 상태 확인 로직이 들어갈 곳
            await new Promise(resolve => setTimeout(resolve, 1000)); // 1초 로딩 시뮬레이션

            // 프로토타입이므로 항상 로그인 화면으로 시작
            setUserToken(null);
            setIsLoading(false);
        };
        checkLoginStatus();
    }, []);

    if (isLoading) {
        // 로딩 중이거나 스플래시 화면을 보여줄 때
        return null; // 또는 <SplashScreen />
    }

    return (
        <NavigationContainer>
            <RootStack.Navigator screenOptions={{ headerShown: false }}>
                {userToken ? (
                    // 토큰이 있으면 MainNavigator를 보여줌
                    <RootStack.Screen name="Main" component={MainNavigator} />
                ) : (
                    // 토큰이 없으면 AuthNavigator를 보여줌
                    <RootStack.Screen name="Auth" component={AuthNavigator} />
                )}
            </RootStack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;