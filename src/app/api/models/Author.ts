import { Book } from "./Book";

declare var Object: any;

export interface AuthorInterface {
    "id"?: number;
    "name"?: string;
    "biography"?: string;
    book?: Book[];
}

export class Author implements AuthorInterface {
    "id": number;
    "name": string;
    "biography": string;
    book?: Book[];
    constructor(data?: AuthorInterface) {
        Object.assign(this, data);
    }
    public static getModelName() {
        return "Author";
    }

    public static factory(data: AuthorInterface): Author {
        return new Author(data);
    }
}