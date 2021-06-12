const initialState = {
    cards: [
        {
            id: 1,
            title: 'Alex',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            id: 2,
            title: 'Willma',
            body: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
            id: 3,
            title: 'John',
            body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        }
    ],
    users: []
}

//any component that dispatches an action to this reducer, will be parsed in via the 'action' argument here
const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'DELETE_CARD':
            let newCard =  state.cards.filter(curr => curr.id !== action.payload);

            //spread all existing state, then override with updated state
            return {
               ...state,
               cards: newCard
            }
        case 'FETCH_USERS':
            return {
                ...state,
                users: action.payload
            }
        default:
            return state;
    }
}

export default rootReducer;