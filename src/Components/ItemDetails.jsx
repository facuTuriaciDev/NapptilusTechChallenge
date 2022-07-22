import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Image, Flex, Box, Stack, Select, Button, UnorderedList, ListItem, Divider, Text, color } from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'
import { addProduct } from '../productSlice';


const ItemDetails = () => {
  const dispatch = useDispatch();

  const [data, setProducts] = useState([]);
  const itemParams = useParams();

  const [colorCode, setColorCode] = useState("");
  const [storageCode, setStorageCode] = useState("");

  const handleColorCode = (e) => {
    let value = e.target.value;
    let optionColorCode = value.split('/').pop()
    setColorCode(data.options.colors[optionColorCode].code);
  };

  const handleStorageCode = (e) => {
    let value = e.target.value;
    let optionStorageCode = value.split('/').pop()
    setStorageCode(data.options.storages[optionStorageCode].code);
  };


  const obtainProductsDetails = async () => {
    const data = await fetch(`https://front-test-api.herokuapp.com/api/product/${itemParams.id}`)
    const products = await data.json();
    setProducts(products);
    setColorCode(products.options.colors[0].code);
    setStorageCode(products.options.storages[0].code);
  }

  const dispatchData = () => {
    const itemColor = document.getElementById('itemColor').value.split('/').shift();
    const itemInternalMemory = document.getElementById('itemInternalMemory').value.split('/').shift();
    dispatch(addProduct({ ...data, color: itemColor, memory: itemInternalMemory }));
    addTocard();
  }

  const addTocard = () => {
    fetch('https://front-test-api.herokuapp.com/api/cart', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: data.id,
        colorCode: colorCode,
        storageCode: storageCode
      })
    }).then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error))
  }

  useEffect(() => {
    obtainProductsDetails();
  }, [])

  return (
    <Flex
      width='100%'
      height='100%'
      style={{ margin: 'auto' }}
      align='center'
      bg='#f2f2f2'
      justifyContent='space-around'
    >
      <Stack
        width='auto'
        heigth='100%'
        align='flex-start'
        flexDirection='row'
        justifyContent='center'
        bg='#ffffff'
        boxShadow='2xl'
        borderRadius='6px'
      >

        <div>
          <Box
            borderWidth='1px' borderRadius='2px' overflow='hidden' p='4' mx='50px' marginY='0.5rem' boxShadow='xs' bg='#ffffff'>
            <Image src={data.imgUrl} height='700px' />
          </Box>
        </div>

        <div>
          <Box w='450px' h='100%' color='black' position='relative'
            borderWidth='1px' borderRadius='2px' p='4' mx='50px' boxShadow='xs' bg='#ffffff'>
            <UnorderedList listStyleType='none'>
              <Text as='i' fontSize='4xl' color='#10406D'>Descripción</Text>
              <Divider />
              <ListItem>Marca: {data.brand}</ListItem>
              <ListItem>Modelo: {data.model}</ListItem>
              <ListItem>Precio: {data.price}</ListItem>
              <ListItem>CPU: {data.cpu}</ListItem>
              <ListItem>RAM: {data.ram}</ListItem>
              <ListItem>Sistema operativo: {data.os}</ListItem>
              <ListItem>Pantalla: {data.displayType}</ListItem>
              <ListItem>Batería: {data.battery}</ListItem>
              <ListItem>Cámaras: {data.primaryCamera}</ListItem>
              <ListItem>Dimensiones: {data.dimentions}</ListItem>
              <ListItem>Peso: {data.weight}</ListItem>
            </UnorderedList>
          </Box>

          <Box w='450px' h='250px' color='black' marginBottom='0.5rem' marginTop='2rem' position='relative'
            borderWidth='1px' borderRadius='2px' p='4' mx='50px' align='center' display='flex' justifyContent='space-between' flexDirection='column' boxShadow='xs' bg='#ffffff' key={data.id}>
            {
              <Select  id="itemInternalMemory" onChange={handleStorageCode} placeholder={data == !undefined && data.internalMemory[0]}>
                {data.internalMemory?.map((memory, key) => (<option key={key} value={memory + '/' + key}>{memory}</option>))}
              </Select>
            }
            {
              <Select id="itemColor" onChange={handleColorCode} placeholder={data == !undefined && datadata.colors[0]}>
                {data.colors?.map((color, key) => (<option key={key} value={color + '/' + key}>{color}</option>))}
              </Select>
            }
            <Divider />

            <Button leftIcon={<CheckIcon />} color='white' colorScheme='teal' variant='solid'
              onClick={dispatchData}>
              Añadir al carrito
            </Button>
          </Box>
        </div>

      </Stack>
    </Flex >
  )
};

export default ItemDetails;