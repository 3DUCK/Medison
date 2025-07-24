// src/screens/LoginScreen.js

import React from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';

function LoginScreen({ onLoginSuccess }) {
  const handleLogin = () => {
    Alert.alert("로그인 시도", "메인 화면으로 전환됩니다.");
    onLoginSuccess(); // App.js에서 전달받은 콜백 함수 호출
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>로그인 화면</Text>
      <Text style={styles.description}>로그인 버튼을 누르면 메인 화면으로 전환됩니다.</Text>
      <Button title="로그인" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
  },
});

export default LoginScreen;