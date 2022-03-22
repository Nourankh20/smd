import * as axios from "axios";
import * as React from "react";
import { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from "react-native";
import { Card } from "react-native-elements";
import { useRoute } from "@react-navigation/native";
import CarouselClass from "../../components/carousel";

const ListScrean = () => {
  const route = useRoute<RouteProps>();
  const { term } = route.params;
  const [universities, setUniversity] = useState<University[]>();
  const [flag, setFlag] = useState<boolean>(true);

  useEffect(() => {
    Promise.all([
      axios.default.get(`http://192.168.1.12:3000/universities/${term}`),
    ]).then(([{ data: universitiesResults }]) => {
      if (universitiesResults) setUniversity(universitiesResults);
    });
  }, []);

  return (
    <SafeAreaView>
      <View style={{backgroundColor:'floralwhite'}}>
        <ScrollView>
          {term &&
            universities?.map((University, index: number) => (
              <Card
                key={index}
                containerStyle={{
                  borderRadius: 20,
                  borderColor: "transparent",
                }}
              >
                <Card.Title style={{ fontWeight: "bold", fontSize: 17 }}>
                  {University.slug}
                  {"\n"}
                  <Text
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      color: "purple",
                    }}
                  >
                    {University.name}
                  </Text>{" "}
                </Card.Title>
                <Card.Divider />
                <CarouselClass images={University.image} />
                <Text style={{ marginBottom: 10, fontSize: 16 }}>
                  Located at : {University.addressFmt}
                </Text>
              </Card>
            ))}

          <View style={{ marginTop: 100 }}>
            <Text> </Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

type RouteParams = {
  term: string;
};

type RouteProps = {
  params: RouteParams;
  name: string;
  key: string;
};

type University = {
  name: string;
  slug: string;
  addressFmt: string;
  image: string[];
};

const styles = StyleSheet.create({
  btn: {
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ListScrean;
