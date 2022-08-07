import { View, FlatList } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import DishListItem from "../../components/DishListItem";
import restaurants from "../../../assets/data/restaurants.json";
import Header from "../../screens/RestaurantDetailsScreen/Header";
import styles from "./styles";
import { useRoute, useNavigation } from "@react-navigation/native";

const restaurant = restaurants[0];

const RestaurantDetailsPage = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const id = route.params?.id;
  console.warn(id);

  return (
    <View style={styles.page}>
      <FlatList
        ListHeaderComponent={() => <Header restaurant={restaurant} />}
        data={restaurant.dishes}
        renderItem={({ item }) => <DishListItem dish={item} />}
        keyExtractor={(item) => item.name}
      />
      <View style={styles.iconContainer}>
        <Ionicons
          onPress={() => navigation.goBack()}
          name="arrow-back-circle"
          size={45}
          color="white"
        />
      </View>
    </View>
  );
};

export default RestaurantDetailsPage;
