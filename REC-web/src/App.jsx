import { useState } from 'react'
import './App.css'
import CodeEditor from './component/CodeEditor'
import { Box } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ChakraProvider>
      <Box minH="90vh" bg="#0f0a19" color="grey" px={2} py={2}>
        <CodeEditor />
      </Box>
    </ChakraProvider>
    </>
  )
}

export default App
