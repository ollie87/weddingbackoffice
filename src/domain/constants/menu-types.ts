import { IType } from "./iType"

const CLASIC_TYPE_ID = 1
const VEGAN_TYPE_ID = 2
const VEGETARIAN_TYPE_ID = 3
const CHILDISH_TYPE_ID = 4
const BABY_NOT_MENU_ID = 5
const CLASIC_TYPE_TEXT = 'Clásico'
const VEGAN_TYPE_TEXT = 'Vegano'
const VEGETARIAN_TYPE_TEXT = 'Vegetariano'
const CHILDISH_TYPE_TEXT = 'Infantil'
const BABY_NOT_MENU_TEXT = 'Bebé (Sin menu)'

export const MENU_TYPES_OPTIONS: IType[] = [
    {
        id: CLASIC_TYPE_ID,
        name: CLASIC_TYPE_TEXT
    },
    {
        id: VEGAN_TYPE_ID,
        name: VEGAN_TYPE_TEXT
    },
    {
        id: VEGETARIAN_TYPE_ID,
        name: VEGETARIAN_TYPE_TEXT
    },
    {
        id: CHILDISH_TYPE_ID,
        name: CHILDISH_TYPE_TEXT
    },
    {
        id: BABY_NOT_MENU_ID,
        name: BABY_NOT_MENU_TEXT
    }
]