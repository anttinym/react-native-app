import React from 'react'
import { View, StyleSheet } from 'react-native'

import AppNavigator from './navigators/AppNavigator'

const App = () => (
  <View style={styles.appContainer}>
    <AppNavigator />
  </View>
)

const styles = StyleSheet.create({
  appContainer: {
    flex: 1
  }
})

export default App
