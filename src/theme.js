import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  styles: {
    global: {
      body: {
        bg: '#0A0F1E', // Darker blue background
        color: 'gray.50',
      },
      '::-webkit-scrollbar': {
        width: '8px',
      },
      '::-webkit-scrollbar-track': {
        background: '#151A2E',
      },
      '::-webkit-scrollbar-thumb': {
        background: '#4F46E5', // Indigo accent
        borderRadius: '8px',
      },
    },
  },
  colors: {
    brand: {
      primary: '#4F46E5', // Indigo
      secondary: '#7C3AED', // Purple
      accent: '#10B981', // Emerald
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: '500',
        borderRadius: 'xl',
        transition: 'all 0.2s ease-in-out',
        _hover: {
          transform: 'translateY(-2px)',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        },
      },
      variants: {
        solid: {
          bg: 'brand.primary',
          color: 'white',
          _hover: {
            bg: '#4338CA',
            boxShadow: '0 0 0 3px rgba(79, 70, 229, 0.4)',
          },
        },
        outline: {
          borderColor: 'brand.primary',
          color: 'brand.primary',
          borderWidth: '2px',
          _hover: {
            bg: 'rgba(79, 70, 229, 0.1)',
          },
        },
        ghost: {
          color: 'brand.primary',
          _hover: {
            bg: 'rgba(79, 70, 229, 0.1)',
          },
        },
      },
    },
    Container: {
      baseStyle: {
        maxW: '1280px',
        px: { base: 4, md: 8, lg: 12 },
      },
    },
    Heading: {
      baseStyle: {
        color: 'gray.50',
        letterSpacing: '-0.02em',
        fontWeight: '700',
      },
    },
    Text: {
      baseStyle: {
        color: 'gray.200',
        lineHeight: 'tall',
      },
    },
    Input: {
      baseStyle: {
        field: {
          borderRadius: 'xl',
          _focus: {
            boxShadow: '0 0 0 3px rgba(79, 70, 229, 0.4)',
          },
        },
      },
    },
  },
});

export default theme;
