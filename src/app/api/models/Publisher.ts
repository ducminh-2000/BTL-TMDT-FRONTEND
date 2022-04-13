declare var Object: any;

export interface PublisherInterface {
    "id"?: number;
    "name"?: string;
    "address"?: string
}

export class Publisher implements PublisherInterface {
    "id": number;
    "name": string;
    "address": string;
    constructor(data?: PublisherInterface) {
        Object.assign(this, data);
    }
    public static getModelName() {
        return "Publisher";
    }
    public static factory(data: PublisherInterface): Publisher {
        return new Publisher(data);
    }
}