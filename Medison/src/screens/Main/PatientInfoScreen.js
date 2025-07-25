// src/screens/PatientInfoScreen.js

import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'; // 아이콘
import { useNavigation } from '@react-navigation/native';

// 참고: 실제 앱에서는 로고 이미지를 assets 폴더에 넣고 require로 불러옵니다.
const MEDISON_LOGO = 'https://placehold.co/40x40/000000/FFFFFF?text=LOGO'; // 상단 로고 이미지 URL

function PatientInfoScreen() {
  const navigation = useNavigation();

  // 임시 환자 데이터
  const patientData = {
    name: '김메디',
    age: '35세',
    id: 'P1234567',
    dob: '1989.05.15',
    gender: '남',
    bloodType: 'A형 (Rh+)',
    bloodPressure: '120/80 mmHg',
    heartRate: '72 bpm',
    temperature: '36.5 °C',
    respiratoryRate: '16 회/분',
    consciousness: '명료',
    notes: '특이사항 없음',
  };

  const handleEmergency = () => {
    // 응급 상황 발생 버튼 클릭 시 로직
    alert('응급 상황 발생! 관련 부서에 알림을 전송합니다.');
    // 실제 응급 상황 처리 화면으로 내비게이션 또는 API 호출 로직 추가
  };

  return (
    <ScrollView style={styles.scrollViewContainer}>
      <View style={styles.container}>
        {/* 상단 헤더 (HomeScreen과 유사) */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Image source={{ uri: MEDISON_LOGO }} style={styles.headerLogo} />
            <Text style={styles.headerMedisonText}>MEDISON</Text>
          </View>
          <View style={styles.headerRight}>
            <TouchableOpacity onPress={() => alert('알림 클릭')}>
              <FontAwesome5 name="bell" size={22} color="#666" style={styles.headerIcon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert('검색 클릭')}>
              <FontAwesome5 name="search" size={22} color="#666" style={styles.headerIcon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert('프로필 클릭')}>
              <View style={styles.profilePlaceholder} /> {/* 프로필 이미지 대체 */}
            </TouchableOpacity>
          </View>
        </View>

        {/* 환자 정보 카드 */}
        <View style={styles.patientCard}>
          <View style={styles.patientSummary}>
            <Text style={styles.patientName}>{patientData.name}</Text>
            <Text style={styles.patientAge}>{patientData.age}</Text>
          </View>
          <Text style={styles.cardTitle}>환자 정보</Text>

          {/* 정보 목록 */}
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>환자 ID</Text>
            <Text style={styles.infoValue}>{patientData.id}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>생년월일</Text>
            <Text style={styles.infoValue}>{patientData.dob}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>성별</Text>
            <Text style={styles.infoValue}>{patientData.gender}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>혈액형</Text>
            <Text style={styles.infoValue}>{patientData.bloodType}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>혈압</Text>
            <Text style={styles.infoValue}>{patientData.bloodPressure}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>심박수</Text>
            <Text style={styles.infoValue}>{patientData.heartRate}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>체온</Text>
            <Text style={styles.infoValue}>{patientData.temperature}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>호흡수</Text>
            <Text style={styles.infoValue}>{patientData.respiratoryRate}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>의식 상태</Text>
            <Text style={styles.infoValue}>{patientData.consciousness}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>특이사항</Text>
            <Text style={styles.infoValue}>{patientData.notes}</Text>
          </View>

          {/* 응급 상황 발생 버튼 */}
          <TouchableOpacity style={styles.emergencyButton} onPress={handleEmergency}>
            <Text style={styles.emergencyButtonText}>응급 상황 발생</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    flex: 1,
    backgroundColor: '#f0f0f0', // 전체 배경색
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: 20, // 하단 여백
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
    paddingTop: 50, // 상단 노치/상태바 고려
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerLogo: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#000', // 로고 배경색
    marginRight: 10,
  },
  headerMedisonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
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
  patientCard: {
    width: '90%',
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
  patientSummary: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 15,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  patientName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginRight: 10,
  },
  patientAge: {
    fontSize: 16,
    color: '#666',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingVertical: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: '#eee',
  },
  infoLabel: {
    fontSize: 16,
    color: '#666',
    flex: 1, // 공간 분배
  },
  infoValue: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    flex: 2, // 공간 분배
    textAlign: 'right', // 오른쪽 정렬
  },
  emergencyButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#e74c3c', // 빨간색 버튼
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  emergencyButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PatientInfoScreen;
