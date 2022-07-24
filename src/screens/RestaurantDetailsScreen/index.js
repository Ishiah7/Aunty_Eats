import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import DishListItem from "../../components/DishListItem";
import restaurants from "../../../assets/data/restaurants.json";
import Header from "../../screens/RestaurantDetailsScreen/Header";
import styles from "./styles";

const restaurant = restaurants[0];

const RestaurantDetailsPage = () => {
  return (
    <View style={styles.page}>
      <FlatList
        ListHeaderComponent={() => <Header restaurant={restaurant} />}
        data={restaurant.dishes}
        renderItem={({ item }) => <DishListItem dish={item} />}
      />
      <View style={styles.iconContainer}>
        <Ionicons name="arrow-back-circle" size={45} color="white" />
      </View>
    </View>
  );
};

export default RestaurantDetailsPage;
