import React from 'react';
import ReactDOM from 'react-dom';

//Lecture 11: creating a 'modal' component using 'portal'
//'createPortal()' function takes 2 arguments, 1st is JSX, 2nd is the element (in HTML) you want to render this JSX into
const Modal = ({ showModal, toggleShowModal }) => {
    return ReactDOM.createPortal(
        <div className={showModal ? 'ui dimmer show modals visible active' : 'hidden'}>
            <div className='ui raised very padded text container segment'>
                <h1>I am a modal</h1>
            </div>

            <button onClick={toggleShowModal}>close modal</button>
        </div>,
        document.querySelector('#modal')
    )
}

export default Modal;