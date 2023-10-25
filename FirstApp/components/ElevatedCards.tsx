import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ElevatedCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevated1]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevated2]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevated3]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevated4]}>
          <Text>Tap</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default ElevatedCards;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  container: {
    padding: 8,
  },
  card: {
    width: 100,
    height: 100,
    borderRadius: 5,
    margin: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardElevated: {
    backgroundColor: 'gray',
  },
  cardElevated1: {
    backgroundColor: 'orange',
  },
  cardElevated2: {
    backgroundColor: 'teal',
  },
  cardElevated3: {
    backgroundColor: 'pink',
  },
  cardElevated4: {
    backgroundColor: 'violet',
  },
});
