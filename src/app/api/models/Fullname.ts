export interface FullnameInterface{
    "id"?: number;
    "firstName"?: string;
    "lastName"?: string;
    "midName"?: string;
}

export class Fullname implements FullnameInterface{
    "id": number;
    "firstName": string;
    "lastName": string;
    "midName": string;
}