'use client';
import Image from 'next/image';
import s from './MenuHeaderView.module.scss';
import logo from 'public/mainLogo.png';
import profile from 'public/profile.png';
import heart from 'public/heart.png';
import loupe from 'public/loupe.png';
import pack from 'public/pack.png';
import location from 'public/location.png';
import menu from 'public/menu.png';
import Catalog from '@/components/catalog/catalog';
import SearchModal from '../searchModal/searchModal';
import { ISelectOptions } from '@/interfaces/reactSelect';
import { SingleValue } from 'react-select';

export default function MenuHeaderView(props: {
    handleCatalogClick: () => void,
    handleShopsClick: () => void,
    handleSearchClick: () => void,
    handleCloseSearchModal: () => void,
    handleChangeSearchSelectValue: (value: SingleValue<ISelectOptions>) => void,
    handleLogoClick: () => void,
    handleBasketClick: () => void,
    isCatalogOpen: boolean,
    isSearchModalOpen: boolean,
    searchSelectOptions: ISelectOptions[],
    isMobile: boolean,
}) {
    return (
        <div className={s.menuHeader}>
            <div className={s.menuInfo} >
                { props.isMobile && 
                    <Image
                        className={s.logo}
                        onClick={props.handleLogoClick}
                        alt='Логотип'
                        src={logo}
                        width={50}
                        height={75}
                    />
                }
                <div className={s.menu} onClick={props.handleCatalogClick}>
                    <Image
                        alt='Меню'
                        src={menu}
                        width={30}
                        height={30}
                    />
                    { !props.isMobile && 'Каталог'}
                </div>
                <div className={s.location} onClick={props.handleShopsClick}>
                    { !props.isMobile &&
                    <Image
                        alt='Локация'
                        src={location}
                        width={30}
                        height={30}
                    />
                    }
                    { !props.isMobile && 'Магазины'}
                </div>
            </div>
            { !props.isMobile && 
                <Image
                    className={s.logo}
                    onClick={props.handleLogoClick}
                    alt='Логотип'
                    src={logo}
                    width={50}
                    height={75}
                />
            }
            <div className={s.menuActions}>
                <div className={s.profile}>
                    <Image
                        alt='Профиль'
                        src={profile}
                        width={30}
                        height={30}
                    />
                </div>
                <div className={s.heart}>
                    <Image
                        alt='Избранное'
                        src={heart}
                        width={30}
                        height={30}
                    />
                </div>
                <div className={s.loupe} onClick={props.handleSearchClick}>
                    <Image
                        alt='Поиск'
                        src={loupe}
                        width={30}
                        height={30}
                    />
                    {
                        props.isSearchModalOpen && 
                        <SearchModal 
                            handleCloseSearchModal={props.handleCloseSearchModal}
                            handleChangeSearchSelectValue={props.handleChangeSearchSelectValue}
                            options={props.searchSelectOptions}
                        />
                    }
                </div>
                <div className={s.pack}>
                    <Image
                        alt='Корзина'
                        src={pack}
                        width={30}
                        height={30}
                        onClick={props.handleBasketClick}
                    />
                </div>
            </div>
            {
                props.isCatalogOpen && <Catalog />
            }
        </div>
    )
}