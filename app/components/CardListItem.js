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
      <View style={styles.imageCont}>
        <Image
          style={styles.image}
          source={{ uri: imageUrl }}
        />
      </View>
      <Text style={styles.text}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    borderColor: colors.grey,
    backgroundColor: colors.background,
    borderRadius: 2,
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
    fontSize: 20,
    fontWeight: 'bold'
  },
  text: {
    fontSize: 14,
    padding: 5
  },
  imageCont: {
    shadowOpacity: 0.75,
    shadowRadius: 5,
    shadowColor: colors.black,
    shadowOffset: { height: 0, width: 0 }
  },
  image: {
    width: 350,
    height: 350,
    resizeMode: 'contain',
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
