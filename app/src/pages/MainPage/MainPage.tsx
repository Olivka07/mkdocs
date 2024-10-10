import { HobbyList } from "entities/hobby/ui";
import { ImageCat } from "shared/assets/images";
import * as css from './MainPage.module.scss';

export const MainPage = () => {
    return (
            <div className={css.page__container}>
                <h1 className={css.page__title}>Главная</h1>
                <h2>Я люблю:</h2>
                <div className={css.page__content}>
                    <HobbyList/>
                    <div className={css.page__svgContainer}>
                        <ImageCat/>
                    </div>
                </div>
            </div>
        
    );
};
