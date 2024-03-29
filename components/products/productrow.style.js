import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  welcomeTxt: (color, top) => ({
    fontSize: SIZES.xxLarge - 8,
    fontFamily: "bold",
    marginTop: top,
    color: color,
    marginHorizontal: SIZES.small,
  }),
  searchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.medium,
    marginVertical: SIZES.medium,
    height: 50,
    marginHorizontal: SIZES.small,
  },
  searchIcon: {
    marginHorizontal: 10,
    color: COLORS.black,
    marginTop: SIZES.small,
  },
  searchWrapper: {
    backgroundColor: COLORS.secondary,
    marginRight: SIZES.small,
    marginLeft: SIZES.small,
    flex: 1,
  },
  searchInput: {
    fontFamily: "medium",
    paddingHorizontal: SIZES.small,
    height: "100%",
    width: "100%",
  },
  searchBtn: {
    width: 50,
    height: "100%",
    alignItems: "center",
    borderRadius: SIZES.medium,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
  },
});

export default styles;
