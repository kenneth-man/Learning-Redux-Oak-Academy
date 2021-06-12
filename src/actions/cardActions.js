import axios from 'axios';

//'action creator' functions 

export const deleteCard = (iD) => {
    return {
        type: 'DELETE_CARD',
        payload: iD
    }
}

export const fetchUsers = () => {
    //return an asynchronous function when executing asynchronous actions with redux-thunk; 
    //this means we can call this function inside a component/s e.g. via a 'useEffect' hook, to get data once the component is rendered/updated
    return (dispatch) => {
        try{
            axios.get('https://jsonplaceholder.typicode.com/users')
                .then(({ data }) => 
                    dispatch({ type: 'FETCH_USERS', payload: data })
                )
            
        } catch(error){
            console.log(error);
        }
    }
}