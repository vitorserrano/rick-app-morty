import { TextInputProps, ActivityIndicator } from 'react-native'

import { useTheme } from '@src/styleguide'
import {
  Container,
  Input,
  LoaderContainer,
  Button,
  IconContainer,
  Icon
} from './styles'

interface SearchBarProps extends TextInputProps {
  onSearch: () => void
  onClear: () => void
  isSearching: boolean
  isClearable: boolean
}

export const SearchBar = ({
  onSearch,
  onClear,
  isSearching,
  isClearable,
  ...rest
}: SearchBarProps) => {
  const { colors } = useTheme()
  const { value } = rest

  return (
    <Container>
      <Input
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType="search"
        onEndEditing={onSearch}
        placeholderTextColor={colors.gray400}
        {...rest}
      />

      {isSearching ? (
        <LoaderContainer>
          <ActivityIndicator size="small" color={colors.gray200} />
        </LoaderContainer>
      ) : (
        <IconContainer>
          {!!isClearable && (
            <Button onPress={onClear} disabled={!value}>
              <Icon name="x" size={20} />
            </Button>
          )}

          <Button onPress={onSearch} disabled={!value}>
            <Icon name="search" size={20} disabled={!value} />
          </Button>
        </IconContainer>
      )}
    </Container>
  )
}
