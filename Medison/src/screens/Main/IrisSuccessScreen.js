// src/screens/IrisSuccessScreen.js

import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'; // TouchableOpacity 추가
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'; // 체크마크 아이콘을 위해 필요
import { useNavigation } from '@react-navigation/native';
import MEDISON_LOGO from '../../constants/medisonLogo';

// 참고: 실제 앱에서는 로고 이미지를 assets 폴더에 넣고 require로 불러옵니다.
// 여기서는 임시로 placeholder 이미지를 사용합니다.
// const MEDISON_LOGO = require('../../../../assets/full_logo.png');

function IrisSuccessScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    // 3초 후 PatientInfo 화면으로 자동 전환
    const timer = setTimeout(() => {
      // PatientInfo 화면으로 직접 이동
      navigation.replace('PatientInfo'); // replace를 사용하여 뒤로가기 스택에서 이 화면을 제거
    }, 3000); // 3초 (3000ms)

    // 컴포넌트 언마운트 시 타이머 클리어
    return () => clearTimeout(timer);
  }, [navigation]);

  // '환자 정보 불러오기' 버튼 클릭 핸들러
  const handleLoadPatientInfo = () => {
    navigation.replace('PatientInfo'); // replace를 사용하여 뒤로가기 스택에서 이 화면을 제거
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
        <Text style={styles.title}>스캔 완료!</Text>
        <Text style={styles.description}>환자의 정보를 불러옵니다</Text>

        {/* 환자 정보 불러오기 버튼 */}
        <TouchableOpacity style={styles.loadInfoButton} onPress={handleLoadPatientInfo}>
          <Text style={styles.loadInfoButtonText}>환자 정보 불러오기</Text>
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
    marginBottom: 20, // 버튼과의 간격 추가
  },
  loadInfoButton: { // 새로 추가된 버튼 스타일
    backgroundColor: '#4a47ff', // 파란색 버튼 (예시)
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginTop: 10,
  },
  loadInfoButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default IrisSuccessScreen;
