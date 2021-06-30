export interface ListProductsI{
    idProduct: number;
    productName: string;
    productPrice : number;
    productStock : number;
    imageProduct : string;
    idCategory : number;
    category:[
        idCategory : number,
        categoryName: string
        
    ]
    token: string;
}
export interface ProductsI{
    idProduct: number;
    productName: string;
    productPrice : number;
    productStock : number;
    imageProduct : string;
    idCategory : number;
    //token: string;
}