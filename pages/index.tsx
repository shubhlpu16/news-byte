import { Box } from '@chakra-ui/layout';

import { useTopNews } from '@/data/news/use-top-news';

export default function Home() {
  const { newsData } = useTopNews();
  return <Box>Setup</Box>;
}
