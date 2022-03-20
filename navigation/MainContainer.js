// import * as React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import Ionicons from "react-native-vector-icons/Ionicons";

// //Screens
// import HomeScreen from "./screens/HomeScreen";
// import GmailScreen from "./screens/Gmail";
// import CollectionScreen from "./screens/Collections";
// import TabsScreen from "./screens/Tabs";
// import AppsScreen from "./screens/Apps";

// //Screen names
// const homeName = "Home";
// const collectionName = "Collection";
// const gmailName = "Gmail";
// const TabsName = "Tabs";
// const AppsName = "Apps";

// const Tab = createBottomTabNavigator();


// export default function MainContainer(){
//     return(
//         // <HomeScreen/>
//        <NavigationContainer>
//            <Tab.Navigator

//         tabBarOptions={{
//             showLabel:false,
//             style:{
//                 position:'absolute',
//                 bottom:25,
//                 left:20,
//                 right:20,
//                 elevation:0,
//                 backgroundColor:'white',
//                 borderRadius:50,
//                 height:90
//             }
//         }}
//            initialRouteName='homeName'
//            screenOptions={({route})=>({
//             //    tabBarLabel:false,
//                tabBarIcon:({focused, color, size})=> {
//                 let iconName;
//                 let rn = route.name;

//                 if(rn == homeName){
//                     iconName= focused? 'home':'home-outline'
//                 }
//                 else  if(rn == collectionName){
//                     iconName= focused? 'bookmark':'bookmark-outline'
//                 }
//                 else  if(rn == TabsName){
//                     iconName= focused? 'collections':'collections-outline'
//                 }
//                 else  if(rn == gmailName){
//                     iconName= focused? 'mail':'mail-outline'
//                 }
//                 else if(rn == AppsName){
//                     iconName= focused? 'grid':'grid-outline'
//                 }

//                 return <Ionicons name={iconName} size={size} color={color}/>
//                }
//            })}

//            tabBarOptions={{
//                activeTintColor:'tomato',
//                inactiveTintColor: 'grey',
//            }}

//           >

//            <Tab.Screen name={collectionName} component={CollectionScreen}/>
//            <Tab.Screen name={gmailName} component={GmailScreen}/>
//            <Tab.Screen name={homeName} component={HomeScreen}/>
//            <Tab.Screen name={AppsName} component={AppsScreen}/>
//            <Tab.Screen name={TabsName} component={TabsScreen}/>
//            {/* <Tab.Screen name={homeName} component={HomeScreen}/> */}

//            </Tab.Navigator>
//        </NavigationContainer>
//     );
// }
