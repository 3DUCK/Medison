// src/screens/LoginScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import MEDISON_LOGO from '../../constants/medisonLogo';

function LoginScreen() {
  const navigation = useNavigation();

  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (userId.trim() === '' || password.trim() === '') {
      Alert.alert("로그인 실패", "사용자 ID와 비밀번호를 입력해주세요.");
      return;
    }

    Alert.alert("로그인 시도", "메인 화면으로 이동합니다.");
    console.log('네비게이션 시도: Main 스택으로 리셋');

    navigation.reset({
      index: 0,
      routes: [{ name: 'Main' }],
    });
  };

  const handleBiometricLogin = (type) => {
    if (type === '지문') {
      navigation.navigate('FingerPrint');
    } else {
      Alert.alert("생체 인증", `${type} 인증 기능은 아직 구현되지 않았습니다.`);
    }
  };

  const handleRegister = () => {
    Alert.alert("회원가입", "회원가입 화면으로 이동합니다. (현재는 구현되지 않음)");
  };

  return (
    <View style={styles.container}>
      {/* 상단 로고 및 텍스트 */}
      <View style={styles.header}>
        <Image source={MEDISON_LOGO} style={styles.logo} /> {/* source={MEDISON_LOGO}로 변경 */}
        {/* 이미지에 이미 "MEDISON" 텍스트가 포함되어 있다면 아래 Text 컴포넌트는 제거할 수 있습니다. */}

      </View>

      {/* 로그인 카드 컨테이너 */}
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

          {/* 홍채 버튼이 주석 처리되어 있으므로 그대로 유지합니다. */}
          {/* <TouchableOpacity
            style={styles.biometricButton}
            onPress={() => handleBiometricLogin('홍채')}
          >
            <MaterialCommunityIcons name="eye-outline" size={24} color="#333" />
            <Text style={styles.biometricButtonText}>홍채</Text>
          </TouchableOpacity> */}
        </View>
      </View>

      {/* 회원가입 링크 */}
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
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    // 이미지의 원본 비율을 유지하면서 크기 조정
    width: 300, // 이미지 너비 조정 (필요에 따라 조절)
    height: 170, // 이미지 높이 조정 (필요에 따라 조절)
  
    // borderRadius: 50, // 원형 로고가 아니므로 제거하거나 조절
    backgroundColor: 'transparent', // 로고 배경색을 투명하게 설정
    marginBottom: 10,
  },
  medisonText: {
    // 이미지에 이미 "MEDISON" 텍스트가 포함되어 있다면 이 스타일은 필요 없을 수 있습니다.
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
    width: '48%', // 두 버튼이 나란히 오도록
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
