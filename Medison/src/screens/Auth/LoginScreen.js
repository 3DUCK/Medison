// src/screens/LoginScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native'; // useNavigation 훅 임포트!

const MEDISON_LOGO = 'https://placehold.co/100x100/000000/FFFFFF?text=LOGO';

function LoginScreen() {
  const navigation = useNavigation(); // 내비게이션 객체 가져오기

  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (userId.trim() === '' || password.trim() === '') {
      Alert.alert("로그인 실패", "사용자 ID와 비밀번호를 입력해주세요.");
      return;
    }

    Alert.alert("로그인 시도", "메인 화면으로 전환됩니다.");
    // 로그인 성공 시 Auth 스택을 제거하고 Main 스택으로 전환
    navigation.reset({
      index: 0,
      routes: [{ name: 'Main' }], // AppNavigator에서 MainNavigator에 부여한 이름 'Main'
    });
  };

  const handleBiometricLogin = (type) => {
    if (type === '지문') {
      // AuthNavigator 내의 FingerPrint 화면으로 이동
      navigation.navigate('FingerPrint'); // AuthNavigator에서 FingerPrintScreen에 부여한 이름 'FingerPrint'
    } else {
      Alert.alert("생체 인증", `${type} 인증 기능은 아직 구현되지 않았습니다.`);
      // 홍채 버튼 로직 (예: navigation.navigate('IrisScan');)
    }
  };

  const handleRegister = () => {
    Alert.alert("회원가입", "회원가입 화면으로 이동합니다. (현재는 구현되지 않음)");
    // navigation.navigate('Register'); // AuthNavigator에 Register 화면이 있다면
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: MEDISON_LOGO }} style={styles.logo} />
        <Text style={styles.medisonText}>MEDISON</Text>
      </View>

      <View style={styles.card}>
        <TextInput
          style={styles.input}
          placeholder="사용자 ID"
          placeholderTextColor="#999"
          value={userId}
          onChangeText={setUserId}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="비밀번호"
          placeholderTextColor="#999"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>로그인</Text>
        </TouchableOpacity>

        <Text style={styles.orText}>또는</Text>

        <View style={styles.biometricButtonsContainer}>
          <TouchableOpacity
            style={styles.biometricButton}
            onPress={() => handleBiometricLogin('지문')}
          >
            <FontAwesome5 name="fingerprint" size={24} color="#333" />
            <Text style={styles.biometricButtonText}>지문</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.biometricButton}
            onPress={() => handleBiometricLogin('홍채')}
          >
            <MaterialCommunityIcons name="eye-outline" size={24} color="#333" />
            <Text style={styles.biometricButtonText}>홍채</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity onPress={handleRegister} style={styles.registerLinkContainer}>
        <Text style={styles.registerText}>계정이 없으신가요? </Text>
        <Text style={styles.registerLink}>회원가입</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  medisonText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    letterSpacing: 2,
  },
  card: {
    width: '90%',
    maxWidth: 400,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 8,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    color: '#333',
  },
  loginButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#4a47ff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  orText: {
    color: '#666',
    fontSize: 14,
    marginBottom: 20,
  },
  biometricButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 30,
  },
  biometricButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    width: '48%',
  },
  biometricButtonText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  registerLinkContainer: {
    flexDirection: 'row',
    marginTop: 30,
  },
  registerText: {
    color: '#ccc',
    fontSize: 16,
  },
  registerLink: {
    color: '#4a47ff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginScreen;