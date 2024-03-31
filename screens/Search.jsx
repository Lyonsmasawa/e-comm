import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./search.styles";
import { COLORS, SIZES } from "../constants/theme";
import { Feather, Ionicons } from "@expo/vector-icons";
import axios from "axios";
import { SearchTile } from "../components";

const Search = () => {
  const [searchKey, setSearchKey] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://10.0.2.2:3000/api/products/search/${searchKey}`
      );
      // console.log(response.data);
      setSearchResults(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

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
              value={searchKey}
              onChangeText={setSearchKey}
              style={styles.searchInput}
            />
          </View>
          <View>
            <TouchableOpacity
              style={styles.searchBtn}
              onPress={() => handleSearch()}
            >
              <Feather name="search" size={24} color={COLORS.offwhite} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {searchResults?.length === 0 ? (
        <View style={{ flex: 1 }}>
          <Image
            source={require("../assets/images/Pose23.png")}
            style={styles.searchImage}
          />
        </View>
      ) : (
        <FlatList
          data={searchResults}
          keyExtractor={(item) => item._id}
          renderItem={(item) => <SearchTile item={item} />}
          style={{marginHorizontal: 12}}
        />
      )}
    </SafeAreaView>
  );
};

export default Search;
