/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
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
import { filter } from 'rxjs/operators'
import {recipes} from '../data/recipes.js'
import SearchBar from "react-native-dynamic-search-bar";
const Card = ({ item, navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('FoodRecipe', { time: item.time, ingredients: item.ingredients, title: item.title, description: item.description, categoryId: item.categoryId })}
      style={{
        height: hp('30%'),
        width: wp('40%'),
        marginVertical: hp('2%'),
        backgroundColor: 'white',
        marginHorizontal: wp('2%'),
        borderRadius: hp('4%'),
        elevation: 3,
        flexDirection: 'column',

      }}>
      <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
        <Image source={require('../assests/cookies.jpg')} style={{
          height: hp('22%'),
          width: wp('40%'), borderRadius: hp('4%'),
        }}></Image>
      </View>
      <View style={{ flex: 1, alignItems: 'center', }}>
        <Text
          style={{
            color: '#33558b',
            marginVertical: hp('1%'),
            fontSize: 13,
            fontFamily: 'Montserrat-Bold',

          }}>
          {item.title}
        </Text>
        <Text
          style={{
            color: '#33558b',
            fontSize: 12,
            fontFamily: 'Montserrat-Medium',
          }}>
          {item.categoryId == 0 ? 'cookies' : item.categoryId == 1 ? 'italian' : item.categoryId == 2 ? 'mexican' : 'smoothies'}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

function Home({ navigation }) {
  const [data, setData] = useState([]);
  const [fulldata, setFulldata] = useState([]);
  const [searchvalue, setSearchvalue] = useState("");
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    setFulldata(recipes);
  });
  const searchFunction = (text) => {
    setFlag(true);
    if (text) {
      const newData = fulldata.filter((item) => {
        const item_data = `${item.title.toUpperCase()})`;
        const text_data = text.toUpperCase();
        return item_data.indexOf(text_data) > -1;
      })
      setData(newData);
      console.log(newData);
      setSearchvalue(text);
    } else {
      setData(recipes);
      setSearchvalue(text);
    }
  };
  return (
    <View style={styles.container}>
      <View>
        <SearchBar
          fontColor="#c6c6c6"
          iconColor="#c6c6c6"
          shadowColor="grey"
          cancelIconColor="#c6c6c6"
          backgroundColor="grey"
          placeholder="Search here"
          onChangeText={(text) => searchFunction(text)}
          onSearchPress={(text) => searchFunction(text)}
          onPress={() => alert("onPress")}
        />
      </View>
      <View style={styles.home}>
        {flag == true ? <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}     //has to be unique   
          renderItem={({ item }) => <Card item={item} navigation={navigation} />}
          horizontal={false}
          numColumns={2}
        /> :
          <FlatList
            data={fulldata}
            keyExtractor={(item, index) => index.toString()}     //has to be unique   
            renderItem={({ item }) => <Card item={item} navigation={navigation} />}
            horizontal={false}
            numColumns={2}
          />
        }
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
  home: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginVertical: hp('2%'),
  },
});

export default Home;
