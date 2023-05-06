import { useSwr } from '@/data/use-swr';

export const useTopNews = () => {
  const { data, ...rest } = useSwr({ key: '/top-headlines?country=us' });

  return { newsData: data, ...rest };
};
