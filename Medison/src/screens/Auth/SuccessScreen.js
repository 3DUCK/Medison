// src/screens/SuccessScreen.js

import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'; // 체크마크 아이콘을 위해 필요
import { useNavigation } from '@react-navigation/native';

// 참고: 실제 앱에서는 로고 이미지를 assets 폴더에 넣고 require로 불러옵니다.
// 여기서는 임시로 placeholder 이미지를 사용합니다.
const MEDISON_LOGO = 'https://placehold.co/100x100/000000/FFFFFF?text=LOGO'; // 임시 로고 이미지 URL

function SuccessScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    // 3초 후 메인 화면으로 자동 전환 (예시)
    const timer = setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{ name: 'Main' }], // AppNavigator에서 MainNavigator에 부여한 이름 'Main'
      });
    }, 3000); // 3초 (3000ms)

    // 컴포넌트 언마운트 시 타이머 클리어
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* 상단 로고 및 텍스트 */}
      <View style={styles.header}>
        <Image source={{ uri: MEDISON_LOGO }} style={styles.logo} />
        <Text style={styles.medisonText}>MEDISON</Text>
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
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0', // 이미지와 유사한 밝은 배경색
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 40, // 카드와의 간격
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50, // 원형 로고
    backgroundColor: '#000', // 로고 배경색 (이미지 없을 시)
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
  },
});

export default SuccessScreen;
