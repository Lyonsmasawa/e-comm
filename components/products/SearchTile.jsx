import {
  FlatList,
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import styles from "./productrow.style";
import { COLORS, SIZES, SHADOWS } from "../../constants/theme";
import { Ionicons } from "@expo/vector-icons";
import ProductCartView from "./ProductCartView";
import useFetch from "../../hook/useFetch";

const SearchTile = ({ item }) => {
  const itemData = item?.item;
  console.log(itemData);
  return (
    <View>
      <TouchableOpacity style={styles.container}>
        <View style={styles.image}>
          <Image source={{ uri: itemData.imageUrl }} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SearchTile;
