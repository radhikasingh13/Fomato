/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {
   ScrollView,
   StyleSheet,
   Text,
   Image,
   View,
 } from 'react-native';
 import {
   widthPercentageToDP as wp,
   heightPercentageToDP as hp,
 } from 'react-native-responsive-screen';
 import Icon from 'react-native-vector-icons/FontAwesome5';
 import { Button } from '../components/buttons';
 
 function FoodRecipe({navigation,route}) {
  const {time,title,categoryId,description,ingredients} = route.params;
   return (
    <ScrollView>
     <View style={styles.container}>
       <View style={styles.header}>
       <Image source={require('../assests/smoothies.jpg')} style={{
            height: hp('32%'),
            width: wp('99%'),
          }}></Image>
       </View>
       <View style={styles.home}>
       <Text
            style={{
              color: 'black',
              marginVertical:hp('1%'),
              fontSize: 30,
              fontFamily: 'Montserrat-Bold',
              
            }}>
            {title}
          </Text>
          <Text
            style={{
              color: '#33558b',
              fontSize: 15,
              fontFamily: 'Montserrat-Medium',
            }}>
            {categoryId == 0 ? 'pizza' : categoryId == 1 ? 'Mexican Food' : categoryId == 2 ? 'Italian Food' : categoryId==3?'Cookies':'Smoothies'}
          </Text>
          <View style={{
           flexDirection:'row',
           marginVertical:hp('1%'),
           }}>
           <Text
            style={{
              color: '#33558b',
              fontSize: 15,
              fontFamily: 'Montserrat-Medium',
            }}>
            {time} minutes
          </Text></View>
          <Button navigation={navigation} ingredients={ingredients}/>
          <Text
            style={{
              color: '#33558b',
              fontSize: 15,
              padding:hp('4%'),
              fontFamily: 'Montserrat-Medium',
            }}>
            {description}
          </Text>
       </View>
     </View>
     </ScrollView>
   );
 }
 
 const styles = StyleSheet.create({
   container: {
     flex: 2,
     marginVertical: hp('1%'),
     marginHorizontal: wp('1%'),
   },
   header: {
     flex: 1,
     backgroundColor: 'red',
   },
   home: {
     flex: 2,
     flexDirection: 'column',
     alignItems: 'center',
     marginVertical: hp('2%'),
   },
 });
 
 export default FoodRecipe;
 