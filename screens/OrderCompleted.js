import React, { useEffect, useState } from "react";
import { Text, SafeAreaView, View } from "react-native";
import { useSelector } from "react-redux";
import LottieView from "lottie-react-native";
import MenuItems from "../components/restaurantDetail/MenuItems";

import firebase from "../firebase";

export default function OrderCompleted() {
  const [lastOrder, setLastOrder] = useState({
    items: [
      {
        title: "Bologna",
        description: "With butter and lettuce, tomato and sauce bechara",
        price: "$13.50",
        image:
          "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/9/19/1/HB0102H_Fried-Bologna-Chips_s4x3.jpg.rend.hgtvcom.616.462.suffix/1393524973199.jpeg",
      },
    ],
  });

  const { items, restaurantName } = useSelector(
    (state) => state.cartReducer.selectedItems
  );

  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });

  useEffect(() => {
    const db = firebase.firestore();
    const unsubscribe = db
      .collection("orders")
      .orderBy("createAt", "desc")
      .limit(1)
      .onSnapshot((snapshot) => {
        snapshot.docs.map((doc) => {
          setLastOrder(doc.data());
        });
      });
    return unsubscribe();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      {/* green checkmark */}
      <View style={{ margin: 15, alignItems: "center", height: "100%" }}>
        <LottieView
          style={{ height: 100, alignSelf: "center", marginBottom: 30 }}
          source={require("../assets/animations/check-mark.json")}
          autoPlay
          speed={0.5}
          loop={false}
        />
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Your order at {restaurantName} has been places for {totalUSD}
        </Text>
        <MenuItems foods={lastOrder.items} hideCheckbox={true} />
        {/* cooking */}
        <LottieView
          style={{ height: 200, alignSelf: "center" }}
          source={require("../assets/animations/cooking.json")}
          autoPlay
          speed={0.5}
        />
      </View>
    </SafeAreaView>
  );
}
