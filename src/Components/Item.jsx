import {Box, Image, Divider, Text } from '@chakra-ui/react';

const Item = (props) => { 
    return (
        <Box
          w='full'
          h='full'
          align='center'
        >
          <Image
            w='300px'
            h='420px'
            fit='cover'
            src= {props.image}
          />
          <Text as='i' fontSize='2xl' color='grey'>{props.name}</Text>
          <Divider />
          <Text as='i' fontSize='4xl' color='teal.500'>{(props.price ? `${props.price}€`: 'consultar')}</Text>
        </Box>
    )
}

export default Item;