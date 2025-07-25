// src/screens/PatientInfoScreen.js

import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Alert, SafeAreaView } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'; // 아이콘
import { useNavigation } from '@react-navigation/native';
import MEDISON_LOGO from '../../constants/medisonLogo';

// 참고: 실제 앱에서는 로고 이미지를 assets 폴더에 넣고 require로 불러옵니다.
const PROFILE_PLACEHOLDER = 'https://placehold.co/100x100/CCCCCC/FFFFFF?text=👤'; // 프로필 이미지 대체 URL

function PatientInfoScreen() {
  const navigation = useNavigation();

  // 임시 환자 데이터 (이미지에 맞춰 업데이트)
  const patientData = {
    isHighRisk: true, // 위험군 환자 여부
    name: '가나다',
    age: '만 26세 (1999년생)',
    gender: '남',
    allergies: '없음',
    medication: '히드로클로로티아지드',
    emergencyContact: ['010-1234-5678(모)', '010-1234-5678(부)'],
    lastHospital: '한성대학교병원',
    lastVisitDate: '2025.05.08',
    lastRecord: '고혈압 약 추가 처방',
    specialNotes: '고혈압 환자',
    irisAnalysis: '평소 앓는 질병과 현재 홍채 상태로 보아 심근경색과 같은 심장 질환이 의심됩니다. ~~~한 대처가 필요해보입니다.'

  };

  const handleGoToMainMenu = () => {
    // '메인 메뉴로 가기' 버튼 클릭 시 홈 화면으로 이동
    // HomeScreen은 MainNavigator의 'Home' 스크린으로 등록되어 있습니다.
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* 상단 헤더 (ScrollView 외부에 위치하여 스크롤되지 않도록 함) */}
      <View style={styles.header}>
        <Image source={MEDISON_LOGO} style={styles.logo} />
        <View style={styles.headerRight}>
          <TouchableOpacity onPress={() => Alert.alert('알림', '알림 기능은 아직 구현되지 않았습니다.')}>
            <FontAwesome5 name="bell" size={22} color="#666" style={styles.headerIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Alert.alert('검색', '검색 기능은 아직 구현되지 않았습니다.')}>
            <FontAwesome5 name="search" size={22} color="#666" style={styles.headerIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Alert.alert('프로필', '프로필 기능은 아직 구현되지 않았습니다.')}>
            <View style={styles.profilePlaceholder} /> {/* 프로필 이미지 대체 */}
          </TouchableOpacity>
        </View>
      </View>

      {/* ScrollView가 헤더를 제외한 나머지 공간을 채우도록 flex: 1 적용 */}
      <ScrollView
        style={styles.scrollViewContainer}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={true} // 스크롤바 표시 (디버깅용)
      >
        {/* 환자 정보 카드 */}
        <View style={styles.patientCard}>
          {/* 위험군 환자 헤더 */}
          {patientData.isHighRisk && (
            <View style={styles.riskHeader}>
              <Text style={styles.riskHeaderText}>위험군 환자</Text>
            </View>
          )}

          {/* 프로필 이미지 및 기본 정보 */}
          <View style={styles.profileSection}>
            <Image source={{ uri: PROFILE_PLACEHOLDER }} style={styles.profileImage} />
            <View style={styles.profileInfo}>
              <View style={styles.infoRowInline}>
                <Text style={styles.infoLabel}>이름: </Text>
                <Text style={styles.infoValue}>{patientData.name}</Text>
              </View>
              <View style={styles.infoRowInline}>
                <Text style={styles.infoLabel}>나이: </Text>
                <Text style={styles.infoValue}>{patientData.age}</Text>
              </View>
              <View style={styles.infoRowInline}>
                <Text style={styles.infoLabel}>성별: </Text>
                <Text style={styles.infoValue}>{patientData.gender}</Text>
              </View>
            </View>
          </View>

          {/* 상세 정보 */}
          <View style={styles.detailSection}>
            <View style={styles.infoRowBlock}>
              <Text style={styles.infoLabel}>알레르기:</Text>
              <Text style={styles.infoValue}>{patientData.allergies}</Text>
            </View>
            <View style={styles.infoRowBlock}>
              <Text style={styles.infoLabel}>복용약:</Text>
              <Text style={styles.infoValue}>{patientData.medication}</Text>
            </View>
            <View style={styles.infoRowBlock}>
              <Text style={styles.infoLabel}>비상 연락처:</Text>
              {/* 배열을 map할 때 각 Text 컴포넌트를 <Text>로 감싸고 고유 key를 부여 */}
              {patientData.emergencyContact.map((contact, index) => (
                <Text key={index} style={styles.infoValue}>{contact}</Text>
              ))}
            </View>
            <View style={styles.infoRowBlock}>
              <Text style={styles.infoLabel}>최근 진료 병원:</Text>
              <Text style={styles.infoValue}>{patientData.lastHospital}</Text>
            </View>
            <View style={styles.infoRowBlock}>
              <Text style={styles.infoLabel}>최근 진료 날짜:</Text>
              <Text style={styles.infoValue}>{patientData.lastVisitDate}</Text>
            </View>
            <View style={styles.infoRowBlock}>
              <Text style={styles.infoLabel}>최근 진료 기록:</Text>
              <Text style={styles.infoValue}>{patientData.lastRecord}</Text>
            </View>
            <View style={styles.infoRowBlock}>
              <Text style={styles.infoLabel}>특이사항:</Text>
              <Text style={styles.infoValue}>{patientData.specialNotes}</Text>
            </View>
            <View style={styles.infoRowBlock}>
              <Text style={styles.infoLabel}>홍채 분석 결과:</Text>
              <Text style={styles.infoValue}>{patientData.irisAnalysis}</Text>
            </View>
            {/* 스크롤 테스트를 위한 더미 텍스트 추가 */}
            <Text style={styles.infoValue}>{patientData.dummyLongText}</Text>
          </View>

          {/* 메인 메뉴로 가기 버튼 */}
          <TouchableOpacity style={styles.mainMenuButton} onPress={handleGoToMainMenu}>
            <Text style={styles.mainMenuButtonText}>메인 메뉴로 가기</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1, // SafeAreaView가 화면 전체를 채우도록 함
    backgroundColor: '#f0f0f0', // 전체 배경색
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#fff', // 헤더 배경색
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    // paddingTop는 SafeAreaView가 처리하므로 제거하거나 조절
  },
  logo: {
    width: 300,
    height: 170,
    backgroundColor: 'transparent',
    marginBottom: 10,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerIcon: {
    marginLeft: 20,
  },
  profilePlaceholder: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#ddd', // 프로필 이미지 대체 색상
    marginLeft: 20,
  },
  scrollViewContainer: {
    flex: 1, // ScrollView가 헤더를 제외한 나머지 공간을 채우도록 함
    backgroundColor: '#f0f0f0', // ScrollView 배경색
  },
  contentContainer: { // ScrollView의 내부 콘텐츠 컨테이너 스타일 (contentContainerStyle prop 사용)
    alignItems: 'center',
    paddingBottom: 20, // 하단 여백
    flexGrow: 1, // 내용이 짧을 때도 ScrollView가 전체 공간을 차지하도록 함
    paddingHorizontal: 20, // 좌우 여백을 contentContainer에 적용
  },
  patientCard: {
    width: '100%', // contentContainer의 paddingHorizontal을 사용하므로 width: '100%'로 변경
    backgroundColor: '#fff', // 흰색 카드 배경
    borderRadius: 15,
    padding: 20,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 3,
  },
  riskHeader: {
    backgroundColor: '#e74c3c', // 빨간색 배경
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 15,
    alignSelf: 'flex-start', // 카드 왼쪽 상단에 위치
    marginBottom: 20,
  },
  riskHeaderText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50, // 원형
    backgroundColor: '#ccc', // 이미지 없을 시 배경색
    marginRight: 20,
  },
  profileInfo: {
    flex: 1,
  },
  infoRowInline: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  detailSection: {
    marginBottom: 20,
  },
  infoRowBlock: {
    marginBottom: 10,
  },
  infoLabel: {
    fontSize: 16,
    color: '#666',
    marginBottom: 2,
  },
  infoValue: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginLeft: 5, // 인라인일 경우 라벨과의 간격
  },
  mainMenuButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#4a47ff', // 파란색 버튼
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  mainMenuButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PatientInfoScreen;
