import { useEffect } from 'react';

export const useOnOutsideClick = (
  elementId: string,
  setIsVisible?: (visible: boolean) => void,
  visible?: boolean,
) => {
  useEffect(() => {
    if (!visible) return;
    const ignoreClickOnMeElement = document.getElementById(elementId);

    document.addEventListener('click', (event) => {
      const isClickInsideElement =
        event.target && ignoreClickOnMeElement?.contains(event.target as Node);

      if (event.button === 0 && !isClickInsideElement && setIsVisible) {
        setIsVisible(!visible);
      }
    });
  });
};
