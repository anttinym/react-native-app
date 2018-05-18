import React from 'react'
import PropTypes from 'prop-types'
import { FlatList, StyleSheet } from 'react-native'

import CardListItem from './CardListItem'


const CardList = (props) => {
  const { cards } = props
  console.log(props.cards)
  return (
    <FlatList
      style={styles.container}
      data={cards}
      renderItem={({ item }) => (
        <CardListItem
          name={item.name}
          type={item.type}
          imageUrl={item.imageUrl}
          text={item.text}
        />
      )}
      keyExtractor={card => `${card.id}`}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  }
})

CardList.defaultProps = {
  cards: [{ name: 'name' }]
}

CardList.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({}))
}

export default CardList
