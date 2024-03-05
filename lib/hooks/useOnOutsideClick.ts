import { useEffect } from 'react';

export function useOnOutsideClick(
  refs: React.RefObject<HTMLElement>[],
  onClickOut: () => void,
<<<<<<< HEAD
  deps: React.DependencyList = [],
=======
>>>>>>> AIG-1840
) {
  useEffect(() => {
    const onClick = ({ target }: any) => {
      const isClickInside = refs.some((ref) => ref.current?.contains(target));
      if (!isClickInside) onClickOut();
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
<<<<<<< HEAD
  }, deps);
=======
  }, []);
>>>>>>> AIG-1840
}
