import { IssuePriority, OrderType } from '../data/issue';
import { OrderProduct } from './order-product.model';
import { Product } from './product.model';

// Order
export interface Order {
    shippingDetails?: any;
    from?:any;
    to?:any;
    txt_order?:string;
    img_order?:string;
    pTime?:number;
    deliveryBoy?:string;
    product?: OrderProduct[];
    orderId?: any;
    payment?:any;
    userId?: string;
    subtotal?:number;
    shipping?:number;
    discount?:number;
    shopId?:string;
    date?:string;
    tax?:number;
    status?:string;
    state?:string;
    town?:string;
    totalAmount?: any;
    orderTime?:number;
    prepareTime?:number;
    deliveryTime?:number;
    doneTime?:number;
    type?:string;
    pio?:IssuePriority;
}