import { IType } from "./iType"

const ADULT_TYPE_ID = 1
const CHILD_TYPE_ID = 2
const BABY_TYPE_ID = 3
const ADULT_TYPE_TEXT = 'Adulto'
const CHILD_TYPE_TEXT = 'Niño'
const BABY_TYPE_TEXT = 'Bebé'

export const AGE_TYPES: IType[] = [
    {
        id: ADULT_TYPE_ID,
        name: ADULT_TYPE_TEXT
    },
    {
        id: CHILD_TYPE_ID,
        name: CHILD_TYPE_TEXT
    },
    {
        id: BABY_TYPE_ID,
        name: BABY_TYPE_TEXT
    }
]