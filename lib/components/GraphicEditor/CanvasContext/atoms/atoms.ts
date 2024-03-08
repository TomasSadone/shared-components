import { atom } from 'jotai';

// SELECTED SECTIONS / ITEM TYPE ATOMS:
type Sections =
  | ''
  | 'images'
  | 'text'
  | 'elements'
  | 'layers'
  | 'uploads'
  | 'canvas'
  | 'text-color'
  | 'border-color'
  | 'element-color';
export type SidemenusSections = Exclude<Sections, 'canvas'>;
export type ToolbarsSections = Exclude<
  Sections,
  'layers' | 'uploads' | 'images' | 'text-color' | 'element-color'
>;

// TODO inicializar en ''
export const selectedSectionAtom = atom<SidemenusSections>('');
export const selectedItemTypeAtom = atom<ToolbarsSections>('');

export const handleSetSelectedSectionAtom = atom(
  null,
  (get, set, update: SidemenusSections) => {
    if (get(selectedSectionAtom) !== undefined) {
      set(selectedSectionAtom, update);
    }
  },
);

export const handleSetSelectedItemTypeAtom = atom(
  null,
  (get, set, update: ToolbarsSections) => {
    if (get(selectedItemTypeAtom) !== undefined) {
      set(selectedItemTypeAtom, update);
    }
  },
);
