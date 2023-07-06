'use client';
import MenuHeaderView from "./menuHeaderView/menuHeaderView";
import { categorys, isCatalogOpen, switchIsCategoryOpen } from "@/store/category";
import { isSearchModalOpen, setIsSearchModalOpen } from "@/store/modals";
import { useStore } from "effector-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ISelectOptions } from '@/interfaces/reactSelect';
import { SingleValue } from "react-select";
import { isMobile } from "@/store/helper";

export default function MenuHeader() {
    
    const isCatalogOpen$ = useStore(isCatalogOpen);
    const isSearchModalOpen$ = useStore(isSearchModalOpen);
    const categorys$ = useStore(categorys);
    const isMobile$ = useStore(isMobile);
    const router = useRouter();

    const [searchSelectOptions, setSearchSelectOptions] = useState<ISelectOptions[]>([] as ISelectOptions[]);

    const handleCatalogClick = () => {
        switchIsCategoryOpen(true);
    };

    const handleShopsClick = () => {
        router.push('/shops');
    };

    const handleSearchClick = () => {
        setIsSearchModalOpen(true);
    };

    const handleCloseSearchModal = () => {
        setIsSearchModalOpen(false);
    };

    const handleChangeSearchSelectValue = (value: SingleValue<ISelectOptions>) => {
        console.log(value);
    };

    const handleLogoClick = () => {
        router.push('/');
    };

    const handleBasketClick = () => {
        router.push('/basket');
    };

    useEffect(() => {
        setSearchSelectOptions(categorys$.map(el => {
            return {
                label: el.title,
                value: el.categoryId
            }
        }));
    }, [categorys$]);
    
    return (
        <MenuHeaderView
            handleBasketClick={handleBasketClick}
            handleLogoClick={handleLogoClick}
            handleCatalogClick={handleCatalogClick}
            handleShopsClick={handleShopsClick}
            handleSearchClick={handleSearchClick}
            handleCloseSearchModal={handleCloseSearchModal}
            handleChangeSearchSelectValue={handleChangeSearchSelectValue}
            isCatalogOpen={isCatalogOpen$}
            isSearchModalOpen={isSearchModalOpen$}
            isMobile={isMobile$}
            searchSelectOptions={searchSelectOptions}
        />
    )
}