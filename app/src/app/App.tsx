import { MainPage } from 'pages/MainPage';
import React from 'react';
import { MainLayout } from './layouts';
import 'shared/styles/index.scss';

export const App = () => {
    return (
        <MainLayout>
            <MainPage/>
        </MainLayout>
    );
};
