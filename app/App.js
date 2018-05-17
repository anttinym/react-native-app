import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'

import CardList from './components/CardList'
import cardData from './fixtures/cardData.json'

const App = () => (
  <SafeAreaView style={styles.appContainer}>
    <CardList cards={cardData} />
  </SafeAreaView>
)

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  }
})

export default App
