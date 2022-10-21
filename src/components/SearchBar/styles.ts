import { Feather } from '@expo/vector-icons'
import { styled } from '@src/styleguide'

export const Container = styled('View', {
  paddingHorizontal: 18,
  backgroundColor: '$gray800',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 20,
  marginRight: 24,
  borderRadius: 18
})

export const Input = styled('TextInput', {
  width: '80%',
  fontSize: 14,
  color: '$gray200',
  paddingVertical: 18
})

export const LoaderContainer = styled('View', {
  width: 24
})

export const Button = styled('TouchableOpacity')

export const IconContainer = styled('View', {
  flexDirection: 'row',
  alignItems: 'center'
})

export const Icon = styled(Feather, {
  width: 24,
  color: '$gray200',

  variants: {
    disabled: {
      true: { color: '$gray400' },
      false: { color: '$gray200' }
    }
  }
})
