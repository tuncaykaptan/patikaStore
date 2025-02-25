import React from 'react';
import {SafeAreaView, View, Text, StyleSheet, TextInput, FlatList} from 'react-native';
import data from './data.json';
import Product from './components/Product';

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>


        <FlatList
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={styles.header_text}>PATIKASTORE</Text>
            <TextInput style={styles.searchbar} placeholder="Ara"/>
          </View>
        }
        data={data}
        numColumns={2}
        renderItem={({item}) => (
            <Product name={item.title} price={item.price} img={item.imgURL} inStock={item.inStock}/>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    padding: 5,
  },
  header: {
    paddingVertical: 10,
    gap: 10,
  },
  header_text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'purple',
  },
  searchbar: {
    padding: 15,
    backgroundColor: '#e7ebee',
    borderRadius: 5,
  },
});

export default App;
