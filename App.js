import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FoodIngredients from './src/screens/foodIngredients';
import FoodRecipe from './src/screens/foodRecipe';
import FoodCategory from './src/screens/foodCategory';

// import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  StyleSheet,
} from 'react-native';
import Home from './src/screens/Home';
const Stack = createStackNavigator();
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
    initialRouteName="Home"
      tabBarOptions={{
        headerShown:false,
        labelStyle: {
          fontSize: 8,
          fontFamily: 'Montserrat-Medium',
        },}}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Category" component={FoodCategory} />
    </Tab.Navigator>
  );
}

//code for drawer

// export default function App() {
//   return (
//     <NavigationContainer>
//      <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
//         <Drawer.Screen name="Tutorial" component={TutorialScreen} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }
// const Drawer = createDrawerNavigator()
// function DrawerDashboard() {
//   return (
//     <Drawer.Navigator
//       initialRouteName="Home">
//       <Drawer.Screen
//         name="Home"
//         component={Home}
//       />
//       <Drawer.Screen
//         name="FoodCategory"
//         component={FoodCategory}
//       />
//     </Drawer.Navigator>
//   );
// }
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MyTabs"
        screenOptions={{
          headerShown: true,
        }}>
          <Stack.Screen name="MyTabs" component={MyTabs} options={{headerShown:false}}/>
        <Stack.Screen name="Home" component={Home} options={{headerTitle:'Home',headerTitleAlign:'center'}} />
        <Stack.Screen name="FoodCategory" component={FoodCategory} options={{headerTitle:'Category',headerTitleAlign:'center'}}/>
        <Stack.Screen name="FoodRecipe" component={FoodRecipe} options={{headerShown:false}}/>
        <Stack.Screen name="FoodIngredients" component={FoodIngredients} options={{headerTitle:'Ingredients',headerTitleAlign:'center'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});

export default App;
