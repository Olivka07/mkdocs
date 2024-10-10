import React from 'react';
import * as css from './Header.module.scss';

export const Header = () => {
    return (
        <header className={css.header}>
            <p>Мой мир</p>
           <nav>
                <a href='/'>Главная</a>
                <a href='/'>О себе</a>
            </nav> 
        </header>
    );
};
