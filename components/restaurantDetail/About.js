import React from "react";
import { View, Text, Image } from "react-native";

const yelpRestInfo = {
  name: "Farmhouse Kitchen Thai Cuisine",
  image:
    "https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=600,height=400,format=jpeg,quality=50/https://doordash-static.s3.amazonaws.com/media/store/header/109873.jpg",
  price: "$$",
  reviews: "1500",
  rating: 5,
  categories: [{ title: "Thai" }, { title: "comfort food" }],
};

const { name, image, price, reviews, rating, categories } = yelpRestInfo;

const formattedCategories = categories.map((cat) => cat.title).join(" • ");

const description = `${formattedCategories} ${
  price ? " • " + price : ""
} •  🎫 • ${rating} ⭐ (${reviews}+)`;

export default function About() {
  return (
    <View>
      <RestaurantImage image={{ image }} />
      <RestaurantName name={name} />
      <RestaurantDescription description={description} />
    </View>
  );
}

const RestaurantImage = (props) => (
  <Image source={{ uri: props.image }} style={{ width: "100%", height: 180 }} />
);

const RestaurantName = (props) => (
  <Text
    style={{
      fontSize: 29,
      fontWeight: "600",
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {props.title}
  </Text>
);

const RestaurantDescription = (props) => (
  <Text
    style={{
      marginTop: 10,
      marginHorizontal: 15,
      fontWeight: "400",
      fontSize: 15.5,
    }}
  >
    {props.description}
  </Text>
);
