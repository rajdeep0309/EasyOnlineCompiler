import { Box, HStack, VStack, Input, Text } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { LanguageSelector } from "./LanguageSelector";
import { CODE_SNIPPETS } from "../constants/Constants";
import Output from "./Output";
import "./CodeEditor.css";
import { useMediaQuery } from "@chakra-ui/react";

const CodeEditor = () => {
  const [user_input, setUserInput] = useState("");
  const [language, setLanguage] = useState("cpp"); // [language, setLanguage
  const [value, setvalue] = useState(CODE_SNIPPETS["cpp"]);
  const editorRef = useRef();
  const [w800] = useMediaQuery("(max-width: 820px)");
  const [h1080] = useMediaQuery("(max-height: 1090px)");
  const [w667] = useMediaQuery("(min-width: 667px)");

  const [w360] = useMediaQuery("(min-width: 360px)");
  const [h375] = useMediaQuery("(min-height: 375px)");
  const [w430] = useMediaQuery("(max-width: 431px)");
  const [h926] = useMediaQuery("(max-height: 927px)");

  // [isLargerThan768
  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };
  const onSelect = (language) => {
    setLanguage(language);
    setvalue(CODE_SNIPPETS[language]);
  };

  return (
    <>
      <Box>
        {w430 && (
          <VStack spacing={4}>
            <Box w="100%" h="50%" mb={2} className="Editor-Box">
              <LanguageSelector language={language} onSelect={onSelect} />

              <Editor
                height="50vh"
                theme="vs-dark"
                language={language}
                defaultValue={CODE_SNIPPETS[language]}
                value={value}
                onChange={(value) => setvalue(value)}
                onMount={onMount}
              />
            </Box>
            <Box w="100%" h="30vh" mb={2} className="Input-Box">
              <Text mb={2} fontSize={"lg"}>
                Input
              </Text>
              <textarea
                className="InputTextPanel"
                style={{ resize: "none", height: "100%" }}
                type="text"
                placeholder="Enter input data:"
                onChange={(user_input) => setUserInput(user_input)}
              />
            </Box>

            <Box
              w="100%"
              h="50vh"
              m={2}
              className="Output__Box"
              overflow="scroll"
            >
              <Output
                value={value}
                user_input={user_input}
                editorRef={editorRef}
                language={language}
              />
            </Box>
          </VStack>
        )}

        {!w430 && (
          <HStack spacing={4}>
            <Box w="50%" mb={2} className="Editor-Box">
              <LanguageSelector language={language} onSelect={onSelect} />

              <Editor
                height="75vh"
                theme="vs-dark"
                language={language}
                defaultValue={CODE_SNIPPETS[language]}
                value={value}
                onChange={(value) => setvalue(value)}
                onMount={onMount}
              />
            </Box>
            <Box w="50%" mb={2} height="75vh" className="Input-Box">
              <Text mb={2} fontSize={"lg"}>
                Input
              </Text>
              <textarea
                style={{ marginTop: "4px" }}
                className="InputTextPanel"
                type="text"
                placeholder="Enter input data:"
                onChange={(user_input) => setUserInput(user_input)}
              />
            </Box>

            <Box w="50%" mb={3} className="Output__Box">
              <Output
                value={value}
                user_input={user_input}
                editorRef={editorRef}
                language={language}
              />
            </Box>
          </HStack>
        )}
      </Box>
    </>
  );
};
export default CodeEditor;
