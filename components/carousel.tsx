import { View, Image } from "react-native";
import React, {  useRef, useState } from "react";
import Carousel, { Pagination } from "react-native-snap-carousel";

const CarouselClass = ({ images }: Props) => {
  const ref = useRef(null);
  const [indexSelected, setIndexSelected] = useState(0);
  const onSelect = (indexSelected: number) => {
    setIndexSelected(indexSelected);
  };
  return (
    <View
      style={{ alignItems: "center", justifyContent: "center", margin: 10 }}
    >
      <Carousel
        layout="default"
        ref={ref}
        sliderWidth={350}
        itemWidth={350}
        data={images}
        renderItem={({ item, index }) => (
          <Image
            key={index}
            style={{ width: "100%", height: 200 }}
            resizeMode="contain"
            source={{
              uri:
                item
                  ? item
                  : "https://cdn1.vectorstock.com/i/thumb-large/50/20/no-photo-or-blank-image-icon-loading-images-vector-37375020.jpg",
            }}
          />
        )}
        onSnapToItem={(index) => onSelect(index)}
      />
      <Pagination
        inactiveDotColor="gray"
        dotColor={"purple"}
        activeDotIndex={indexSelected}
        dotsLength={images.length}
        animatedDuration={150}
        inactiveDotScale={1}
      />
    </View>
  );
}
type Props = {
  images: string[];
};

export default CarouselClass;
