import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, Image, StyleSheet } from 'react-native'

import colors from '../constants/colors'

const CardListItem = (props) => {
  const {
    name, imageUrl, type, text
  } = props
  return (
    <View style={styles.item}>
      <View style={styles.title}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.text}>{type}</Text>
      </View>
      <Image
        style={styles.image}
        source={{ uri: imageUrl }}
      />
      <Text style={styles.text}>{text}</Text>
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
  text: {
    fontSize: 12
  },
  image: {
    width: 250,
    height: 350,
    marginBottom: 10
  }
})

CardListItem.defaultProps = {
  name: 'name',
  imageUrl: 'url',
  type: 'type',
  text: 'text'
}

CardListItem.propTypes = {
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  type: PropTypes.string,
  text: PropTypes.string
}


export default CardListItem
