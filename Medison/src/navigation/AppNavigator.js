import React from 'react'; // useState, useEffect는 더 이상 필요 없으므로 제거
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator'; // MainNavigator는 AuthNavigator에서 로그인 성공 시 사용될 것이므로 유지

const RootStack = createStackNavigator(); // 최상위 스택 내비게이터 생성

function AppNavigator() {
    // userToken, isLoading 상태 및 관련 useEffect 훅을 모두 제거합니다.

    return (
        <NavigationContainer>
            <RootStack.Navigator screenOptions={{ headerShown: false }}>
                {/* 로그인 토큰 확인 로직 대신, 항상 AuthNavigator를 기본으로 렌더링합니다. */}
                <RootStack.Screen name="Auth" component={AuthNavigator} />
                
                {/*
                    이 부분은 AuthNavigator 내부의 로그인 성공 시 MainNavigator로 전환될 때 사용됩니다.
                    AppNavigator의 RootStack에 명시되어 있어야 reset 등으로 접근할 수 있습니다.
                    따라서 조건부 렌더링이 없어도 여기에 MainNavigator를 Screen으로 포함해야 합니다.
                */}
                <RootStack.Screen name="Main" component={MainNavigator} />
            </RootStack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;