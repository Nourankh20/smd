import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function NavBar({ navigation }){
  return (
    // <View style={styles.navbar}>
    <View style={styles.fixToText}>
      <TouchableOpacity onPress={() => navigation.navigate("Apps")}>
        <Image
          style={styles.Icons}
          source={require("../assets/apps.png")}
        ></Image>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Collection")}>
        <Image
          style={styles.Icons}
          source={require("../assets/collections.png")}
        ></Image>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Image
          style={{ width: 65, height: 65, top: -10 }}
          source={require("../assets/CustomizedLogo.png")}
        ></Image>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Gmail")}>
        <Image
          style={styles.Icons}
          source={require("../assets/envelope.png")}
        ></Image>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Tabs")}>
        <Image
          style={styles.Icons}
          source={require("../assets/tabs.png")}
        ></Image>
      </TouchableOpacity>
    </View>
//   </View>
  );
};


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
      navbar: {
        width: "100%",
        height: 100,
        borderRadius: 40,
        borderWidth: 1,
        backgroundColor: "white",
        borderColor: "transparent",
        marginTop: 100,
        position: "absolute",
        bottom: -33,
        justifyContent: "center",
        flex: 1,
      },
  });

// export default NavOptions;
