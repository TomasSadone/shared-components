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
  | 'element-color'
  | 'canvas-color';
export type SidemenusSections = Exclude<Sections, 'canvas'>;
export type ToolbarsSections = Exclude<
  Sections,
  | 'layers'
  | 'uploads'
  | 'images'
  | 'text-color'
  | 'element-color'
  | 'border-color'
  | 'canvas-color'
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

// Three points menu atom

export type TooltipPosition = {
  x: number;
  y: number;
};

export const threePointsMenuPositionAtom = atom<TooltipPosition | null>(null);

export const handleSetThreePointsMenuPosition = atom(
  null,
  (get, set, update: TooltipPosition | null) => {
    if (get(threePointsMenuPositionAtom) !== undefined) {
      set(threePointsMenuPositionAtom, update);
    }
  },
);
