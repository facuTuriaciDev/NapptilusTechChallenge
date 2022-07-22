import { Route, Routes } from 'react-router-dom';
import { VStack } from '@chakra-ui/react'
import Home from './Components/Home';
import Header from "./Components/Header";
import ItemDetails from "./Components/ItemDetails";
import localStorageExpiration from './localStorageExpiration';

function App() {

  localStorageExpiration(1);

  return (
    <VStack className="App"
      w="100vw"
      minHeight="100vh"
      bg='#f2f2f2'
      margin='0 auto'
      align='space-between'
    >
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/itemDetails/:id" element={<ItemDetails />} />
      </Routes>
    </VStack>
  )
}

export default App
