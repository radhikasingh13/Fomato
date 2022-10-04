/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
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
import {ingreitems} from '../data/ingredients'

const Card = ({item}) => (
    <View
      style={{
        height: hp('18%'),
        flex: 1,
        width: wp('40%'),
        marginVertical: hp('2%'),
        flexDirection: 'column',

      }}>
      <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
        <Image source={require('../assests/spinach.jpg')} style={{
          height: hp('16%'),
          width: wp('40%'),
          resizeMode: 'contain'
        }}></Image>
      </View>
      <View style={{ flex: 1, alignItems: 'center', }}>
        <Text
          style={{
            color: '#33558b',
            marginVertical: hp('1%'),
            fontSize: 18,
            fontFamily: 'Montserrat-Bold',

          }}>
          {item.name}
        </Text>
        <Text
          style={{
            color: '#33558b',
            fontSize: 12,
            fontFamily: 'Montserrat-Medium',
          }}>
        {item.title}
        </Text>
      </View>
    </View>
);

function FoodIngredients({ route }) {
  const {ingredients} = route.params;
  const data = [];
  const [value,setValue] = useState([]);
  useEffect(() => {
    let j = 0;
    ingredients.map((food)=>{
      let temp1 = ingreitems[food[0]];
      temp1.title = food[1];
      temp1.id = j;
      j++;
      data.push(temp1);
  
    })
    console.log(data);
    setValue(data);
  },[]);
  return (
    <View style={styles.container}>
      <View style={styles.home}>
        <Text>{ingredients.length}</Text>
        <FlatList
          data={value}
          key={'_'}
          keyExtractor={item  => item.id}    
          renderItem={Card} 
          // horizontal={false}
          // numColumns={3}
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
    backgroundColor: 'white',
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

export default FoodIngredients;
