import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const MarketplaceScreen = () => {
  const categories = ['All', 'Electronics', 'Clothing', 'Home'];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextInput style={styles.searchBar} placeholder="Search" />
        <View style={styles.categoryButtons}>
          {categories.map((category, index) => (
            <TouchableOpacity key={index} style={styles.categoryButton}>
              <Text style={styles.categoryButtonText}>{category}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.column}>
          {/* Placeholder for item image */}
          <View style={styles.itemBox} />
          <View style={styles.itemBox} />
          <View style={styles.itemBox} />
        </View>
        <View style={styles.column}>
          {/* Placeholder for item image */}
          <View style={styles.itemBox} />
          <View style={styles.itemBox} />
          <View style={styles.itemBox} />
        </View>
        <View style={styles.column}>
          {/* Placeholder for item image */}
          <View style={styles.itemBox} />
          <View style={styles.itemBox} />
          <View style={styles.itemBox} />
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerButtonText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerButtonText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerButtonText}>Other</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 16,
    backgroundColor: 'lightgray',
  },
  searchBar: {
    height: 40,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    borderRadius: 8,
    marginBottom: 12,
  },
  categoryButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categoryButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: 'gray',
    borderRadius: 8,
  },
  categoryButtonText: {
    color: 'white',
  },
  body: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  column: {
    flex: 1,
    marginRight: 16,
  },
  itemBox: {
    height: 100,
    backgroundColor: 'lightblue',
    marginBottom: 12,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: 'gray',
  },
  footerButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: 'lightgray',
    borderRadius: 8,
  },
  footerButtonText: {
    color: 'black',
  },
});

export default MarketplaceScreen;