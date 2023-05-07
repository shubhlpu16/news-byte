import { Fade, Spinner, Flex, VStack, Text, Heading } from '@chakra-ui/react';

import { Layout } from '@/components/layout';
import { NewsList } from '@/components/news-list';
import { useNewsData } from '@/utils/use-news-data';

export default function NewsListPage() {
  const { isLoading, news } = useNewsData();

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
          <Text fontSize='xl'>No news found!</Text>
        </VStack>
      )}
      {news.length > 0 && (
        <Fade in={!isLoading}>
          <Heading mb='36px'>Top Headlines</Heading>
          <NewsList news={news} />
        </Fade>
      )}
    </Layout>
  );
}
