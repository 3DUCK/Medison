// src/screens/FingerPrintScreen.js

import React from 'react'; // useEffect는 이제 필요 없으므로 제거
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native'; // Alert 추가
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

const MEDISON_LOGO = 'https://placehold.co/100x100/000000/FFFFFF?text=LOGO';

function FingerPrintScreen() {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack(); // 이전 화면 (LoginScreen)으로 돌아가기
  };

  // 짧게 한 번 클릭했을 때 (인증 실패 시뮬레이션)
  const handleShortPress = () => {
    Alert.alert("인증 시도", "인증 실패");
    navigation.navigate('Fail'); // FailScreen으로 이동
  };

  // 길게 눌렀을 때 (인증 성공 시뮬레이션)
  const handleLongPress = () => {
    Alert.alert("인증 시도", "인증 성공");
    navigation.navigate('Success'); // SuccessScreen으로 이동
  };

  // 이전의 자동 전환 useEffect는 제거합니다. 이제 사용자 상호작용으로 전환됩니다.
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     const isSuccess = Math.random() > 0.5;
  //     if (isSuccess) {
  //       navigation.navigate('Success');
  //     } else {
  //       navigation.navigate('Fail');
  //     }
  //   }, 3000);
  //   return () => clearTimeout(timer);
  // }, [navigation]);

  return (
    <View style={styles.container}>
      {/* 뒤로가기 버튼 */}
      <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
        <FontAwesome5 name="arrow-left" size={20} color="#fff" />
        <Text style={styles.backButtonText}>뒤로</Text>
      </TouchableOpacity>

      {/* 상단 로고 및 텍스트 */}
      <View style={styles.header}>
        <Image source={{ uri: MEDISON_LOGO }} style={styles.logo} />
        <Text style={styles.medisonText}>MEDISON</Text>
      </View>

      {/* 지문 스캔 카드 컨테이너 */}
      <View style={styles.card}>
        {/* 지문 아이콘 영역 - TouchableOpacity로 감싸서 클릭 이벤트 추가 */}
        <TouchableOpacity
          style={styles.fingerprintIconContainer}
          onPress={handleShortPress} // 짧게 누르면 FailScreen
          onLongPress={handleLongPress} // 길게 누르면 SuccessScreen
        >
          <FontAwesome5 name="fingerprint" size={80} color="#ccc" />
        </TouchableOpacity>

        {/* 안내 텍스트 */}
        <Text style={styles.instructionTitle}>지문을 스캔해주세요</Text>
        <Text style={styles.instructionDetail}>센서에 손가락을 올려주세요</Text>
      </View>
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
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 1,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 5,
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
  fingerprintIconContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: '#ccc',
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

export default FingerPrintScreen;
