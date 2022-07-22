import { Text, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import { useLocation } from 'react-router-dom';

export const BreadcrumbComponent = () => {

  let location = useLocation();

  console.log(location);
  
  return (
    <Breadcrumb separator={<Text fontSize='xl'>/</Text>}>
      <BreadcrumbItem marginLeft='8'>
        <BreadcrumbLink href='/'><Text fontSize='xl'>Home</Text></BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
      {  !location.key.includes('default') &&
        <BreadcrumbLink href={location.pathname}><Text fontSize='xl'>Detalles</Text></BreadcrumbLink>
      }
        
      </BreadcrumbItem>
    </Breadcrumb>
  );
}

export default BreadcrumbComponent;