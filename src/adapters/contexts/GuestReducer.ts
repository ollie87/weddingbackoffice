import { GET_GUESTS } from "./types"

interface iActionReducer {
    type: string,
    payload: any
}
export default (state: any, action: iActionReducer) => {
    switch (action.type) {
        case GET_GUESTS: {
            return { ...state, guestList: action.payload }
        }
    }
}