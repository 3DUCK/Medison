// src/screens/IrisFailScreen.js

import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'; // X 아이콘을 위해 필요
import { useNavigation } from '@react-navigation/native';

// 참고: 실제 앱에서는 로고 이미지를 assets 폴더에 넣고 require로 불러옵니다.
// 여기서는 임시로 placeholder 이미지를 사용합니다.
const MEDISON_LOGO = 'https://placehold.co/100x100/000000/FFFFFF?text=LOGO'; // 임시 로고 이미지 URL

function IrisFailScreen() {
  const navigation = useNavigation();

  const handleRescan = () => {
    // '다시 스캔하기' 버튼 클릭 시 IrisScreen으로 돌아가기
    navigation.navigate('Iris');
  };

  const handleFingerprintRecognition = () => {
    // '지문 인식하기' 버튼 클릭 시 FingerPrintScreen으로 이동
    navigation.navigate('FingerPrint');
  };

  return (
    <View style={styles.container}>
      {/* 상단 로고 및 텍스트 */}
      <View style={styles.header}>
        <Image source={{ uri: MEDISON_LOGO }} style={styles.logo} />
        <Text style={styles.medisonText}>MEDISON</Text>
      </View>

      {/* 실패 메시지 카드 컨테이너 */}
      <View style={styles.card}>
        {/* X 아이콘 영역 */}
        <View style={styles.failIconContainer}>
          <FontAwesome5 name="times" size={60} color="#e74c3c" /> {/* 빨간색 X 마크 */}
        </View>

        {/* 안내 텍스트 */}
        <Text style={styles.title}>스캔 실패</Text>
        <Text style={styles.description}>스캔에 실패하였습니다.</Text>

        {/* 버튼 컨테이너 */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.rescanButton} onPress={handleRescan}>
            <Text style={styles.buttonText}>다시 스캔하기</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.fingerprintButton} onPress={handleFingerprintRecognition}>
            <Text style={styles.buttonText}>지문 인식하기</Text>
          </TouchableOpacity>
        </View>
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
  failIconContainer: {
    width: 120,
    height: 120,
    borderRadius: 60, // 원형
    backgroundColor: '#e74c3c', // 빨간색 배경
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
    marginBottom: 30,
  },
  buttonContainer: {
    width: '100%',
    // 버튼들이 세로로 쌓이도록 기본값 유지 (flexDirection: 'column')
  },
  rescanButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#e74c3c', // 빨간색 버튼
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10, // 버튼 간 간격
  },
  fingerprintButton: { // 지문 인식하기 버튼 스타일
    width: '100%',
    height: 50,
    backgroundColor: '#ccc', // 회색 버튼
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default IrisFailScreen;
