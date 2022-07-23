import React from 'react';
import axios from 'axios';

import {ModalForm} from './ModalForm';

export const UpdateForm = ({card, show, closeModal, updateCard}) => {

    const updateChanges = ({title, description}) => {
        const updated = {id: card.id, title, description};
        axios.put(`http://localhost:8080/api/items/${card.id}`, updated)
            .catch(err => console.log(err));
        updateCard(updated);
        closeModal();
    }

    return (
        <ModalForm card={card} show={show} closeModal={closeModal} saveChanges={updateChanges} />
    );
}