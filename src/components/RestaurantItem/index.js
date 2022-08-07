import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const RestaurantItem = ({ restaurant }) => {
  const Navigation = useNavigation();

  const onPress = () => {
    Navigation.navigate("Restaurant", { id: restaurant.id });
  };

  return (
    <Pressable onPress={onPress} style={styles.restaurantContainer}>
      <View style={styles.restaurantContainer}>
        <Image
          source={{ uri: restaurant.image }}
          style={{
            width: "100%",
            aspectRatio: 5 / 3,
            borderRadius: 5,
          }}
        />
        <View style={styles.row}>
          <View>
            <Text style={styles.name}>{restaurant.title}</Text>
            <Text style={styles.subtitle}>
              R {restaurant.deliveryFee} &#8226; {restaurant.minDeliveryTime}-
              {restaurant.maxDeliveryTime} Minutes
            </Text>
          </View>
          <View style={styles.rating}>
            <Text style={styles.ratingFont}>{restaurant.rating}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default RestaurantItem;

const styles = StyleSheet.create({
  restaurantContainer: {
    width: "100%",
    marginVertical: 10,
  },
  // image: {
  //   width: "100%",
  //   aspectRatio: 5 / 3,
  //   marginBottom: 5,
  // },
  title: {
    fontSize: 2,
    fontWeight: "bold",
    marginVertical: 5,
  },
  subtitle: {
    color: "grey",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  rating: {
    marginLeft: "auto",
    backgroundColor: "lightgray",
    alignItems: "center",
    justifyContent: "center",
    width: 30,
    height: 30,
    borderRadius: 25,
    padding: 5,
  },
  ratingFont: {
    color: "white",
    fontWeight: "400",
  },
});
