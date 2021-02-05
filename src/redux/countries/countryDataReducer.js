import { SET_COUNTRIES } from './countryDataTypes';

const initialState = {
    countries: []
}

const countriesDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COUNTRIES:
            return {
                ...state,
                countries: action.data
            }
    }
}
export default countriesDataReducer;