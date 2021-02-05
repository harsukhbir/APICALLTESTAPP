import { SET_COUNTRIES } from './countryDataTypes'

export const setCountriesData = (data) => {
    return {
        type: SET_COUNTRIES,
        data
    }
}