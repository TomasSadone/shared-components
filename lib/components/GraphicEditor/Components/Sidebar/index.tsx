import { Sidebar as BaseSidebar } from '../../../Editor/BaseEditor/Sidebar';
import { SidemenusSections, useSectionsStore } from '../../CanvasContext/atoms/atoms';
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
  const selectedSection = useSectionsStore((store) => store.selectedSection);
  const setSelectedSection = useSectionsStore((store) => store.setSelectedSection);
  const setSelectedItemType = useSectionsStore((store) => store.setSelectedItemType);
  const handleSelectSection = (section: SidemenusSections) => {
    setSelectedSection(section);
    setSelectedItemType('');
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
