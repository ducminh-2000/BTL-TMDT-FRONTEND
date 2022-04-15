import { BookItem } from "./BookItem";

export interface CartInterface{
    "id"?: number;
    book?: BookItem[];
    "quantity"?: number;
    "totalPrice"?: number;
}

export class Cart implements CartInterface{
    "id": number;
    book?: BookItem[];
    "quantity": number;
    "totalPrice": number;
}