import React, {useReducer} from 'react';
import GuestContext from './GuestContext';
import GuestReducer from './GuestReducer';
import { GetGuestsUseCase } from '../../domain/useCases/GetGuestsUseCase';
import { GET_GUESTS } from './types';
import { Guest } from '../../domain/entities/Guest.model';

const GuestState = (props: any) => {
    const getGuestUseCase = props.ioc.provideGuestPloc() as GetGuestsUseCase
    const initialState = {
        guestList: []
    }
    const [state, dispatch] = useReducer(GuestReducer, initialState);

    const getGuest = async () => {
        const result: Guest[] = await getGuestUseCase.execute(null)
        dispatch({ type: GET_GUESTS, payload: result })
    };

    return (
        <GuestContext.Provider
            value={{
                guestList: state.guestList,
                getGuest
            }}
        >{props.children}</GuestContext.Provider>
    );  
};

export default GuestState;