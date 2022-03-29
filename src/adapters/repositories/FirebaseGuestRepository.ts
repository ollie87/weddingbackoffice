import { GuestRepository } from "../../domain/repositories/GuestRepository";
import { FirebaseRepository } from "./FirebaseRepository";
import { Guest } from "../../domain/entities/Guest.model"
import { collection, getDocs, query, where } from "firebase/firestore";
import { MENU_TYPES_OPTIONS } from "../../domain/constants/menu-types";
import { getType, IType } from "../../domain/constants/iType";
import { AGE_TYPES } from "../../domain/constants/age-types";

export interface GuestFirestore {
    age: string;
    allergies: string;
    bus: boolean;
    created: number;
    menu: string;
    name: string;
    surname1: string;
    surname2: string;
}

export class FirebaseGuestRepository extends FirebaseRepository implements GuestRepository {
    constructor () {
        super()
        this.collectionName = 'guests'
        console.log('FirebaseGuestRepository constructor...')
    }

    async get (filters: any): Promise<Guest[]> {
        const q = query(collection(this.db, this.collectionName), where('bus', '==', true))
        const querySnapshot = await getDocs(q)
        const firestoreGuests: GuestFirestore[] = []
        querySnapshot.forEach((doc) => {
            console.log(doc.data())
            firestoreGuests.push(doc.data() as GuestFirestore)
        })
        return Promise.all(
            firestoreGuests.map(async (guest: GuestFirestore) => {
              return this.mapGuest(guest)
            })
        )
          
    }

    private mapGuest (guestFirestore: GuestFirestore): Guest {
        return {
            age: this.getStrType(AGE_TYPES, Number(guestFirestore.age)),
            allergies: guestFirestore.allergies,
            bus: guestFirestore.bus ? 'SI' : 'NO',
            created: this.getStrDate(guestFirestore.created),
            name: guestFirestore.name,
            surname1: guestFirestore.surname1,
            surname2: guestFirestore.surname2,
            menu: this.getStrType(MENU_TYPES_OPTIONS, Number(guestFirestore.menu))
        }
    }

    private getStrType (arrayType: IType[], typeId: number): string {
        const type = getType(arrayType, typeId)
        return type ? type.name : ''
    }

    private getStrDate (time: number): string {
        const date = new Date(time)
        return date.toLocaleDateString()
    }
}