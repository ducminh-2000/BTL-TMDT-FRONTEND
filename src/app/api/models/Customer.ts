import { Account } from "./Account";
import { Address } from "./Address";
import { Cart } from "./Catr";
import { Fullname } from "./Fullname";

export interface CustomerInterface{

    "id"?: number;
    account?: Account;
    address?: Address;
    "phone"?: string;
    "mail"?: string;
    fullname?: Fullname;
}
export class Customer implements CustomerInterface{
    "id": number;
    account?: Account;
    address?: Address;
    "phone": string;
    "mail": string;
    fullname?: Fullname;
}