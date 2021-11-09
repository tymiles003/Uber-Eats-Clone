import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

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
    descrpitio: "mashed platain with fried chicken",
    price: "$22.00",
    image:
      "https://mydominicankitchen.com/wp-content/uploads/2019/07/Mofongo-Smart-Little-Cookie-3.jpg",
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
    <View style={styles.menuItemStyle}>
      <FoodInfo food={foods[0]} />
      <FoodImage food={foods[0]} />
    </View>
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
