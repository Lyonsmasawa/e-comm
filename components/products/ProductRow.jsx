import { FlatList, Text } from "react-native";
import React from "react";
import styles from "./productrow.style";
import { COLORS, SIZES } from "../../constants/theme";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

const ProductRow = () => {
  const products = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <FlatList data={products} renderItem={({ item }) => <Text>Product</Text>} />
  );
};

export default ProductRow;
