import React from 'react'
import CardList from '../components/CardList'

const CardsScreen = (props) => {
  const { navigation } = props
  console.log(props)
  return (
    <CardList
      navigation={navigation}
    />
  )
}

export default CardsScreen
