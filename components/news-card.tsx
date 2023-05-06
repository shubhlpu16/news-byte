import { Box, Image, Text, VStack, Heading, Flex, IconButton } from '@chakra-ui/react';

import { format, parseISO } from 'date-fns';
import { MouseEventHandler } from 'react';

export interface NewsCardProps {
  urlToImage: string;
  title: string;
  description: string;
  author: string;
  publishedAt: string;
  source: { id: string; name: string };
  id: string;
  handleRedirectToNews: MouseEventHandler;
  isBookmarked: boolean;
  toggleIsBookmarked: VoidFunction;
}

export const NewsCard = ({
  urlToImage,
  title,
  description,
  author,
  publishedAt,
  source,
  handleRedirectToNews,
  isBookmarked,
  toggleIsBookmarked
}: NewsCardProps) => {
  return (
    <Box
      w='100%'
      borderRadius='16px'
      p={{ lg: '24px', sm: '12px' }}
      bg='#F2F2ED'
      cursor='pointer'
      boxShadow='0px 4px 35px rgba(82, 78, 67, 0.25)'
      onClick={handleRedirectToNews}
    >
      <Flex
        gap={{ lg: '24px', sm: '12px' }}
        flexDirection={{ lg: 'row', sm: 'column' }}
        alignItems='start'
      >
        <Image
          width={{ lg: '300px', sm: '100%' }}
          height='200px'
          src={urlToImage}
          borderRadius='16px'
          alt='news-image'
        />
        <VStack spacing='12px' alignItems='flex-start'>
          <Heading>{title}</Heading>
          <Text fontWeight='300'>{description}</Text>
          <Flex gap='4px'>
            <Text>Author: </Text>
            <Text
              as='a'
              fontWeight='500'
              dangerouslySetInnerHTML={{ __html: author }}
              pointerEvents='none'
            />
          </Flex>

          <Text fontWeight='500'>Source: {source?.name}</Text>
          <Text fontWeight='500'>
            Published at: {format(parseISO(publishedAt), 'MMM dd, yyyy')}
          </Text>
        </VStack>
        <IconButton
          bg='transparent'
          _hover={{
            bg: 'transparent'
          }}
          icon={<Image src={isBookmarked ? '/filled-heart.svg' : '/heart.svg'} alt='like' />}
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            toggleIsBookmarked();
          }}
          aria-label='like'
        />
      </Flex>
    </Box>
  );
};
