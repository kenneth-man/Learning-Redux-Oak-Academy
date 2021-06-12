import React, { useState } from 'react';
//don't need to use 'NavLink' as we aren't styling active links selected
import { Link } from 'react-router-dom';
import Modal from './Modal.js';
//'connect' is a higher order function connecting this component to the redux data store; 
//e.g. when exporting, we invoke and parse in a function component into 'connect'
import { connect } from 'react-redux';

const Contact = ({ history, cards }) => {
    //redirect to 'about' page after 1 minute
    setTimeout(() => {
        //equivalent to '(props)' in this component's parameters, then 'props.history...'
        history.push('/about');
    }, 60000);

    const [showModal, setShowModal] = useState(false);

    const toggleShowModal = () => {
        setShowModal(!showModal);
    }

    return (
        <div>
            {
                cards.map(curr => 
                    <div key={curr.id} className='ui raised very padded text container segment' style={{marginTop: '80px'}}>
                        <Link to={`/${curr.title}`} className='ui header'>{curr.title}</Link>
                        <p>{curr.body}</p>
                    </div>
                )
            }

            <button onClick={toggleShowModal}>show modal</button>

            <Modal 
                key='1'
                showModal={showModal}
                toggleShowModal={toggleShowModal}
            />
        </div>
    )
}

//function to get specific data from redux data store ('state'), to be used in this component - parsed in as props
const mapStateToProps = (state) => {
    return {
        cards: state.cards
    }
}

export default connect(mapStateToProps)(Contact);