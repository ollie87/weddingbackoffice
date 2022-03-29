import { Guest } from "../entities/Guest.model";


export interface GuestRepository {
    get(filters: any): Promise<Guest[]>;
}