import { Product } from "./product";

export interface User {
    id : number;
    username : string;
    password : string;
    balance : number;
    cart : Product[];
}