import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, Image } from 'react-native'


const CardListItem = (props) => {
  const { name, imageUrl } = props
  console.log(props)
  return (
    <View>
      <Text>{name}</Text>
      <Image
        style={{ width: 200, height: 300 }}
        source={{ uri: imageUrl }}
      />
    </View>
  )
}
CardListItem.defaultProps = {
  name: 'name',
  imageUrl: 'url'
}

CardListItem.propTypes = {
  name: PropTypes.string,
  imageUrl: PropTypes.string
}


export default CardListItem
