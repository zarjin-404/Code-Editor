import { Box, Button, Text, useToast } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useState } from "react";
import { executeCode } from "../api";

const Output = ({ editorRef, language }) => {
  const toast = useToast();
  const [output, setOutput] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const runCode = async () => {
    const sourceCode = editorRef.current?.getValue();
    if (!sourceCode) {
      toast({
        title: "No code to run",
        description: "Please enter some code first",
        status: "warning",
        duration: 3000,
      });
      return;
    }

    try {
      setIsLoading(true);
      setIsError(false);
      const { run: result } = await executeCode(language, sourceCode);

      if (!result || !result.output) {
        throw new Error("Invalid response from server");
      }

      setOutput(result.output.split("\n"));
      setIsError(Boolean(result.stderr));
    } catch (error) {
      console.error("Code execution error:", error);
      setIsError(true);
      toast({
        title: "An error occurred",
        description: error.message || "Unable to run code. Please try again.",
        status: "error",
        duration: 6000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box w="50%">
      <Button
        variant="outline"
        colorScheme="green"
        mb={4}
        isLoading={isLoading}
        onClick={runCode}
        disabled={!editorRef.current}
      >
        Run Code
      </Button>
      <Box
        height="75vh"
        p={4}
        color={isError ? "red.400" : "inherit"}
        border="1px solid"
        borderRadius={4}
        borderColor={isError ? "red.500" : "#333"}
        overflowY="auto"
      >
        {output ? (
          output.map((line, i) => (
            <Text key={i} whiteSpace="pre-wrap">
              {line}
            </Text>
          ))
        ) : (
          <Text color="gray.500">Click "Run Code" to see the output here</Text>
        )}
      </Box>
    </Box>
  );
};

Output.propTypes = {
  editorRef: PropTypes.shape({
    current: PropTypes.object,
  }).isRequired,
  language: PropTypes.string.isRequired,
};

export default Output;
