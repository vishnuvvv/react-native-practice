import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FancyCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>Places</Text>
      <View style={[styles.cards, styles.cardsElevated]}>
        <Image
          source={{
            uri: 'https://img.traveltriangle.com/blog/wp-content/uploads/2018/11/Cover-for-best-places-to-visit-in-July-in-the-world.jpg',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Hawa Mahal</Text>
          <Text style={styles.cardLabel}>Pink City jaipur </Text>
          <Text style={styles.cardDescription}>
            Pink City jaipur iks mostjkhjkff fkkfjhgajhgafsdhgf hfhjhfdhnn
            ghfgiuybkj jdygbciygd esdfukhgbgfvb{' '}
          </Text>
          <Text style={styles.cardFooter}>17 mins away</Text>
        </View>
      </View>
    </View>
  );
};

export default FancyCard;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 28,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  cards: {
    width: 350,
    height: 360,
    borderRadius: 10,
    margin: 12,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  cardsElevated: {
    backgroundColor: '#ffffff',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImage: {
    height: 180,
    marginBottom: 10,
    borderTopRightRadius: 7,
    borderTopLeftRadius: 7,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardTitle: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 17,
    marginBottom: 4,
  },
  cardLabel: {
    color: '#000000',
    marginBottom: 4,
    fontStyle: 'italic',
  },
  cardDescription: {
    color: '#242b2e',
    fontSize: 12,
    marginBottom: 12,
    flexShrink: 1,
  },
  cardFooter: {
    color: '#000000',
  },
});
