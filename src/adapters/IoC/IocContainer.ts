import { GetGuestsUseCase } from "../../domain/useCases/GetGuestsUseCase";
import { FirebaseGuestRepository } from "../repositories/FirebaseGuestRepository";

function provideGuestPloc ()  {
    const guestRepository = new FirebaseGuestRepository();
    const getGuestsUseCase = new GetGuestsUseCase(guestRepository);
    return getGuestsUseCase;
}

export const dependenciesLocator = {
    provideGuestPloc
}