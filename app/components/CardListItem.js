import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, Image, StyleSheet } from 'react-native'

import colors from '../constants/colors'

const CardListItem = (props) => {
  const { name, imageUrl, type } = props
  console.log(props)
  return (
    <View style={styles.item}>
      <View style={styles.title}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.type}>{type}</Text>
      </View>
      <Image
        style={{ width: 200, height: 300 }}
        source={{ uri: imageUrl }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    borderColor: colors.black,
    // borderWidth: StyleSheet.hairlineWidth,
    borderWidth: 1,
    marginBottom: 20,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    marginBottom: 10
  },
  name: {
    fontSize: 20
  },
  type: {
    fontSize: 12
  }
})

CardListItem.defaultProps = {
  name: 'name',
  imageUrl: 'url',
  type: 'type'
}

CardListItem.propTypes = {
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  type: PropTypes.string
}


export default CardListItem
