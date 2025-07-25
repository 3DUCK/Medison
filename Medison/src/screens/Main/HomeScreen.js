// src/screens/HomeScreen.js

import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import MEDISON_TEXT_LOGO from '../../constants/medisonTextLogo';

function HomeScreen() {
  const navigation = useNavigation();

  const handleMenuItemPress = (menuName) => {
    if (menuName === '홍채 스캔') {
      navigation.navigate('Main', { screen: 'IrisScan' }); // Auth Navigator의 'Iris' 스크린으로 이동
    } else if (menuName === '환자 목록') {
      navigation.navigate('PatientInfo'); // Main Navigator 내의 'PatientInfo' 화면으로 이동
    } else {
      Alert.alert("메뉴 클릭", `${menuName} 메뉴 클릭! (기능 미구현)`);
    }
  };

  return (
    <ScrollView style={styles.scrollViewContainer}>
      <View style={styles.container}>
        {/* 상단 헤더 */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Image source={MEDISON_TEXT_LOGO} style={styles.logo} />
          </View>
          <View style={styles.headerRight}>
            <TouchableOpacity onPress={() => Alert.alert('알림', '알림 기능은 아직 구현되지 않았습니다.')}>
              <FontAwesome5 name="bell" size={22} color="#666" style={styles.headerIcon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Alert.alert('검색', '검색 기능은 아직 구현되지 않았습니다.')}>
              <FontAwesome5 name="search" size={22} color="#666" style={styles.headerIcon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Alert.alert('프로필', '프로필 기능은 아직 구현되지 않았습니다.')}>
              <View style={styles.profilePlaceholder} />
            </TouchableOpacity>
          </View>
        </View>

        {/* 환영 카드 */}
        <View style={styles.welcomeCard}>
          <Text style={styles.welcomeTitle}>안녕하세요, 상상냥이님</Text>
          <Text style={styles.welcomeMessage}>오늘도 골든 타임 확보를 위해 함께하겠습니다</Text>
        </View>

        {/* 그리드 메뉴 */}
        <View style={styles.gridContainer}>
          {/* 홍채 스캔 */}
          <TouchableOpacity style={styles.gridItem} onPress={() => handleMenuItemPress('홍채 스캔')}>
            <View style={[styles.iconCircle, { backgroundColor: '#4a47ff' }]}>
              <MaterialCommunityIcons name="eye" size={40} color="#fff" />
            </View>
            <Text style={styles.gridItemText}>홍채 스캔</Text>
          </TouchableOpacity>

          {/* 환자 목록 */}
          <TouchableOpacity style={styles.gridItem} onPress={() => handleMenuItemPress('환자 목록')}>
            <View style={[styles.iconCircle, { backgroundColor: '#2ecc71' }]}>
              <FontAwesome5 name="users" size={35} color="#fff" />
            </View>
            <Text style={styles.gridItemText}>환자 목록</Text>
          </TouchableOpacity>

          {/* 진료 기록 */}
          <TouchableOpacity style={styles.gridItem} onPress={() => handleMenuItemPress('진료 기록')}>
            <View style={[styles.iconCircle, { backgroundColor: '#ff69b4' }]}>
              <FontAwesome5 name="file-alt" size={35} color="#fff" />
            </View>
            <Text style={styles.gridItemText}>진료 기록</Text>
          </TouchableOpacity>

          {/* 설정 */}
          <TouchableOpacity style={styles.gridItem} onPress={() => handleMenuItemPress('설정')}>
            <View style={[styles.iconCircle, { backgroundColor: '#ffa500' }]}>
              <FontAwesome5 name="cog" size={35} color="#fff" />
            </View>
            <Text style={styles.gridItemText}>설정</Text>
          </TouchableOpacity>

          {/* 인식 정확도 */}
          <View style={styles.gridItem}>
            <Text style={styles.metricValue}>99.8%</Text>
            <Text style={styles.metricLabel}>인식 정확도</Text>
          </View>

          {/* 평균 인식 시간 */}
          <View style={styles.gridItem}>
            <Text style={styles.metricValue}>0.3s</Text>
            <Text style={styles.metricLabel}>평균 인식 시간</Text>
          </View>
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
  logo: {
    width: 150,
    height: 50,
    resizeMode: 'contain', // 이미지 비율 유지
    backgroundColor: 'transparent',
    marginRight: 10,
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
  welcomeCard: {
    width: '90%',
    backgroundColor: '#4a47ff', // 파란색 배경
    borderRadius: 15,
    padding: 20,
    marginTop: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  welcomeTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  welcomeMessage: {
    fontSize: 14,
    color: '#fff',
  },
  gridContainer: {
    width: '90%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridItem: {
    width: '48%', // 두 개씩 나란히 오도록
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 3,
  },
  iconCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  gridItemText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 5,
  },
  metricValue: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4a47ff', // 파란색 강조
    marginBottom: 5,
  },
  metricLabel: {
    fontSize: 14,
    color: '#666',
  },
});

export default HomeScreen;
