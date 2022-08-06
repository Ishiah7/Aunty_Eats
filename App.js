import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import RestaurantDetailsPage from "./src/screens/RestaurantDetailsScreen";
import DishDetailsScreen from "./src/screens/DishDetailsScreen";
import Basket from "./src/screens/Basket";
import OrderScreen from "./src/screens/OrdersScreen";
import OrderDetails from "./src/screens/OrderDetails";

export default function App() {
  return (
    <View style={styles.container}>
      <OrderDetails />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 30,
  },
});
