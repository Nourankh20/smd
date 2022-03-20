import { View, Button, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const data = [
  {
    id: 1,
    title: 'Google Search',
    screen: 'MapScreen',
  },
  {
    id: 2,
    title: 'I\'m Feeling Lucky',
    screen: 'MapScreen',
  }
]

const NavOptions = (props: NavProps) => {
  const navigation = useNavigation();
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      horizontal
      renderItem={({ item }) => (
        <View style={styles.fixToText}>
          <TouchableOpacity
            onPress={() => props.term && navigation.navigate(item.screen as never, {
              term: props.term,
            } as never)}
            style={styles.button}>
            <Text style={styles.buttontext}>{item.title}</Text>
          </TouchableOpacity>
        </View>
      )}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  // button: {
  //   backgroundColor: "#f8f9fa",
  //   padding: 10,
  // },
  text: {
    color: "black",
    textAlign: "center",
  },
  fixToText: {
        flexDirection: "row",
        justifyContent: "space-around",
        margin: 8,
      },
      button: {
        width: 80 * 2,
        height: 40,
        borderRadius: 120 / 2,
        borderWidth: 3,
        borderColor: "white",
        justifyContent: "center",
        margin: 10,
      },
      buttontext: {
        color: "white",
        fontSize: 14,
        fontWeight: "bold",
        textAlign: "center"}
      });

type NavProps = {
  term: string;
}

export default NavOptions