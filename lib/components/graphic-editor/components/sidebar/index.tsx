import { useAtom } from 'jotai';
import { Sidebar as BaseSidebar } from '../../../Editor/BaseEditor/Sidebar';
import {
  SidemenusSections,
  handleSetSelectedItemTypeAtom,
  selectedSectionAtom,
} from '../../canvas-context/atoms/atoms';
import { IconProps } from '../../../Icon';

const strokeColor = '#667085';
const iconProps: Omit<IconProps, 'name'> = {
  size: 24,
  stroke: strokeColor,
  viewBox: '0 0 24 24',
  strokeWidth: '2',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  fill: 'none',
};

const Sidebar = () => {
  const [selectedSection, setSelectedSection] = useAtom(selectedSectionAtom);
  const [, handleSetSelectedItemType] = useAtom(handleSetSelectedItemTypeAtom);
  const handleSelectSection = (section: SidemenusSections) => {
    setSelectedSection(section);
    handleSetSelectedItemType('');
  };
  return (
    <BaseSidebar
      buttons={[
        {
          icon: {
            name: 'image',
            ...iconProps,
          },
          onClick: () => handleSelectSection('images'),
          title: 'Immagini',
          isSelected: selectedSection === 'images',
        },
        {
          icon: {
            name: 'text',
            ...iconProps,
          },
          onClick: () => handleSelectSection('text'),
          title: 'Testo',
          isSelected: selectedSection === 'text',
        },
        {
          icon: {
            name: 'elements',
            viewBox: '0 0 24 24',
            size: 24,
            fill: strokeColor,
          },
          onClick: () => handleSelectSection('elements'),
          title: 'Elementi',
          isSelected: selectedSection === 'elements',
        },
        {
          icon: {
            name: 'levels',
            ...iconProps,
          },
          onClick: () => handleSelectSection('layers'),
          title: 'Livelli',
          isSelected: selectedSection === 'layers',
        },
        {
          icon: {
            name: 'folder',
            ...iconProps,
          },
          onClick: () => handleSelectSection('uploads'),
          title: 'Caricamenti',
          isSelected: selectedSection === 'uploads',
        },
      ]}
    />
  );
};

export { Sidebar };
