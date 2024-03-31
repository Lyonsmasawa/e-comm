import { FlatList, Text, View, ActivityIndicator } from "react-native";
import React from "react";
import styles from "./productrow.style";
import { COLORS, SIZES } from "../../constants/theme";
import { Ionicons } from "@expo/vector-icons";
import ProductCartView from "./ProductCartView";
import useFetch from "../../hook/useFetch";

const ProductRow = () => {
  const { data, isLoading, error } = useFetch();
  const products = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
      ) : error ? (
        <Text>Something went wrong!{error}</Text>
      ) : (
        <FlatList
          data={data}
          key={(item) => item?.item?._id}
          renderItem={({ item }) => <ProductCartView item={item} />}
          horizontal
          contentContainerStyle={{ columnGap: SIZES.medium }}
        />
      )}
    </View>
  );
};

export default ProductRow;
