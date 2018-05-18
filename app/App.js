import React from 'react'
import { View, StyleSheet } from 'react-native'

// import AppNavigator from './navigators/AppNavigator'
import cardData from './fixtures/cardData.json'
import CardList from './components/CardList'

const App = () => (
  <View style={styles.appContainer}>
    <CardList cards={cardData.cards} />
  </View>
)

/* const App = () => (
  <View style={styles.appContainer}>
    <AppNavigator />
  </View>
) */

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  }
})

export default App
