import { HairColor } from "./Emum";

export interface User {
    name?:string;
    age?:number;
    email?:string;
    hairColor: HairColor;
    //getName:()=> string;
}