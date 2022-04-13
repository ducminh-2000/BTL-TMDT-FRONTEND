
import { Author } from "./Author";
import { CategoryBook } from "./CategoryBook";
import { Publisher } from "./Publisher";

export interface BookInterface {
    "id"?: number;
    "title"?: string;
    "language"?: string;
    "numberOfPage"?: number;
    "publicationDate"?: Date;
    categoryBook?: CategoryBook;
    publisher?: Publisher;
    author?: Author[];
}

export class Book implements BookInterface {
    "id": number;
    "title": string;
    "language": string;
    "numberOfPage": number;
    "publicationDate": Date;
    categoryBook?: CategoryBook;
    publisher?: Publisher;
    author?: Author[];
    constructor(data?: BookInterface) {
        Object.assign(this, data);
    }
    public static getModelName() {
        return "Book";
    }
    public static factory(data: BookInterface): Book {
        return new Book(data);
    }
}