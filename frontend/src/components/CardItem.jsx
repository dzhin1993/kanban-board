import React, {useState} from 'react';
import {UpdateForm} from "./UpdateForm";

export const CardItem = ({card, updateCard}) => {
    const [showModal, setShowModal] = useState(false);
    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    const {title, description} = card;
    return (
        <>
            <UpdateForm card={card} show={showModal} closeModal={closeModal} updateCard={updateCard}/>
            <div className="card mb-3 bg-light">
                <div className="card-body p-3">
                    <h5 className="card-title text-muted">{title}</h5>
                    <p>{description}</p>
                    <a className="btn btn-outline-primary btn-sm" href="#" onClick={openModal}>View</a>
                </div>
            </div>
        </>
    );
};