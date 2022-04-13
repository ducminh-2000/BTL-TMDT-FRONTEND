declare var Object: any;

export interface CategoryBookInterface {
    "id"?: number;
    "name"?: string;
}

export class CategoryBook implements CategoryBookInterface {
    "id": number;
    "name": string;
    constructor(data?: CategoryBookInterface) {
        Object.assign(this, data);
    }
    public static getModelName() {
        return "CategoryBook";
    }

    public static factory(data: CategoryBookInterface): CategoryBook {
        return new CategoryBook(data);
    }
}