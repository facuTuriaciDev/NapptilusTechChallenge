import { Flex, Button, IconButton, ButtonGroup, UnorderedList, Text, ListItem, Popover, PopoverTrigger } from '@chakra-ui/react'
import BreadCrumbComponent from './BreadCrumbComponent';
import { MdShoppingCart, MdDelete } from "react-icons/md";
import { useSelector } from 'react-redux';
import { selectProducts } from '../productSlice';
import { useMemo } from 'react';

const Header = () => {
  let cart = useSelector(selectProducts);

  const clearLocalStorage = () => {
    localStorage.removeItem('redux_localstorage_simple');
  }


  const memoList = useMemo(() => {
    return cart.map((item, index) => {
      return (
        <UnorderedList id='unorderedList'>
          <ListItem className='listItem' key={index}>
            <Text color='black'>{item.model + ' ' + item.color + ' ' + item.price + '€'}</Text>
          </ListItem>
        </UnorderedList>
      )
    }
    );
  }, [cart]);

  return (
    <Flex
      height='5rem'
      width='100%'
      bg='#333232'
      color='#ffffff'
      align='center'
      justify='space-around'
    >
      <Flex>
        <BreadCrumbComponent />
      </Flex>
      <Flex>
        <Popover placement="bottom-end" width='4rem' border='6px'>
          <PopoverTrigger>
            <ButtonGroup  isAttached variant='outline'>
            <Button variant="outline">
              <MdShoppingCart size='1.5rem' />
              <Text id='textCount'>{cart.length > 0 && cart.length}</Text>
            </Button>
            {
              cart.length > 0 && < IconButton aria-label='Clear cart' icon={<MdDelete />}  onClick={clearLocalStorage}/>
            }
            </ButtonGroup>
          </PopoverTrigger>
        </Popover>
      </Flex>
    </Flex>
  )
};

export default Header