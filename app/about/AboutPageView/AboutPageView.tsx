import { aboutUs } from '../constants';
import s from './AboutPageView.module.scss';

export default function AboutPageView() {
    return (
        <div className={s.about}>
            <div className={s.statistic}>
                {
                    aboutUs.statistic.map(el => {
                        const keyName = Object.keys(el)[0];
                        const keyValue = Object.values(el)[0];
                        return (
                            <div className={s.statisticElement} key={keyName}>
                                <span className={s.statisticTitle}>{keyName} </span>  
                                <span className={s.statisticValue}>{keyValue}</span>
                            </div>
                        )
                    })
                }
            </div>
            <div className={s.title}>
                {
                    aboutUs.title
                }
            </div>
        </div>
    )
}