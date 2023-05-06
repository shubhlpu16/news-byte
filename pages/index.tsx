import { Fade, Spinner, Flex } from '@chakra-ui/react';

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
      <Fade in={!isLoading}>
        <NewsList news={news} />
      </Fade>
    </Layout>
  );
}
