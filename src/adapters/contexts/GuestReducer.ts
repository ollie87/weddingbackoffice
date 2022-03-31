import { GET_GUESTS } from "./types"

interface iActionReducer {
    type: string,
    payload: any
}
const GuestReducer = (state: any, action: iActionReducer) => {
    switch (action.type) {
        case GET_GUESTS: {
            return { ...state, guestList: action.payload }
        }
    }
}

export default GuestReducer;