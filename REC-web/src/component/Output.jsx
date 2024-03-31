import { Box, Text, Button, useToast } from "@chakra-ui/react";
import { useState } from "react"; // useState
import React from "react";
import { executeCode } from "../constants/api";

const Output = ({ editorRef, language, value, user_input }) => {
  const toasts = useToast();
  const [code, setcode] = useState("");
  const [isError, setIsError] = useState(false);
  const [output, setOutput] = useState(null);

  // console.log(typeof user_input.target);
  const runCode = async () => {
    const sourceCode = editorRef.current.getValue();
    if (!sourceCode) return;
    try {
      const { run: result } = await executeCode(
        language,
        sourceCode,
        user_input
      );
      // console.log(result.output.split("\n"));
      setOutput(result.output.split("\n"));
      // console.log(result.stderr);
      result.stderr? setIsError(true) : setIsError(false);
      if(result.stderr) {
        throw new Error(result.stderr);
      }
    } catch (error) {
      console.log(error);
      toasts({
        title: "Error",
        description: error.message || "unable to run code",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      console.log(error);
    }
  };

  return (
    <>
      <Box w="50%" mb={3}>
        <Text mb={1} fontSize={"lg"}>
          Output
        </Text>
        <Button
          variant={"outline"}
          colorScheme="green"
          mb={4}
          onClick={runCode}
        >
          Run
        </Button>
        <Box
          height="75vh"
          p={2}
          borderRadius={4}
          borderColor={"white"}
          bgColor="black"
          color="green.400"
          fontSize="lg"
        >
          {output
            ? output.map((line, index) => <Text key={index}>{line}</Text>)
            : "Enter Run to see output"}
        </Box>
      </Box>
    </>
  );
};
export default Output;
