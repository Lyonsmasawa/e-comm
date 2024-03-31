import {
  FlatList,
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import styles from "./searchTile.style";
import { COLORS, SIZES, SHADOWS } from "../../constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const SearchTile = ({ item }) => {
  const itemData = item?.item;
  const navigation = useNavigation();
  console.log(itemData.imageUrl);
  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        onPress={() => navigation.navigate("ProductDetails", { item })}
      >
        <View style={styles.image}>
          <Image
            source={{ uri: itemData.imageUrl }}
            style={styles.productImg}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.productTitle}>{itemData?.title}</Text>
          <Text style={styles.supplier}>{itemData?.supplier}</Text>
          <Text style={styles.supplier}>${itemData?.price}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SearchTile;
