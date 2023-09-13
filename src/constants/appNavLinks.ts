import { DropdownItem, MenuItem } from 'types/MainTypes';

export const navBar: (DropdownItem | MenuItem)[] = [
  {
    link: '/',
    title: 'App Buttons',
    color: 'green',
    icon: 'plus-circle',
  },
  {
    link: '/icons',
    title: 'Icons',
    color: 'blue',
    icon: 'plus-circle',
  },
  {
    link: '/forms',
    title: 'Forms',
    color: 'orange',
    icon: 'plus-circle',
  },
  {
    link: '/items',
    title: 'Items',
    color: 'red',
    icon: 'plus-circle',
  },
  {
    title: 'Dropdown1',
    color: 'green',
    icon: 'plus-circle',
    items: [
      { link: 'd1-item1', title: 'Item1' },
      { link: 'd1-item2', title: 'Item2' },
    ],
  },
  {
    title: 'Dropdown2',
    color: 'blue',
    icon: 'plus-circle',
    items: [
      { link: 'd2-item1', title: 'Item1' },
      { link: 'd2-item2', title: 'Item2' },
    ],
  },
  {
    title: 'Dropdown3',
    color: 'orange',
    icon: 'plus-circle',
    items: [
      { link: 'd3-item1', title: 'Item1' },
      { link: 'd3-item2', title: 'Item2' },
    ],
  },
  {
    title: 'Dropdown4',
    color: 'red',
    icon: 'plus-circle',
    items: [
      { link: 'd4-item1', title: 'Item1' },
      { link: 'd4-item2', title: 'Item2' },
    ],
  },
];
