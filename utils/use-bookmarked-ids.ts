const BOOKMARKED_IDS_KEY = 'bookmarkedIds';

export const useBookmarkedIds = () => {
  const getStoredBookmarkedIds = () => {
    if (typeof window === 'undefined') {
      return null;
    }
    const stringIds = window.localStorage.getItem(BOOKMARKED_IDS_KEY);
    const ids = JSON.parse(stringIds as string) || [];
    return ids;
  };

  const dispatchBookmarkedId = (id: string) => {
    const bookmarkedIds: any = getStoredBookmarkedIds();
    window.localStorage.setItem(BOOKMARKED_IDS_KEY, JSON.stringify([...bookmarkedIds, id]));
  };

  const removeBookmarkedId = (id: string) => {
    const bookmarkedIds: any = getStoredBookmarkedIds();
    const filteredIds = bookmarkedIds.filter((item: any) => item !== id);
    window.localStorage.setItem(BOOKMARKED_IDS_KEY, JSON.stringify(filteredIds));
  };

  return { getStoredBookmarkedIds, dispatchBookmarkedId, removeBookmarkedId };
};
