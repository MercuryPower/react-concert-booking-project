
export const SET_SELECTED_CITY = 'SET_SELECTED_CITY'
interface CurrentCityState {
    selectedCity: string;
}

interface SetSelectedCityAction  {
    type: typeof SET_SELECTED_CITY;
    payload: string;
}

const initialState:CurrentCityState = {
    selectedCity: 'Moscow'
}
export const currentCityReducer = (state = initialState, action:SetSelectedCityAction):CurrentCityState => {
    switch (action.type){
        case SET_SELECTED_CITY:
            return {
                selectedCity: action.payload,
            }
        default:
            return state;
    }
}