import { HairColor, ActionKind } from './Emum';

export interface User {
    name?:string;
    age?:number;
    email?:string;
    hairColor: HairColor;
    //getName:()=> string;
}


export interface ActionType {
    type: ActionKind
}