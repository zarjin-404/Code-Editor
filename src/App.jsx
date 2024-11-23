import { Box, Container } from "@chakra-ui/react";
import CodeEditor from "./components/CodeEditor";

function App() {
  return (
    <Box minH="100vh" bg="#0f0a19" color="gray.500">
      <Container maxW="container.xl" px={6} py={8}>
        <CodeEditor />
      </Container>
    </Box>
  );
}

export default App;
