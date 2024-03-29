import { Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./search.styles";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { COLORS, SIZES } from "../constants/theme";
import { Feather, Ionicons } from "@expo/vector-icons";

const Search = () => {
  return (
    <SafeAreaView>
      <View>
        <View style={styles.searchContainer}>
          <TouchableOpacity>
            <Ionicons
              name="camera-outline"
              size={SIZES.xLarge}
              style={styles.searchIcon}
            />
          </TouchableOpacity>
          <View style={styles.searchWrapper}>
            <TextInput
              placeholder="What are you looking for"
              value=""
              onPressIn={() => {}}
              style={styles.searchInput}
            />
          </View>
          <View>
            <TouchableOpacity style={styles.searchBtn}>
              <Feather name="search" size={24} color={COLORS.offwhite} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Search;
