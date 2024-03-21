import React, { useState } from 'react';
import { fonts } from '../../../constants/fonts';
import style from './style.module.sass';
import { useCanvasContext } from '../../../canvas-context/useCanvasContext';
import { fabric } from 'fabric';
import { Icon } from '../../../../Icon';
import { AppButton } from '../../../../Button';
import { handleSetSelectedItemTypeAtom } from '../../../canvas-context/atoms/atoms';
import { useAtom } from 'jotai';
import { v4 as uuid } from 'uuid';

export const TextSidemenu = () => {
  const [search, setSearch] = useState('');
  const [, setSelectedItemType] = useAtom(handleSetSelectedItemTypeAtom);
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
      fill: '#000',
      opacity: 1.0,
      fontStyle: 'normal',
      name: uuid(), //the name set to an uuid it's what makes the layers work
    });
    canvasInstanceRef.current.add(newText);
    canvasInstanceRef.current.setActiveObject(newText);

    setSelectedItemType('text');
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
