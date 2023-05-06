import { ReactNode } from 'react';

import { Box } from '@chakra-ui/react';
import { NavBar } from '@/components/nav-bar';

interface LayoutProps {
  children: ReactNode;
}
export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <NavBar />
      <Box p='16px' w='100%' h='calc(100% - 87px)' overflow='auto'>
        <Box w='100%' h='100%' maxW='1440px' m='auto'>
          {children}
        </Box>
      </Box>
    </>
  );
};
