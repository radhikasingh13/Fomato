import * as React from 'react';
import {Text, View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const Button = ({navigation,ingredients}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() =>navigation.navigate('FoodIngredients',{ingredients:ingredients})}
        style={{height: hp('5%'),
        width: wp('50%'),
        borderWidth: 2,
        borderColor: 'blue',
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: hp('4%'),
        alignItems: 'center',
        backgroundColor: 'white',}}>
        <Text style={styles.buttontext}>View Ingredients</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = () => StyleSheet.create({
    container: {
      flex: 1,
    },
    buttontext: {
      fontFamily: 'Montserrat-SemiBold',
      fontSize: hp('4%'),
      color: 'blue',
    },
    buttoncontainer: {
      height: hp('10%'),
      width: wp('50%'),
      borderWidth: 2,
      borderColor: 'blue',
      flexDirection: 'row',
      justifyContent: 'center',
      borderRadius: hp('4%'),
      alignItems: 'center',
      backgroundColor: 'white',
    },
  });
