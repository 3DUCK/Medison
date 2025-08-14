// src/screens/SuccessScreen.js

import React, { useEffect } from 'react'; // useEffect는 이제 자동 전환이 아니므로 제거해도 됨 (선택)
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'; // TouchableOpacity 추가
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import MEDISON_LOGO from '../../constants/medisonLogo';

function SuccessScreen() {
  const navigation = useNavigation();

  // 자동 전환 로직을 제거하거나, 버튼이 눌리기 전까지 대기하도록 수정할 수 있습니다.
  // 여기서는 버튼 클릭 시에만 전환되도록 useEffect를 제거합니다.
  // 만약 일정 시간 후 자동 전환도 유지하고 싶다면, useEffect를 남겨두세요.
  
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{ name: 'Main' }],
      });
    }, 3000); // 3초 (3000ms)

    return () => clearTimeout(timer);
  }, [navigation]);
  

  const handleGoToMain = () => {
    // "메인 화면으로" 버튼 클릭 시 Main 스택으로 전환
    navigation.reset({
      index: 0,
      routes: [{ name: 'Main' }], // AppNavigator에서 MainNavigator에 부여한 이름 'Main'
    });
  };

  return (
    <View style={styles.container}>
      {/* 상단 로고 및 텍스트 */}
      <View style={styles.header}>
        <Image source={MEDISON_LOGO} style={styles.logo} />
        {/* 이미지에 이미 "MEDISON" 텍스트가 포함되어 있다면 아래 Text 컴포넌트는 제거할 수 있습니다. */}
      </View>

      {/* 성공 메시지 카드 컨테이너 */}
      <View style={styles.card}>
        {/* 체크마크 아이콘 영역 */}
        <View style={styles.checkIconContainer}>
          <FontAwesome5 name="check" size={60} color="#2ecc71" /> {/* 초록색 체크마크 */}
        </View>

        {/* 안내 텍스트 */}
        <Text style={styles.title}>인증 완료!</Text>
        <Text style={styles.description}>성공적으로 인증되었습니다</Text>

        {/* 메인 화면으로 이동 버튼 */}
        <TouchableOpacity style={styles.mainButton} onPress={handleGoToMain}>
          <Text style={styles.mainButtonText}>메인 화면으로</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff', // 이미지와 유사한 밝은 배경색
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 40, // 카드와의 간격
  },
  logo: {
    width: 300,
    height: 170,
    backgroundColor: 'transparent',
    marginBottom: 10,
  },
  medisonText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333', // 어두운 텍스트
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
  checkIconContainer: {
    width: 120,
    height: 120,
    borderRadius: 60, // 원형
    borderWidth: 3,
    borderColor: '#2ecc71', // 초록색 테두리
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30, // 버튼과의 간격
  },
  mainButton: { // 새로 추가된 버튼 스타일
    width: '100%',
    height: 50,
    backgroundColor: '#4a47ff', // 파란색 버튼
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10, // 상단 텍스트와의 간격
  },
  mainButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SuccessScreen;
