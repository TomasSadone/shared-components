const slicePages = (slice: number, end: 'start' | 'finish', pages: string[]) => {
  if (end === 'finish') return pages.slice(-slice);

  return pages.slice(0, slice);
};

const usePagination = (
  totalPages: number,
  prevNextButtons: 'text' | 'outline' | undefined,
  width: number,
) => {
  const pages = Array.from(Array(totalPages)).map((_, i) => (i + 1).toString());

  const getFirstLastPages = () => {
    const slicedPages: { firstPages: string[]; lastPages: string[] } = {
      firstPages: [],
      lastPages: [],
    };

    if (width < 850 && totalPages > 4) {
      slicedPages.firstPages = slicePages(2, 'start', pages);
      slicedPages.lastPages = slicePages(2, 'finish', pages);
    } else if (width >= 850 && totalPages > 6) {
      slicedPages.firstPages = slicePages(3, 'start', pages);
      slicedPages.lastPages = slicePages(3, 'finish', pages);
    }

    return slicedPages;
  };

  const { firstPages, lastPages } = getFirstLastPages();

  const prevNextText = prevNextButtons === 'text';
  const prevNextOutline = prevNextButtons === 'outline';

  return { pages, prevNextText, prevNextOutline, firstPages, lastPages };
};

export default usePagination;
