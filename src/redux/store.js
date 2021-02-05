import { createStore } from 'redux';
import countriesDataReducer from './countries/countryDataReducer';

const store = createStore(countriesDataReducer);

export default store;
