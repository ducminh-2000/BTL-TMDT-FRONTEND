export interface AddressInterface{
    "id"?: number;
    "numberHouse"?: string;
    "stress"?: string;
    "district"?: string;
    "city"?: string;
}

export class Address implements AddressInterface{
    "id": number;
    "numberHouse": string;
    "stress": string;
    "district": string;
    "city": string;
}