import React, { useState } from 'react';
import { fonts } from '../../../constants/fonts';
import style from './style.module.sass';
import { useCanvasContext } from '../../../CanvasContext/useCanvasContext';
import { fabric } from 'fabric';
import { Icon } from '../../../../Icon';
import { AppButton } from '../../../../Button';
import { handleSetSelectedItemTypeAtom } from '../../../CanvasContext/atoms/atoms';
import { useAtom } from 'jotai';

export const TextSubmenu = () => {
  const [search, setSearch] = useState('');
  const [, handleSetSelectedItemType] = useAtom(handleSetSelectedItemTypeAtom);
  const handleSearch = (e: React.FormEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  };
  const fontsToDisplay = fonts.filter((font) =>
    font.toLowerCase().includes(search.toLowerCase()),
  );

  const canvasInstanceRef = useCanvasContext();

  const handleAddText = (fontFamily: (typeof fonts)[number]) => {
    if (!canvasInstanceRef.current) throw new Error('canvas.current is not defined');
    const newText = new fabric.IText('Clicca per modificare', {
      text: 'Clicca per modificare',
      left: 50,
      top: 100,
      fontFamily,
      fontSize: 30,
      fill: 'black',
      opacity: 1.0,
      fontStyle: 'normal',
    });
    canvasInstanceRef.current.add(newText);
    canvasInstanceRef.current.setActiveObject(newText);

    handleSetSelectedItemType('text');
  };

  return (
    <div className={style.sidemenu}>
      <form className={style.form}>
        <Icon fill="#667085" size={18} viewBox="0 0 18 18" name="search" />
        <input
          placeholder="Cerca un carattere tipografico"
          value={search}
          type="text"
          onChange={handleSearch}
        />
      </form>
      <AppButton
        title="Aggiungi un testo"
        color="green"
        icon="plus-circle"
        iconProps={{
          fill: 'white',
          size: 24,
          viewBox: '0 0 24 24',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
        }}
        onClick={() => handleAddText('Poppins')}
      />
      <p className={style.title}>Oppure scegli un carattere tipografico</p>
      <ul className={style.fonts}>
        {fontsToDisplay.map((font) => (
          <li className={style[font.split(' ').join('')]} key={font}>
            <button onClick={() => handleAddText(font)}>{font}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
/*
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_705_3567)">
<path d="M10.0001 6.66675L10.0001 13.3334M6.66675 10.0001L13.3334 10.0001M18.3334 10.0001C18.3334 14.6025 14.6025 18.3334 10.0001 18.3334C5.39771 18.3334 1.66675 14.6025 1.66675 10.0001C1.66675 5.39771 5.39771 1.66675 10.0001 1.66675C14.6025 1.66675 18.3334 5.39771 18.3334 10.0001Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_705_3567">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>

*/
