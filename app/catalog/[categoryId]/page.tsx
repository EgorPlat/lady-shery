import { baseURL } from "@/configs/axios";
import CatalogPageView from "./CatalogPageView/CatalogPageView"

export const metadata = {
    title: 'Lady Shery - Каталог',
    description: 'Информация про Lady Shery',
    keywords: ['Lady Shery', 'Lady', 'Shery', 'О нас', 'Интернет магазин', 'Магазин', 'магазин', 'Корзина', 'корзина', 'купить', 'контакты'],
};

interface ICatalogProps {
    params: {
        categoryId: any
    }
};

async function getProductsData(categoryId: number) {
    const response = await fetch(baseURL + 'product/getProductsByCategory', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            category: categoryId
        })
    });
    if (response.status <= 217) {
        return response.json();
    }
};

export default async function Catalog({ params: { categoryId }}: ICatalogProps) {

    const productsInfo = await getProductsData(categoryId);
    return (
        <CatalogPageView
            productsInfo={productsInfo}
        />
    )
}