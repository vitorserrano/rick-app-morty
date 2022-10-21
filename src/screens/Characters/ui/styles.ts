import { ActivityIndicator } from 'react-native'
import { styled } from '@src/styleguide'

export const SafeArea = styled('SafeAreaView', {
  flex: 1,
  backgroundColor: '$gray900'
})

export const Container = styled('View', {
  flex: 1,
  paddingVertical: 24,
  paddingLeft: 24
})

export const Title = styled('Text', {
  fontSize: 32,
  fontWeight: '900',
  color: '$gray100',
  marginBottom: 20
})

export const Description = styled('Text', {
  fontSize: 16,
  lineHeight: 24,
  color: '$gray500',
  marginBottom: 40,
  marginRight: 24
})

export const List = styled('FlatList', {
  flexGrow: 1,
  marginTop: 20
})

export const Card = styled('TouchableOpacity', {
  flex: 1,
  alignItems: 'center',
  backgroundColor: '$gray800',
  paddingHorizontal: 14,
  paddingVertical: 18,
  marginRight: 24,
  marginBottom: 24,
  borderRadius: 12,
  maxWidth: 180
})

export const Image = styled('Image', {
  width: 140,
  height: 140,
  borderRadius: 8
})

export const Name = styled('Text', {
  flex: 1,
  fontSize: 18,
  lineHeight: 24,
  fontWeight: '900',
  color: '$gray200',
  marginTop: 12
})

export const LoaderContainer = styled('View', {
  marginVertical: 30,
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: 24
})

export const Info = styled('Text', {
  fontSize: 14,
  lineHeight: 24,
  color: '$gray400',
  marginBottom: 6
})
