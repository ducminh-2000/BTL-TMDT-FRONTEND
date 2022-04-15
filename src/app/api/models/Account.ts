export interface AccountInterface{
    "id"?: number;
    "username"?: string;
    "password"?: string;
}

export class Account implements AccountInterface{
    "id": number;
    "username": string;
    "password": string;
}