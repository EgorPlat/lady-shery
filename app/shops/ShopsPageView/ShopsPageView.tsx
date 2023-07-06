'use client'
import { YMaps, Map, Placemark } from "react-yandex-maps";
import s from './ShopsPageView.module.scss';


export default function ShopsPageView() {
    return (
        <div className={s.shopsMap}>
            <div className={s.title}>
                Мы находимся по этим адресам. Дополнительную информацию смотрите на вкладке "О нас"
            </div>
            <YMaps>
                <Map defaultState={{ center: [55.75, 37.57], zoom: 10 }} className={s.ymap}>
                    <Placemark 
                        geometry={[55.866935, 37.439284]} 
                        properties={{ 
                            iconCaption: ['Мы находимся тут'],
                            hintContent: "Мы тут"
                        }}
                        options={
                            {
                              preset: 'islands#redStretchyIcon', // список темплейтов на сайте яндекса
                              iconColor: 'red', // цвет иконки, можно также задавать в hex
                        } }
                    />
                </Map>
            </YMaps>
        </div>
    )
}