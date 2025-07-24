// App.js

import React, { useState } from 'react';
// 분리된 스크린 컴포넌트들을 임포트합니다.
import LoginScreen from './screens/Auth/LoginScreen'; // 경로 확인
import HomeScreen from './screens/Main/HomeScreen'; // 경로 확인

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태 관리

  // LoginScreen에서 호출될 콜백 함수
  const handleLoginSuccess = () => {
    setIsLoggedIn(true); // 로그인 성공 시 상태를 true로 변경
  };

  return (
    // isLoggedIn 상태에 따라 다른 컴포넌트(화면) 렌더링
    isLoggedIn ? (
      <HomeScreen />
    ) : (
      <LoginScreen onLoginSuccess={handleLoginSuccess} />
    )
  );
}

export default App;