import { Fade, Flex, Spinner } from '@chakra-ui/react';

import { Layout } from '@/components/layout';
import { NewsList } from '@/components/news-list';
import { useNewsData } from '@/utils/use-news-data';

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
      <Fade in={!isLoading}>
        <NewsList news={news} />
      </Fade>
    </Layout>
  );
}
