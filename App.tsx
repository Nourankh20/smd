import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './navigation/screens/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GmailScreen from './navigation/screens/Gmail';
import AppsScreen from './navigation/screens/Apps';
import TabsScreen from './navigation/screens/Tabs';
import CollectionScreen from './navigation/screens/Collections';
import MapScreen from './navigation/screens/MapScreen';
import ListScrean from './navigation/screens/ListScrean';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator()

export default function App() {
  return (
   
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
    headerShown: true
  }}>
          <Stack.Screen name="Home" component={HomeScreen}  options={{headerShown:false}} />
          <Stack.Screen name="Gmail" component={GmailScreen} />
          <Stack.Screen name="Apps" component={AppsScreen} />
          <Stack.Screen name="Tabs" component={TabsScreen} />
          <Stack.Screen name="Collection" component={CollectionScreen} />
          <Stack.Screen name="List" component={ListScrean} />

          <Stack.Screen 
        name="MapScreen" 
        component={MapScreen}
        options={{
          headerShown: true,
          title: '',
        }} 
      />



        </Stack.Navigator>
    </NavigationContainer>

  );
}

// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, Image, ImageBackground, TextInput, Alert, TouchableOpacity} from 'react-native';
// // import React from "react";

// export default function App() {
//   const [text, onChangeText] = React.useState("");

//   return (
//     <View style={styles.container}>
//       {/* The Background Image and all other elements are on top of it */}
//       <ImageBackground source={require('./assets/background.jpg')} resizeMode='cover' style={styles.image} >
//         {/* Logo on the top right corner */}
//           <Image style={styles.logo} source={require('./assets/GoogleLogo.png')}></Image>
//           <View style={{
//              margin:40,
//              position:'absolute',
//              top:13,
//              left:0,
//              flexDirection: 'row',
//             justifyContent: 'space-between',
//             backgroundColor:'white',
//             borderWidth:6,
//             borderRadius:60,
//             borderColor:'white',
//             }}>
//             <Image style={{width:25,height:25}} source={require('./assets/user.png')}></Image>
            
//           </View>
//           {/* The texts "greetings and instructions" */}
//         <View style={styles.elements}>
//           <View>
//             <Text style={styles.header}>Hi there!</Text>
//             <Text style={styles.normalText}>Type the link or keyword that you are searching for</Text>
//           </View>
//           {/* The searchbar */}
//           <View style={styles.searchbar}>
//             <View style={styles.textin}>
//           <TextInput
//              style={{borderColor:'white', marginLeft:30}}
//              onChangeText={onChangeText}
//             value={text}
//            />
//            </View>
//             <View style={styles.search}>
//             <Image style={styles.Icons} source={require('./assets/search.png')}></Image>
//             </View>
//             <View style={styles.mic}>
//             <Image style={styles.Icons} source={require('./assets/microphone.png')}></Image>
//             </View>
//           </View>
//           {/* The search and I'm feeling lucky buttons */}
//           <View style={styles.fixToText}>
//             <View style={styles.button}>
//               <Text style={styles.buttontext} onPress={() => Alert.alert('Google Search')} >Google Search</Text>
//             </View> 
//             <View style={styles.button}>
//               <Text style={styles.buttontext} onPress={() => Alert.alert("I'm feeling lucky")}>I'm feeling Lucky</Text>
//             </View> 
//           </View>
//         </View>
//         <View style={{margin:30, justifyContent:'center'}}>
//         <View style={styles.fixToText}>
//           {/* Most recently used apps */}
//           <View style={styles.recentIcon}>
//             <Image style={styles.Icons} source={require('./assets/github.png')}/>
//           </View>
//           <View style={styles.recentIcon}>
//             <Image style={styles.Icons} source={require('./assets/slack.png')}/>
//           </View>
//           <View style={styles.recentIcon}>
//             <Image style={styles.Icons} source={require('./assets/linkedin.png')}/>
//           </View>
//           <View style={styles.recentIcon}>
//             <Image style={styles.Icons} source={require('./assets/plus.png')}/>
//           </View>
//         </View>
//         </View>
//         <View style={styles.navbar}>
//           <View style={styles.fixToText}>
//             <TouchableOpacity onPress={()=> alert('image clicked')}>
//               <Image style={styles.Icons} source={require('./assets/apps.png')} ></Image>            

//             </TouchableOpacity>
//             <Image style={styles.Icons} source={require('./assets/collections.png')}></Image> 
//             <Image style={{width:65, height:65, top:-10}} source={require('./assets/CustomizedLogo.png')}></Image>
//             <Image style={styles.Icons} source={require('./assets/envelope.png')}></Image>
//             <Image style={styles.Icons} source={require('./assets/tabs.png')}></Image>
//           </View>
//         </View>
//         </ImageBackground> 
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
    
//   },
//   elements:{
//     // flex:1,
//     margin:10,
//     marginBottom:40,
//     justifyContent:"center",
//     position:'relative',
//     top:40,
//     alignItems:'center'
//   },
//   image: {
//     flex: 1,
//     justifyContent: "center"
//   },
//   header: {
//     color: "white",
//     fontSize: 32,
//     lineHeight: 50,
//     fontWeight: "bold",
//     textAlign: "center", 
//   },
//   normalText:{
//     color: "white",
//     fontSize: 16,
//     lineHeight: 50,
//     textAlign: "center",
//   },
//   fixToText: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     margin:8
//   },
//   button:{
//     width:80*2,
//     height:40,
//     borderRadius:120/2,
//     borderWidth:3,
//     borderColor:'white',
//     justifyContent:"center",
//     margin:10

//   },
//   buttontext:{
//     color: "white",
//     fontSize: 14,
//     fontWeight: "bold",
//     textAlign: "center", 
//   },
//   searchbar:{    
//     justifyContent:"center",
//     width:'94%',
//     height:50,
//     borderRadius:120/2,
//     borderWidth:1,
//     backgroundColor:'white',
//     borderColor:'white',
//     margin:5,
//     marginTop:10,
//     paddingLeft:20,
//     marginBottom:10,

//   },
//   logo:{
//     margin:40,
//     width:90,
//     height:70,
//     position: 'absolute',
//     right: 0,
//     top: 0,
//   },
//   search:{
//     position:'absolute',
//     left:3,
//     width:45,
//     height:45,
//     borderRadius:120/2,
//     borderColor:'white',
//     borderWidth:2,
//     justifyContent:'center',
//   },
//   mic:{
//     position:'absolute',
//     right:3,
//     width:45,
//     height:45,
//     borderRadius:120/2,
//     // borderColor:'whtie',
//     // borderWidth:2,
//     justifyContent:'center',
//   },
//   Icons:{
//     width:20,
//     height:20,
//     margin:10,
    
//   },
//   navbar:{
//     width:'100%',
//     height:100,
//     borderRadius:40,
//     borderWidth:1,
//     backgroundColor:'white',
//     borderColor:'transparent',
//     marginTop:100,
//     position: 'absolute', 
//     bottom: -33, 
//     justifyContent:'center',  
//     flex:1,  
  
//   },
//   textin:{
//     width:'86%',
//     height:30,
//     padding:3
//   },
//   recentIcon:{
//     width:45,
//     height:45,
//     borderRadius:60,
//     borderColor:'transparent',
//     borderWidth:3,
//     justifyContent:'center',
//     backgroundColor:'white',
//     // margin:4,
//     // padding:5
//   }
 


// });
