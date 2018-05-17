import React from 'react'
import PropTypes from 'prop-types'
import { FlatList } from 'react-native'

import CardListItem from './CardListItem'


const CardList = (props) => {
  const { cards } = props
  console.log(props)
  return (
    <FlatList
      data={cards}
      renderItem={({ item }) => (
        <CardListItem
          name={item.name}
          imageUrl={item.imageUrl}
        />
      )}
      keyExtractor={card => `${card.id}`}
    />
  )
}

CardList.defaultProps = {
  cards: [{ name: 'name' }]
}

CardList.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({}))
}

export default CardList
