import { ChakraProvider } from '@chakra-ui/react';

import './App.css';
import Pages from './routes/Pages';

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Pages />
      </ChakraProvider>
    </div>
  );
}

export default App;
