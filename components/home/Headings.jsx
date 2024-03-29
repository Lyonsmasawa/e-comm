import { View, Text } from "react-native";
import React from "react";
import styles from "./headings.style";
import { COLORS, SIZES } from "../../constants/theme";
import {TouchableOpacity } from "react-native-gesture-handler";
import {  Ionicons } from "@expo/vector-icons";

const Headings = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>New Arrivals</Text>
        <TouchableOpacity>
          <Ionicons name="ios-grid" size={24} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Headings;
