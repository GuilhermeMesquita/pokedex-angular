import { Type } from './Type';

export interface Pokemon {
    image: string;
    number: string | number;
    name: string;
    types: Type[];
}