import {
    StyleSheet,
    Text,
    View,
    Image,
  } from "react-native";
  import React from "react";
//   import { TouchableOpacity } from "react-native-gesture-handler";

const Recent = () => {
    return(
        <View style={styles.fixToText}>
      <View style={styles.recentIcon}>
              <Image
                style={styles.Icons}
                source={require("../assets/github.png")}
              />
            </View>
            <View style={styles.recentIcon}>
              <Image
                style={styles.Icons}
                source={require("../assets/slack.png")}
              />
            </View>
            <View style={styles.recentIcon}>
              <Image
                style={styles.Icons}
                source={require("../assets/linkedin.png")}
              />
            </View>
            <View style={styles.recentIcon}>
              <Image
                style={styles.Icons}
                source={require("../assets/plus.png")}
              />
            </View> 
            </View>
            );

}


const styles = StyleSheet.create({
    Icons: {
        width: 20,
        height: 20,
        margin: 10,
      },
      recentIcon: {
        width: 45,
        height: 45,
        borderRadius: 60,
        borderColor: "transparent",
        borderWidth: 3,
        justifyContent: "center",
        backgroundColor: "white",
        // margin:4,
        // padding:5
      },
      fixToText: {
        flexDirection: "row",
        justifyContent: "space-around",
        margin: 8,
      },
  });
export default Recent;