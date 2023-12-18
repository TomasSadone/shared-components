import type { FC } from 'react';
type LoaderProps = {
    className?: string;
    color?: 'red' | 'green' | 'blue' | 'orange';
    useColor?: boolean;
};
export declare const Loader: FC<LoaderProps>;
export {};
