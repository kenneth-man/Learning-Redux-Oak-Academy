import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteCard, fetchUsers } from '../actions/cardActions.js';

const Card = ({ card, users, delCard, fetUsers }) => {
    //called as soon as component is rendered and whenever specified/any state changes
    useEffect(() => {
        fetUsers();
    })

    const btnClickDelete = () => {
        delCard(card.id);
    }

    return (
        users.map(curr => 
            <div key={curr.name} className='ui raised very padded text container segment' style={{marginTop: '80px'}}>
                <h3 className='ui header'>{curr.name} &ndash; <span style={{fontSize: '12px'}}>friends with {card.title}</span></h3>
                <p>email: {curr.email}</p> 
                <p>phone num: {curr.phone}</p> 
                <Link to="/contact" exact={true} className='ui primary right floated button' onClick={btnClickDelete}>Delete {card.title} from 'Contacts'</Link>
            </div>
        )
    )
}

//'ownProps' refers to the 'props' of this 'Card' component
const mapStateToProps = (state, ownProps) => {
    let title = ownProps.match.params.user;

    return {
        card: state.cards.find(curr => curr.title === title),
        users: state.users
    }
}

//assigning object properties with function values, therefore treated as functions, are available to 'Card' component via props; 
//'dispatch' sends an action to root reducer when called; (in this case, action creator functions are used which return an action; less code and cleaner)
//an 'action' is typically an object with properties 'type' and 'payload'; sent from components to reducers whereby reducers then update the redux data store
const mapDispatchToProps = (dispatch) => {
    return {
        delCard: (id) => dispatch(deleteCard(id)),
        fetUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);






//---------------ORIGINAL CODE BEFORE LECTURES 22-24: (ACTION CREATORS, REDUX THUNK)-------------
// import React from 'react';
// import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';

// const Card = ({ card }) => {
//     const btnClickDelete = () => {
//         card.deleteCard(card.id);
//     }

//     return (
//         <div className='ui raised very padded text container segment' style={{marginTop: '80px'}}>
//             <h3 className='ui header'>{card.title}</h3>
//             <p>this is {card.title}'s card. {card.body}</p> 
//             <Link to="/contact" exact={true} className='ui primary right floated button' onClick={btnClickDelete}>Delete</Link>
//         </div>
//     )
// }

// //'ownProps' refers to the 'props' of this 'Card' component
// const mapStateToProps = (state, ownProps) => {
//     let title = ownProps.match.params.user;

//     return {
//         card: state.cards.find(curr => curr.title === title)
//     }
// }

// //making this function available to 'Card' component via props; 'dispatch' sends action root reducer when called
// //an 'action' is typically an object with properties 'type' and 'payload'; sent from components to reducers which then update the redux data store
// const mapDispatchToProps = (dispatch) => {
//     return {
//         deleteCard: (id) => dispatch({ type: 'DELETE_CARD', payload: id})
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Card);