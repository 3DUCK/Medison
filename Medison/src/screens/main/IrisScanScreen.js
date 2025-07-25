// src/screens/IrisScanScreen.js

import React from 'react'; // useEffect는 이제 필요 없으므로 제거
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native'; // Alert 추가
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; // 홍채 아이콘을 위해 필요
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'; // 뒤로가기 아이콘
import { useNavigation } from '@react-navigation/native';

// 참고: 실제 앱에서는 로고 이미지를 assets 폴더에 넣고 require로 불러옵니다.
// 여기서는 임시로 placeholder 이미지를 사용합니다.
const MEDISON_LOGO = 'https://placehold.co/100x100/000000/FFFFFF?text=LOGO'; // 임시 로고 이미지 URL

function IrisScanScreen() {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack(); // 이전 화면으로 돌아가기
  };

  // 짧게 한 번 클릭했을 때 (인증 실패 시뮬레이션)
  const handleShortPress = () => {
    Alert.alert("스캔 시도", "스캔 실패");
    navigation.navigate('IrisFail'); // IrisFailScreen으로 이동
  };

  // 길게 눌렀을 때 (인증 성공 시뮬레이션)
  const handleLongPress = () => {
    Alert.alert("스캔 시도", "스캔 완료");
    navigation.navigate('IrisSuccess'); // IrisSuccessScreen으로 이동
  };

  // 이전의 자동 전환 useEffect는 제거합니다. 이제 사용자 상호작용으로 전환됩니다.
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     const isSuccess = Math.random() > 0.5;
  //     if (isSuccess) {
  //       navigation.navigate('IrisSuccess');
  //     } else {
  //       navigation.navigate('IrisFail');
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

      {/* 홍채 스캔 카드 컨테이너 */}
      <View style={styles.card}>
        {/* 홍채 아이콘 영역 - TouchableOpacity로 감싸서 클릭 이벤트 추가 */}
        <TouchableOpacity
          style={styles.irisIconContainer}
          onPress={handleShortPress} // 짧게 누르면 IrisFailScreen
          onLongPress={handleLongPress} // 길게 누르면 IrisSuccessScreen
        >
          <MaterialCommunityIcons name="eye-outline" size={80} color="#ccc" /> {/* 홍채 아이콘 */}
        </TouchableOpacity>

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

export default IrisScanScreen;
