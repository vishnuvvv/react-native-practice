import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ActionCard() {
  return (
    <View>
      <Text style={styles.headingText}>ActionCard</Text>
      <View style={[styles.card, styles.elevatedCards]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>heading</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {},
  card: {},
  elevatedCards: {},
  headingContainer: {},
  headerText: {},
});
