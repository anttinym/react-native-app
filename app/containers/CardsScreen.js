import React from 'react'
import CardList from '../components/CardList'
import { getCards } from '../api/mtg_api'

class CardsScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: null,
      isLoading: false
    }
    this.onLoad = this.onLoad.bind(this)
  }

  componentDidMount() {
    this.onLoad()
  }

  onLoad() {
    this.setState({ isLoading: true })
    getCards()
      .then((cards) => {
        const shuffled = cards.cards.sort(() =>
          0.5 - Math.random())
        const selected = shuffled.slice(0, 10)
        return Promise.all(selected)
      })
      .then((theCards) => {
        this.setState({
          cards: theCards,
          isLoading: false
        })
      })
      .catch((error) => {
        console.log(error)
        this.setState({
          cards: null,
          isLoading: false
        })
      })
  }

  render() {
    const { navigation } = this.props
    const { cards, isLoading } = this.state
    return (
      <CardList
        cards={cards}
        isLoading={isLoading}
        navigation={navigation}
        onLoad={this.onLoad}
      />
    )
  }
}

export default CardsScreen
