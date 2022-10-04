/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { categories } from '../data/categories'
const Card = ({ item }) => {
  return (
    <TouchableOpacity
      style={{
        height: hp('25%'),
        width: wp('90%'),
        marginVertical: hp('2%'),
        backgroundColor: 'white',
        borderRadius: hp('4%'),
        elevation: 3,
        flexDirection: 'column',

      }}>
      <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
        <Image source={require('../assests/cookies.jpg')} style={{
          height: hp('18%'),
          width: wp('90%'), borderRadius: hp('4%'),
        }}></Image>
      </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
        <Text
          style={{
            color: '#33558b',
            fontSize: 18,
            fontFamily: 'Montserrat-Bold',

          }}>
          {item.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
function FoodCategory({ navigation }) {
  const [fulldata, setFulldata] = useState([]);
  useEffect(() => {
    setFulldata(categories);
  });
  return (
    <View style={styles.container}>
      <View style={styles.home}>
        <FlatList
          data={fulldata}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <Card item={item} navigation={navigation} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: hp('1%'),
    marginHorizontal: wp('1%'),
  },
  header: {
    flex: 1,
    backgroundColor: 'red',
  },
  home: {
    flex: 9,
    flexDirection: 'column',
    alignItems: 'center',
    marginVertical: hp('2%'),
  },
});

export default FoodCategory;
