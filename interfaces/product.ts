export interface ProductSpecification {
    title: string,
    value: string
}

export interface StockInfo {
    size: string,
    stockCount: number
}

export interface IProduct {
    productId: string,
    articleNumber: string,
    title: string,
    categorysId: number,
    stockInfo: StockInfo[],
    images: any[]
    specifications: ProductSpecification[]
}