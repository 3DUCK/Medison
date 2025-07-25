// src/screens/LoginScreen.js

import React, { useState } from 'react'; // useState 추가 (ID/PW 입력 필드 때문에 필요할 수 있음)
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native'; // TextInput, TouchableOpacity, Image 추가
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'; // 아이콘
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; // 아이콘
import { useNavigation } from '@react-navigation/native'; // useNavigation 훅 임포트!

// 참고: 실제 앱에서는 로고 이미지를 assets 폴더에 넣고 require로 불러옵니다.
// 여기서는 임시로 placeholder 이미지를 사용합니다.
const MEDISON_LOGO = 'https://placehold.co/100x100/000000/FFFFFF?text=LOGO'; // 임시 로고 이미지 URL

// onLoginSuccess prop은 이제 필요 없으므로 제거합니다.
// 대신 navigation 객체를 직접 사용합니다.
function LoginScreen() {
  const navigation = useNavigation(); // 내비게이션 객체 가져오기

  // 이미지와 같은 UI를 위해 userId, password 상태 유지
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // 실제 로그인 로직 (ID/PW 유효성 검사 등)은 여기에 추가될 것입니다.
    // 현재는 프로토타입이므로 바로 메인 화면으로 전환합니다.
    if (userId.trim() === '' || password.trim() === '') {
      Alert.alert("로그인 실패", "사용자 ID와 비밀번호를 입력해주세요.");
      return;
    }

    Alert.alert("로그인 시도", "메인 화면으로 이동합니다.");
    console.log('네비게이션 시도: Main 스택으로 리셋');

    // React Navigation의 reset 메서드를 사용하여 Auth 스택을 제거하고 Main 스택으로 전환합니다.
    // 'Main'은 src/navigation/AppNavigator.js에서 MainNavigator에 부여한 이름입니다.
    navigation.reset({
      index: 0, // 스택의 첫 번째 화면으로 이동
      routes: [{ name: 'Main' }], // 목표 스택의 이름
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
      {/* 상단 로고 및 텍스트 */}
      <View style={styles.header}>
        <Image source={{ uri: MEDISON_LOGO }} style={styles.logo} />
        <Text style={styles.medisonText}>MEDISON</Text>
      </View>

      {/* 로그인 카드 컨테이너 */}
      <View style={styles.card}>
        {/* 사용자 ID 입력 */}
        <TextInput
          style={styles.input}
          placeholder="사용자 ID"
          placeholderTextColor="#999"
          value={userId}
          onChangeText={setUserId}
          autoCapitalize="none"
        />

        {/* 비밀번호 입력 */}
        <TextInput
          style={styles.input}
          placeholder="비밀번호"
          placeholderTextColor="#999"
          secureTextEntry // 비밀번호 숨김
          value={password}
          onChangeText={setPassword}
        />

        {/* 로그인 버튼 */}
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>로그인</Text>
        </TouchableOpacity>

        {/* 또는 구분선 */}
        <Text style={styles.orText}>또는</Text>

        {/* 지문/홍채 버튼 컨테이너 */}
        <View style={styles.biometricButtonsContainer}>
          <TouchableOpacity
            style={styles.biometricButton}
            onPress={() => handleBiometricLogin('지문')} // 지문 버튼 클릭 시
          >
            <FontAwesome5 name="fingerprint" size={24} color="#333" />
            <Text style={styles.biometricButtonText}>지문</Text>
          </TouchableOpacity>

          {/* <TouchableOpacity
            style={styles.biometricButton}
            onPress={() => handleBiometricLogin('홍채')} // 홍채 버튼 클릭 시
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
    backgroundColor: '#1a1a1a', // 어두운 배경색
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
    borderRadius: 50, // 원형 로고
    backgroundColor: '#fff', // 로고 배경색 (이미지 없을 시)
    marginBottom: 10,
  },
  medisonText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff', // 흰색 텍스트
    letterSpacing: 2, // 글자 간격
  },
  card: {
    width: '90%',
    maxWidth: 400,
    backgroundColor: '#fff', // 흰색 카드 배경
    borderRadius: 20, // 둥근 모서리
    padding: 30,
    alignItems: 'center',
    shadowColor: '#000', // 그림자
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 8, // 안드로이드 그림자
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
    backgroundColor: '#4a47ff', // 파란색 버튼
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
    backgroundColor: '#f5f5f5', // 밝은 회색 배경
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
    color: '#ccc', // 회색 텍스트
    fontSize: 16,
  },
  registerLink: {
    color: '#4a47ff', // 파란색 링크
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
