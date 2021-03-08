import * as actions from '../Actions/actions'

const initialState = {
    persons: []
}

const personReducer = (state = initialState, action) => {
    switch (action.type){
        case actions.ADD_PERSON:
            return {
                ...state,
                persons: state.persons.concat({person: action.payload})
            };
        case actions.DELETE_PERSON:
            const updatedPersonsArray = state.persons.filter(person => person.id !== action.id)
            return {
                ...state,
                persons: updatedPersonsArray
            };
    }
}

export default personReducer;