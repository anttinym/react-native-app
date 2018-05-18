import config from '../constants/config'
import fetchGetJSON from '../util/fetchGetJSON'


export const getCards = () => {
  const url = `${config.mtgApiUrl}/cards`
  return fetchGetJSON(url)
}

export const getCardById = (id) => {
  const url = `${config.mtgApiUrl}/cards/${id}`
  return fetchGetJSON(url)
}
