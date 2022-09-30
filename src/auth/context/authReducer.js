import { types } from '../types/types';

export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case types.login:
            return {
                ...state,
                logged: true,
                user: action.payload
            };
        case types.logout:
            console.log('entra en el logout')
            return {
                ...state,
                logged: false,
                user: null,
            };
        default:
            return state;
    }
} 