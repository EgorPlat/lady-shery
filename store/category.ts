import { instance } from "@/configs/axios";
import { ICategory } from "@/interfaces/category";
import { createEffect, createEvent, createStore, sample } from "effector";

export const setCategorys = createEvent<ICategory[]>();
export const categorys = createStore<ICategory[]>([] as ICategory[]).on(setCategorys, (_, newCategorys) => {
    return newCategorys;
});

export const setSelectedCategory = createEvent<ICategory>();
export const selectedCategory = createStore<ICategory>({} as ICategory).on(setSelectedCategory, (_, categoryName: ICategory) => {
    return categoryName;
});

export const switchIsCategoryOpen = createEvent<boolean>();
export const isCatalogOpen = createStore<boolean>(false).on(switchIsCategoryOpen, (prev, _) => {
    return !prev;
});

export const getCategorys = createEffect(async () => {
    const response = await instance.get('/category/getCategorys');
    return response;
});

sample({
    source: getCategorys.doneData,
    filter: response => response.status <= 217,
    fn: response => response.data,
    target: setCategorys
});