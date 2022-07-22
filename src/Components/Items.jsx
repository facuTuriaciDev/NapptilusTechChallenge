import { Grid, Box, Input, Flex, VStack } from "@chakra-ui/react";
import Item from "./Item";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Items = (props) => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    obtainProductsImages();
  }, []);

  const obtainProductsImages = async () => {
    const data = await fetch(
      "https://front-test-api.herokuapp.com/api/product"
    );
    const products = await data.json();
    setProducts(products);
  };

  return (
    <VStack spacing={2} minW="1160px">
      <Flex flexDir="column" w="full" align="flex-end">
        <Input
          placeholder="Búsqueda"
          bg="white"
          size="lg"
          margin="4"
          width="initial"
          onChange={handleChange}
        />
      </Flex>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap={6}
      >
        {products
          ?.filter((product) => {
            if (searchTerm === "") {
              return product;
            } else if (
              product.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
              product.brand.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return product;
            }
          })
          .map((product) => (
            <Box
              width="100%"
              p="4"
              m="4"
              bg="#ffffff"
              borderRadius="4px"
              shadow="lg"
              _hover={{
                shadow: "dark-lg",
              }
            }
            key={product.id}>
              <Link to={`/itemDetails/${product.id}`} key={product.id}>
                <Item
                  image={product.imgUrl}
                  name={product.model}
                  price={product.price}
                  key={product.id}
                />
              </Link>
            </Box>
          ))}
      </Grid>
    </VStack>
  );
};

export default Items;
