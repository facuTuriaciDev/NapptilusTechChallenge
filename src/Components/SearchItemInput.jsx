import { Flex, Input } from '@chakra-ui/react'

export const SearchItemInput = () => {
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  }

  return (
    <Flex align='right' minWidth='20%' height='35%'>
      <Input placeholder='Búsqueda' bg='alphaWhite' size='lg' margin='4'
      onChange={handleChange}/>
    </Flex>
  );
}

export default SearchItemInput;