import React, { useState } from 'react';
import { View, TextInput, StyleSheet, SafeAreaView } from 'react-native';

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
    // Here you can implement the search logic or API call based on the query
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search..."
        value={searchQuery}
        onChangeText={handleSearch}
      />
      {/* You can add more components or a list to display search results below */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBar: {
    margin: 10,
    marginBottom: 20,
    paddingHorizontal: 20,
    height: 40,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 25,
    fontSize: 16,
  },
});

export default SearchScreen;
