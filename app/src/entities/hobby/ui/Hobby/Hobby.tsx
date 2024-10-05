import * as css from './Hobby.module.scss';
interface HobbyProps {
    hobby: string;
}
export const Hobby = ({ hobby }: HobbyProps) => {
    return (
        <p className={css.hobby}>
            { hobby }
        </p>
    );
};

