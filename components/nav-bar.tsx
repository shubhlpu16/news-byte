import { Flex, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';

export const NavBar = ({}) => {
  return (
    <Flex
      w='100%'
      h='87px'
      p='0 24px'
      alignItems='center'
      bg='black'
      justifyContent='space-between'
    >
      <Link passHref href='/'>
        <Heading color='#ECECE5'>News Byte</Heading>
      </Link>
      <Link passHref href='/read-later'>
        <Text color='#ECECE5'>Favorites</Text>
      </Link>
    </Flex>
  );
};
