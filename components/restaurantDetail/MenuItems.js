import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { Divider } from "react-native-elements/dist/divider/Divider";
import BouncyCheckbox from "react-native-bouncy-checkbox";

const foods = [
  {
    title: "Lasagna",
    description: "With butter lettuce, tomato and sauce bechamel",
    price: "$15.40",
    image:
      "https://www.thespruceeats.com/thmb/-YUYSXc4T2H4P8o2JBApzJ3F5rw=/2069x2069/smart/filters:no_upscale()/white-and-red-sauce-lasagna-recipe-995925-hero-1-fb2c2142b39042069f0c50310047256d.jpg",
  },
  {
    title: "Tandoori Chicken",
    description: "Amazing Indian dish with ternderloim chicken",
    price: "$19.00",
    image:
      "https://www.cookingclassy.com/wp-content/uploads/2018/08/tandoori-chicken-12.jpg",
  },
  {
    title: "mofongo",
    description: "Mashed platain with fried chicken",
    price: "$22.00",
    image:
      "https://mydominicankitchen.com/wp-content/uploads/2019/07/Mofongo-Smart-Little-Cookie-3.jpg",
  },
  {
    title: "tripleta",
    description:
      "Tripleta is a popular sandwich from Puerto Rico, its name derived from the fact that it is filled with three types of meat: grilled steak, lechon pork",
    price: "$22.00",
    image:
      "https://cdn.vox-cdn.com/thumbor/3vfadPUpAuVp-JdsPNaC7dqm640=/0x0:6720x4480/1200x675/filters:focal(2823x1703:3897x2777)/cdn.vox-cdn.com/uploads/chorus_image/image/68479469/3O7A0380.0.jpg",
  },

  {
    title: "masala chicken",
    description: "mashed platain with fried chicken",
    price: "$22.00",
    image:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2017/05/chicken-masala-recipe-1-480x270.jpg",
  },
];

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },
  titleStyle: {
    fontSize: 19,
    fontWeight: "600",
  },
});

export default function MenuItems() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map((food, index) => (
        <View key={index}>
          <View style={styles.menuItemStyle}>
            <BouncyCheckbox
              iconStyle={{ borderColor: "lightgray", borderRadius: 0 }}
              fillColor="green"
            />
            <FoodInfo food={food} />
            <FoodImage food={food} />
          </View>
          <Divider
            width={0.5}
            orientation="vertical"
            style={{ marginHorizontal: 20 }}
          />
        </View>
      ))}
    </ScrollView>
  );
}

const FoodInfo = (props) => (
  <View style={{ width: 240, justifyContent: "space-evenly" }}>
    <Text style={styles.titleStyle}>{props.food.title}</Text>
    <Text>{props.food.description}</Text>
    <Text>{props.food.price}</Text>
  </View>
);

const FoodImage = (props) => (
  <View>
    <Image
      source={{ uri: props.food.image }}
      style={{ width: 100, height: 100, borderRadius: 8 }}
    />
  </View>
);
