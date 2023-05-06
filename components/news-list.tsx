import { VStack } from '@chakra-ui/react';

import { NewsCardProps, NewsCard } from '@/components/news-card';

interface NewsListProps {
  news: NewsCardProps[];
}

export const NewsList = ({ news }: NewsListProps) => {
  return (
    <VStack spacing='24px' pb='24px'>
      {news.map((item: NewsCardProps) => (
        <NewsCard key={item.id} {...item} />
      ))}
    </VStack>
  );
};
