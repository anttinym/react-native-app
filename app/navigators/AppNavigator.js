import { createStackNavigator } from 'react-navigation'

import CardsScreen from '../containers/CardsScreen'

export default createStackNavigator({
  Cards: {
    screen: CardsScreen,
    navigationOptions: {
      title: 'Magic: The Gathering'
    }
  },
  initialRouteName: 'Cards'
})
