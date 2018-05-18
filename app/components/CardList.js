import React from 'react'
import PropTypes from 'prop-types'
import {
  FlatList,
  StyleSheet,
  RefreshControl
} from 'react-native'

import CardListItem from './CardListItem'


const CardList = (props) => {
  const { cards, isLoading, onLoad } = props
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
      refreshControl={
        <RefreshControl
          refreshing={isLoading}
          onRefresh={onLoad}
        />
      }
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
  cards: PropTypes.arrayOf(PropTypes.shape({})),
  isLoading: PropTypes.bool.isRequired,
  onLoad: PropTypes.func.isRequired
}

export default CardList
