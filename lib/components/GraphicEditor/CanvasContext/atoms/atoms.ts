import { atom } from 'jotai';

// SELECTED SECTIONS / ITEM TYPE ATOMS:
export type Sections = '' | 'images' | 'text' | 'elements' | 'layers' | 'uploads' | 'canvas';

export const selectedSectionAtom = atom<Sections>('');
export const selectedItemTypeAtom = atom<Sections>('');

export const handleSetSelectedSectionAtom = atom(null, (get, set, update: Sections) => {
  if (get(selectedSectionAtom)) {
    set(selectedSectionAtom, update);
  }
});

export const handleSetSelectedItemTypeAtom = atom(null, (get, set, update: Sections) => {
  if (get(selectedItemTypeAtom)) {
    set(selectedItemTypeAtom, update);
  }
});
