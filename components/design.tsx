import React, { useRef } from "react";
import {ScrollView,Text,StyleSheet,View,Image,Animated,useWindowDimensions,Dimensions} from "react-native";




export default function DesignClass({images}:Props){
  
  const scrollX = useRef(new Animated.Value(0)).current;
  const scrollEvent=Animated.event([ { nativeEvent: {contentOffset: {x: scrollX} } } ] , {useNativeDriver: false}  );
  const { width: windowWidth } = useWindowDimensions();



  return (
      <View style={styles.scrollContainer}>
        <ScrollView horizontal={true} pagingEnabled showsHorizontalScrollIndicator={false}
          onScroll={scrollEvent} scrollEventThrottle={1}>
          {images.map((image,index) => (<Image key={index} source={{uri: image!==""? image:"https://cdn1.vectorstock.com/i/thumb-large/50/20/no-photo-or-blank-image-icon-loading-images-vector-37375020.jpg"}} style={styles.image} /> ))}
        </ScrollView>
        
        <View style={styles.indicatorContainer}>
          {images.map((image, imageIndex) => {
            const width = scrollX.interpolate({
              inputRange: [
                windowWidth * (imageIndex - 1),
                windowWidth * imageIndex,
                windowWidth * (imageIndex + 1)
              ],
              outputRange: [8, 16, 8],
              extrapolate: "clamp"
            });
            return (
              <Animated.View key={imageIndex} style={[styles.normalDot, { width }]} />
            );
          })}
        </View>
        
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    resizeMode: 'contain',
    height: 200,
    width: 350,
  },
  scrollContainer: {
    height: 300,
    alignItems: "center",
    justifyContent: "center"
  },
  card: {
    flex: 1,
    marginVertical: 4,
    marginHorizontal: 16,
    borderRadius: 5,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center"
  },
  textContainer: {
    backgroundColor: "rgba(0,0,0, 0.7)",
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 5
  },
  infoText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold"
  },
  normalDot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: "silver",
    marginHorizontal: 4
  },
  indicatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  }
});

type Props = {
  images: string[];
};