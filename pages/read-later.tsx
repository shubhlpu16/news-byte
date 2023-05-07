import { Fade, Flex, Spinner, VStack, Text, Heading } from '@chakra-ui/react';

import { Layout } from '@/components/layout';
import { NewsList } from '@/components/news-list';
import { useNewsData } from '@/utils/use-news-data';
import Link from 'next/link';

export default function ReadLaterPage() {
  const { isLoading, news } = useNewsData(true);

  if (isLoading) {
    return (
      <Flex alignItems='center' justifyContent='center' w='100%' h='100%'>
        <Spinner />
      </Flex>
    );
  }

  return (
    <Layout>
      {news.length === 0 && (
        <VStack w='100%' h='100%' justifyContent='center' alignItems='center'>
          <Text fontSize='xl'>No favorites found!</Text>
          <Link passHref href='/'>
            <Text textDecoration='underline' color='blue'>
              Read some news.
            </Text>
          </Link>
        </VStack>
      )}
      {news.length > 0 && (
        <Fade in={!isLoading}>
          <Heading mb='36px'>Favorites</Heading>
          <NewsList news={news} />
        </Fade>
      )}
    </Layout>
  );
}
