import { Fade } from '@chakra-ui/react';

import { Layout } from '@/components/layout';
import { NewsList } from '@/components/news-list';
import { useNewsData } from '@/utils/use-news-data';

export default function NewsListPage() {
  const { isLoading, news } = useNewsData();

  return (
    <Layout>
      <Fade in={!isLoading}>
        <NewsList news={news} />
      </Fade>
    </Layout>
  );
}
