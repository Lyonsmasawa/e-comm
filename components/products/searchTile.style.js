import { StyleSheet } from "react-native";
import { COLORS, SIZES, SHADOWS } from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: SIZES.smallest,
    flexDirection: "row",
    padding: SIZES.small,
    borderRadius: SIZES.small,
    shadowColor: COLORS.lightWhite,
    ...SHADOWS.medium,
    backgroundColor: "#FFF",
  },

  image: {
    width: 70,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: SIZES.medium,
    backgroundColor: COLORS.secondary,
  },
});

export default styles;
