import axios from 'axios'

const api = 'https://rickandmortyapi.com/api'

export interface Character {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: {
    name: string
    url: string
  }
  location: {
    name: string
    url: string
  }
  image: string
  episode: string[]
  url: string
  created: string
}

export interface GetCharactersResponse {
  info: {
    count: number
    pages: number
    next: string
    prev: string
  }
  results: Character[]
}

export const getCharacters = async (
  page: number,
  filter: string
): Promise<GetCharactersResponse> => {
  const filterName = filter ? `&name=${filter}` : ''
  const {
    data: { results, info }
  } = await axios.get<GetCharactersResponse>(
    `${api}/character/?page=${page}${filterName}`
  )

  return { results, info }
}
