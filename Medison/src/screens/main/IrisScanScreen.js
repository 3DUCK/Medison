// src/screens/IrisScreen.js

import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; // 홍채 아이콘을 위해 필요
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'; // 뒤로가기 아이콘
import { useNavigation } from '@react-navigation/native';

// 참고: 실제 앱에서는 로고 이미지를 assets 폴더에 넣고 require로 불러옵니다.
// 여기서는 임시로 placeholder 이미지를 사용합니다.
const MEDISON_LOGO = 'https://placehold.co/100x100/000000/FFFFFF?text=LOGO'; // 임시 로고 이미지 URL

function IrisScreen() {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack(); // 이전 화면으로 돌아가기
  };

  // 지문 화면과 유사하게, 3초 후 랜덤하게 성공/실패 화면으로 이동하는 임시 로직 추가
  useEffect(() => {
    const timer = setTimeout(() => {
      const isSuccess = Math.random() > 0.5; // 50% 확률로 성공/실패
      if (isSuccess) {
        navigation.navigate('Success'); // 성공 시 Success 화면으로
      } else {
        navigation.navigate('Fail'); // 실패 시 Fail 화면으로
      }
    }, 3000); // 3초 후 이동

    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 클리어
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* 뒤로가기 버튼 (선택 사항) */}
      <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
        <FontAwesome5 name="arrow-left" size={20} color="#fff" />
        <Text style={styles.backButtonText}>뒤로</Text>
      </TouchableOpacity>

      {/* 상단 로고 및 텍스트 */}
      <View style={styles.header}>
        <Image source={{ uri: MEDISON_LOGO }} style={styles.logo} />
        <Text style={styles.medisonText}>MEDISON</Text>
      </View>

      {/* 홍채 스캔 카드 컨테이너 */}
      <View style={styles.card}>
        {/* 홍채 아이콘 영역 */}
        <View style={styles.irisIconContainer}>
          <MaterialCommunityIcons name="eye-outline" size={80} color="#ccc" /> {/* 홍채 아이콘 */}
        </View>

        {/* 안내 텍스트 */}
        <Text style={styles.instructionTitle}>홍채를 스캔해주세요</Text>
        <Text style={styles.instructionDetail}>펜라이트로 환자의 홍채를 스캔합니다</Text>
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
  backButton: { // 뒤로가기 버튼 스타일
    position: 'absolute',
    top: 50,
    left: 20,
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 1, // 다른 요소 위에 오도록
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 5,
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
  irisIconContainer: {
    width: 120,
    height: 120,
    borderRadius: 60, // 원형
    borderWidth: 2,
    borderColor: '#ccc', // 회색 테두리
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  instructionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  instructionDetail: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});

export default IrisScreen;
