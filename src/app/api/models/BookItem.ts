import { Book } from "./Book";

export interface BookItem{
    id?: number;
    name?: string;
    price?: number;
    discount?: number;
    description?: string;
    numberSold?: number;
    numAvailidInStock?: number;
    images?: string;
    book?: Book;
}

export class BookItem{
    id?: number;
    name?: string;
    price?: number;
    discount?: number;
    description?: string;
    numberSold?: number;
    numAvailidInStock?: number;
    images?: string;
    book?: Book;
}