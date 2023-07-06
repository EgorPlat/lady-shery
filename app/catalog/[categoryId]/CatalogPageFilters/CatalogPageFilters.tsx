'use client';
import Select from 'react-select';
import s from './CatalogPageFilters.module.scss';
import { filterByHeightValues, filterByNewValues, filterByPopularityValues, filterByPriceValues, filterByRateValues, filterBySizesValues } from './constants';

interface ICatalogPageFiltersProps {
    props: {
        
    }
};

export default function CatalogPageFilters() {

    return (
        <div className={s.catalogFilters}>
            <Select
                id="price"
                className={s.select}
                placeholder="Цена"
                options={filterByPriceValues}
            />
            <Select
                id="size"
                className={s.select}
                placeholder="Размер"
                options={filterBySizesValues}
            />
            <Select 
                id="height"
                className={s.select}
                placeholder="Рост"
                options={filterByHeightValues}
            />
            <Select
                id="rate"
                className={s.select} 
                placeholder="Рейтинг"
                options={filterByRateValues}
            />
            <Select
                id="popularity"
                className={s.select} 
                placeholder="Популярность"
                options={filterByPopularityValues}
            />
            <Select
                id="new"
                className={s.select}
                placeholder="Новизна"
                options={filterByNewValues}
            />
        </div>
    )
}