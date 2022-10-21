import { useState, useEffect, useRef } from 'react'
import { AxiosError } from 'axios'

import { getCharacters, Character } from '@src/services'
import { CharactersContainer } from './ui'

interface LoadCharactersParams {
  page?: number
  shouldConcat?: boolean
  filter?: string
}

export const Characters = () => {
  const currentPage = useRef(1)
  const hasNextPage = useRef(false)
  const currentFilter = useRef('')

  const [characters, setCharacters] = useState<Character[]>([])
  const [charactersCount, setCharactersCount] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isLoadingMoreItems, setIsLoadingMoreItems] = useState(false)
  const [isSearching, setIsSearching] = useState(false)
  const [isClearable, setIsClearable] = useState(false)
  const [searchText, setSearchText] = useState('')

  const loadCharacters = async ({
    page = 1,
    shouldConcat,
    filter = ''
  }: LoadCharactersParams): Promise<void> => {
    setIsLoading(true)

    try {
      const {
        results,
        info: { next, count }
      } = await getCharacters(page, filter)

      shouldConcat
        ? setCharacters(prevItems => [...prevItems, ...results])
        : setCharacters(results)

      setCharactersCount(count)

      currentPage.current = page
      hasNextPage.current = !!next
      currentFilter.current = filter
    } catch (error) {
      if (error instanceof AxiosError) {
        const isNotFound =
          error?.response?.data?.error === 'There is nothing here'

        if (isNotFound) {
          setCharacters([])
        }
      }
    } finally {
      setIsLoading(false)
    }
  }

  const onLoadMoreCharacters = async () => {
    if (!hasNextPage.current || isLoadingMoreItems) {
      return
    }

    try {
      setIsLoadingMoreItems(true)

      await loadCharacters({
        page: currentPage.current + 1,
        shouldConcat: true,
        filter: currentFilter.current
      })
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoadingMoreItems(false)
    }
  }

  const onChangeSearchText = (text: string): void => setSearchText(text)

  const onSearch = async (): Promise<void> => {
    setIsSearching(true)
    setIsClearable(true)

    try {
      await loadCharacters({ filter: searchText })
    } catch (error) {
      console.log(error)
    } finally {
      setTimeout(() => {
        setIsSearching(false)
      }, 400)
    }
  }

  const onClear = (): void => {
    setSearchText('')
    setIsClearable(false)
    loadCharacters({ filter: '' })
  }

  useEffect(() => {
    loadCharacters({})
  }, [])

  return (
    <CharactersContainer
      characters={characters}
      searchText={searchText}
      isLoading={isLoading}
      isLoadingMoreItems={isLoadingMoreItems}
      isSearching={isSearching}
      isClearable={isClearable}
      charactersCount={charactersCount || 0}
      onChangeSearchText={onChangeSearchText}
      onLoadMoreCharacters={onLoadMoreCharacters}
      onSearch={onSearch}
      onClear={onClear}
    />
  )
}
