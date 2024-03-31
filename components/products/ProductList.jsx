import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { COLORS, SIZES } from "../../constants/theme";
import {
  Ionicons,
  SimpleLineIcons,
  MaterialCommunityIcons,
  Fontisto,
} from "@expo/vector-icons";
import styles from "./productList.style";
import { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import useFetch from "../../hook/useFetch";
import ProductCartView from "./ProductCartView";

const ProductList = () => {
  const { data, isLoading, error } = useFetch();
  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={data}        
        keyExtractor={(item) => item?.item?._id}
        numColumns={2}
        renderItem={(item) => <ProductCartView item={item?.item} />}
        contentContainerStyle={styles.container}
        ItemSeparatorComponent={() => <View style={styles.separator}/>}
      />
    </View>
  );
};

export default ProductList;
