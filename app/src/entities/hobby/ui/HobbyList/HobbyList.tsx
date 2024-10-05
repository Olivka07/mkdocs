import * as css from './HobbyList.module.scss';
import { hobbiesMock } from '../../constants';
import { Hobby } from '../Hobby/Hobby';
export const HobbyList = () => {
    return (
        <div className={css.hobbyList}>
            <ol>
                { hobbiesMock.map((hobby, index) => <li key={index}><Hobby hobby={hobby}/></li>) }
            </ol>
        </div>
    );
};
