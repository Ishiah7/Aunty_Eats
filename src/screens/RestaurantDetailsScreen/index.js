import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import restaurants from "../../../assets/data/restaurants.json";

const restaurant = restaurants[0];

const RestaurantDetailsPage = () => {
  return (
    <View style={styles.page}>
      <Image source={{ uri: restaurant.image }} style={styles.image} />

      <View style={styles.iconContainer}>
        <Ionicons name="arrow-back-circle" size={30} color="white" />
      </View>

      <View style={styles.container}>
        <Text style={styles.title}>{restaurant.name}</Text>
        <Text style={styles.subtitle}>
          R {restaurant.deliveryFee} &#8226; {restaurant.minDeliveryTime}-
          {restaurant.maxDeliveryTime} minutes
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
    paddingVertical: 30,
  },
  image: {
    width: "100%",
    aspectRatio: 5 / 3,
    borderRadius: "8px",
  },
  title: {
    fontSize: 35,
    fontWeight: "600",
    margin: 10,
  },
  subtitle: {
    fontSize: 15,
    color: "grey",
  },
  container: {
    margin: 10,
  },
  iconContainer: {
    position: "absolute",
    top: 40,
    left: 20,
  },
});

export default RestaurantDetailsPage;
