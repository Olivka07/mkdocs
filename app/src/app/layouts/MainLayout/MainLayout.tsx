import React, { Component, PropsWithChildren } from 'react';
import * as css from './MainLayout.module.scss';
import { Header } from 'widgets/ui';
import { Footer } from 'widgets/ui';

export const MainLayout = ({ children }: PropsWithChildren) => {
    return (
        <div className={`app ${css.layout__container}`}>
            <Header/>
            <main className={css.main__container}>
                { children }
            </main>
            <Footer/>
        </div>
    );
};