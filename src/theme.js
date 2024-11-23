import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  styles: {
    global: {
      body: {
        bg: "#0f0a19",
        color: "gray.500",
      },
    },
  },
  colors: {
    brand: {
      primary: "#38B2AC",
      secondary: "#805AD5",
    },
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: "brand.primary",
      },
    },
  },
});

export default theme;
