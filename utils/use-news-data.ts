import { useCallback, useMemo } from 'react';

import { NewsCardProps } from '@/components/news-card';
import { useTopNews } from '@/data/news/use-top-news';
import { useBoolean } from '@chakra-ui/react';
import { useBookmarkedIds } from '@/utils/use-bookmarked-ids';

export const useNewsData = (isBookmarkedArticles?: boolean) => {
  const { newsData, isLoading } = useTopNews();
  const { getStoredBookmarkedIds, dispatchBookmarkedId, removeBookmarkedId } = useBookmarkedIds();
  const [isClicked, setIsClicked] = useBoolean();

  const getNewsData = useCallback(
    (articles: any) => {
      const list: NewsCardProps[] = [];
      if (articles) {
        const newArticles = isBookmarkedArticles
          ? articles.filter((article: any) => getStoredBookmarkedIds().includes(article.url))
          : articles;
        newArticles.map((article: any) => {
          list.push({
            ...article,
            handleRedirectToNews: () => {
              window.open(article.url, '_blank');
            },
            isBookmarked: getStoredBookmarkedIds().includes(article.url),
            id: article.url,
            toggleIsBookmarked: () => {
              setIsClicked.toggle();
              if (article.isBookmarked) {
                article.isBookmarked = false;
                removeBookmarkedId(article.url);
              } else {
                article.isBookmarked = true;
                dispatchBookmarkedId(article.url);
              }
            }
          });
        });
      }
      return list;
    },
    [isClicked, setIsClicked]
  );

  const news = useMemo(() => getNewsData(newsData?.articles), [getNewsData, newsData]);
  return { isLoading, news };
};
