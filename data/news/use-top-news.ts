import { useSwr } from '../useSwr';

export const useTopNews = () => {
  const { data, ...rest } = useSwr({ key: '/top-headlines?country=us' });

  return { newsData: data, ...rest };
};
