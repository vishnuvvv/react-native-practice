import {View, ScrollView} from 'react-native';
import React from 'react';
import FlatCard from './components/FlatCard';
import ElevatedCards from './components/ElevatedCards';
import FancyCard from './components/FancyCard';
import ActionCard from './components/ActionCard';

const App = () => {
  return (
    <View>
      <ScrollView>
        <FlatCard />
        <ElevatedCards />
        <FancyCard />
        <ActionCard/>
      </ScrollView>
    </View>
  );
};

export default App;
