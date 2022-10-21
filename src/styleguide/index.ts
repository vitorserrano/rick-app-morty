import { createStitches } from 'stitches-native'

export const {
  styled,
  css,
  theme,
  createTheme,
  useTheme,
  ThemeProvider,
  config
} = createStitches({
  theme: {
    colors: {
      gray100: '#EDF2F7',
      gray200: '#E2E8F0',
      gray400: '#A0AEC0',
      gray500: '#718096',
      gray800: '#1A202C',
      gray900: '#171923'
    },
    fonts: {},
    fontSizes: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 24,
      xl: 32
    },
    space: {
      xs: 4,
      sm: 8,
      md: 16,
      lg: 24,
      xl: 32
    },
    radii: {
      xs: 4,
      sm: 6,
      md: 8,
      lg: 10,
      xl: 12,
      round: 999
    }
  }
})
