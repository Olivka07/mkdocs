import React, { PropsWithChildren } from 'react';
import * as css from './MainLayout.module.scss';

export const MainLayout = ({ children }: PropsWithChildren) => {
    return (
        <div className={`app ${css.layout__container}`}>
            { children }
        </div>
    );
};
