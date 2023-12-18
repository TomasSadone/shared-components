import { ReactNode } from 'react';
export type Test = 'string';
type Props = {
    open: boolean;
    setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
    children?: ReactNode;
};
export declare const Modal: ({ children, open, setOpen }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
