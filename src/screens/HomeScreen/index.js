import {
  StyleSheet,
  FlatList,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import RestaurantItem from "../../components/RestaurantItem";
import restaurants from "../../../assets/data/restaurants.json";
import { useEffect, useState } from "react";

export default function HomeScreen() {
  const [tab, setTab] = useState("All");
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    if (tab === "All") {
      setFiltered(restaurants);
    } else {
      setFiltered(restaurants.filter((resturaunt) => resturaunt.tag === tab));
    }
  }, [tab]);

  console.log(filtered);
  return (
    <View style={styles.page}>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.tabButton}
          onPress={() => setTab("All")}
        >
          <Text style={styles.tabHeading}>All</Text>
          <View
            style={tab === "All" ? styles.underlineActive : styles.underline}
          ></View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabButton}
          onPress={() => setTab("Halaal")}
        >
          <Text style={styles.tabHeading}>Halaal</Text>
          <View
            style={tab === "Halaal" ? styles.underlineActive : styles.underline}
          ></View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabButton}
          onPress={() => setTab("Vegan")}
        >
          <Text style={styles.tabHeading}>Vegan</Text>
          <View
            style={tab === "Vegan" ? styles.underlineActive : styles.underline}
          ></View>
        </TouchableOpacity>
      </View>

      <FlatList
        data={filtered}
        renderItem={({ item }) => <RestaurantItem restaurant={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  tabButton: {
    marginHorizontal: 20,
  },
  tabHeading: {
    marginHorizontal: 10,
    fontWeight: "bold",
  },
  underline: {
    width: "100%",
  },
  underlineActive: {
    borderBottomWidth: 3,
    width: "100%",

    borderBottomColor: "red",
  },
});
