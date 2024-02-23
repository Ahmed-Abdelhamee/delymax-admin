// Products
export class Product {
    id?: string;
    title?: string;
    title_En?: string;
    description?: string;
    description_En?: string;
    type?: string;
    brand?: string;
    category?: string;
    price?: Price[];
    sale?: boolean;
    discount?: number;
    new?: boolean;
    quantity?: number;
    featured?:boolean;
    variants?: Variants[];
    sides?:Side[];
    images?: string[];
    shopId?:string;
    view?:boolean;

    
}

export interface Price {
    id?: string;
    unit?: string;
    unit_En?: string;
    price?: number; 
}

export interface Side {
    id?:string;
    name?: string;
    name_En?: string;
    price?: number; 
    size?:string;
}

export interface Variants {
    variant_id?: number;
    id?: string;
    sku?: string;
    size?: string;
    color?: string;
    image_id?: number;
}


