import { StyleSheet } from "react-native";

export default StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    aspectRatio: 6 / 3,
    opacity: 0.8,
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
  menuTitle: {
    marginVertical: 10,
    fontSize: 30,
    letterSpacing: 0.6,
  },
  iconContainer: {
    position: "absolute",
    top: 25,
    left: 15,
  },
});
