'use client';
import { categorys, setSelectedCategory, switchIsCategoryOpen } from '@/store/category';
import { useStore } from 'effector-react';
import { ICategory } from '@/interfaces/category';
import { useRouter } from 'next/navigation';
import s from './catalog.module.scss';

export default function Catalog() {

    const categorys$ = useStore(categorys);
    const router = useRouter();

    const handleCategoryClick = (categoryId: number) => {
        setSelectedCategory(categorys$.filter(el => el.categoryId !== categoryId)[0]);
        router.push(`/catalog/${categoryId}`);
        switchIsCategoryOpen(false);
    };

    return (
        <div className={s.catalog}>
            {
                categorys$.map((el: ICategory) => (
                    <div 
                        key={el.title} 
                        className={s.catalogElement}
                        onClick={() => handleCategoryClick(el.categoryId)}
                    >{el.title}</div>
                ))
            }
        </div>
    )
}