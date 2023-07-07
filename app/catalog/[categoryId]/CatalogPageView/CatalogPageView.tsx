'use-client';
import { IProduct } from '@/interfaces/product';
import { baseURL } from '@/configs/axios';
import { ICategory } from '@/interfaces/category';
import s from './CatalogPageView.module.scss';
import CatalogPageFilters from '../CatalogPageFilters/CatalogPageFilters';

interface ICatalogPageProps {
    productsInfo: {
        categoryData: ICategory,
        productsData: IProduct[]
    },
};

export default function CatalogPageView({ productsInfo }: ICatalogPageProps) {
    return (
        <div className={s.catalog}>
            <div className={s.catalogTitle}>
                { productsInfo.categoryData.title }
            </div>
            <div className={s.catalogFilters}>
                <CatalogPageFilters />
            </div>
            <div className={s.catalogList}>
                {
                    productsInfo.productsData.map(el => {
                        const backgroundImage = baseURL + el.images[0].filename;
                        return (
                            <div 
                                className={s.catalogProductCard} 
                                style={{ 
                                    backgroundImage: `url(${backgroundImage})`,
                                    backgroundSize: '100% 100%'
                                }}
                            >
                                <div className={s.productActions}>
                                    <div className={s.addToBasket}>
                                        {el.title}
                                    </div>
                                    <div className={s.sizes}>
                                        {el.stockInfo.map(size => (
                                            <span className={s.size}>
                                                <b>{size.size}</b>
                                                ({size.stockCount})
                                            </span>
                                        ))}
                                    </div>
                                    <div className={s.productPrice}>1000 руб</div>
                                    <div 
                                        className={s.openMoreInfo}
                                    >Посмотреть</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}