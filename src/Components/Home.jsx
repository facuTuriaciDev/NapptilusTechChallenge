import Items from "./Items";
import { Flex } from "@chakra-ui/react";

const Home = () => {
  return (
    <Flex w="full" h="full" flexDir="column" align="center">
      <Items />
    </Flex>
  );
};

export default Home;
