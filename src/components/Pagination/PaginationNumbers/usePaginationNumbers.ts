const usePaginationNumbers = (
  width: number,
  type: 'minimal' | 'group' | 'default' | undefined,
  page: number,
  firstPages: string[],
  lastPages: string[],
) => {
  const numbersAsDescription = () => {
    if (type === 'minimal') return true;
    if (type !== 'group' && width < 850) return true;

    return false;
  };
  const description = numbersAsDescription();

  const showMiddleNumber = () =>
    page > Number(firstPages.at(-1)) && page < Number(lastPages[0]);

  return { description, showMiddleNumber: showMiddleNumber() };
};

export default usePaginationNumbers;
