import { useCallback, ReactElement } from 'react'
import { ActivityIndicator, Text, View } from 'react-native'

import { Character } from '@src/services'
import { SearchBar } from '@src/components/SearchBar'
import { useTheme } from '@src/styleguide'

import {
  SafeArea,
  Container,
  Title,
  Description,
  List,
  Card,
  Image,
  Name,
  LoaderContainer,
  Info
} from './styles'

interface CharactersContainerProps {
  characters: Character[]
  searchText: string
  isLoading: boolean
  isLoadingMoreItems: boolean
  isSearching: boolean
  isClearable: boolean
  charactersCount: number
  onChangeSearchText: (text: string) => void
  onLoadMoreCharacters: () => void
  onSearch: () => void
  onClear: () => void
}

export const CharactersContainer = ({
  characters,
  searchText,
  isLoading,
  isLoadingMoreItems,
  isSearching,
  isClearable,
  charactersCount,
  onChangeSearchText,
  onLoadMoreCharacters,
  onSearch,
  onClear
}: CharactersContainerProps) => {
  const { colors } = useTheme()

  const keyExtractor = useCallback(
    (item: Character): string => String(item.id),
    []
  )

  const renderItem = useCallback(
    ({ item }: { item: Character }): ReactElement => (
      <Card>
        <Image source={{ uri: item.image }} />
        <Name>{item.name}</Name>
      </Card>
    ),
    []
  )

  const renderListHeader = (): ReactElement => (
    <Info>{`${charactersCount} ${
      charactersCount === 1 ? 'character' : 'characters'
    } found`}</Info>
  )

  const renderListFooter = (): ReactElement => (
    <LoaderContainer>
      <ActivityIndicator size="large" color={colors.gray200} />
    </LoaderContainer>
  )

  const renderListEmpty = (): ReactElement => (
    <Info>
      {isLoading ? 'Looking for characters...' : 'Sorry, no results found.'}
    </Info>
  )

  return (
    <SafeArea>
      <Container>
        <Title>Characters</Title>
        <Description>
          Search your favorite characters or discover new ones, use your
          imagination!
        </Description>

        <SearchBar
          placeholder="Search characters..."
          onChangeText={text => onChangeSearchText(text)}
          value={searchText}
          onSearch={onSearch}
          onClear={onClear}
          isSearching={isSearching}
          isClearable={isClearable}
        />

        {!isSearching && (
          <List
            data={characters}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
            onEndReached={onLoadMoreCharacters}
            onEndReachedThreshold={0.5}
            numColumns={2}
            showsVerticalScrollIndicator
            ListHeaderComponent={characters.length ? renderListHeader : null}
            ListFooterComponent={isLoadingMoreItems ? renderListFooter : null}
            ListEmptyComponent={renderListEmpty}
          />
        )}
      </Container>
    </SafeArea>
  )
}
