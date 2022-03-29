import { Guest } from "../entities/Guest.model";
import { GuestRepository } from "../repositories/GuestRepository";

export class GetGuestsUseCase {
    private guestRepository: GuestRepository;

    constructor(guestRepository: GuestRepository) {
        this.guestRepository = guestRepository;
    }

    execute(filter: any): Promise<Guest[]> {
        return this.guestRepository.get(filter);
    }
}