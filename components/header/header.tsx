import { HeaderInfo } from './constants';
import s from './header.module.scss';

export default function Header() {
    return (
        <div className={s.header}>
            <div className={s.title}>
                {HeaderInfo.title}
            </div>
            <div className={s.location}>
                {HeaderInfo.location}
                <div className={s.timeWork}>
                    {HeaderInfo.timeWork}
                </div>
            </div>
        </div>
    )
}