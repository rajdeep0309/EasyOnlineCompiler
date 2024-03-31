import { Box, HStack, Input, Text } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { LanguageSelector } from "./LanguageSelector";
import { CODE_SNIPPETS } from "../constants/Constants";
import Output from "./Output";
import "./CodeEditor.css";

const CodeEditor = () => {
  const [user_input, setUserInput] = useState("");
  const [language, setLanguage] = useState("cpp"); // [language, setLanguage
  const [value, setvalue] = useState(CODE_SNIPPETS["cpp"]);
  const editorRef = useRef();
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
        <HStack spacing={4}>
          <Box w="50%" mb={2}>
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

          <Box w="50%" mb={2} height="75vh">
            <Text mb={2} fontSize={"lg"}>
              Input
            </Text>
            <textarea
              className="InputTextPanel"
              type="text"
              placeholder="Enter input data:"
              onChange={(user_input) => setUserInput(user_input)}
            />
          </Box>
          <Output
            value={value}
            user_input={user_input}
            editorRef={editorRef}
            language={language}
          />
        </HStack>
      </Box>
    </>
  );
};
export default CodeEditor;
