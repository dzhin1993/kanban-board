import React from 'react';

import {ModalForm} from './ModalForm';
import ApiService from "../services/ApiService";

export const UpdateForm = ({card, show, closeModal, updateCard}) => {

    const updateChanges = ({title, description}) => {
        const updated = {...card, title, description};
        ApiService.update(updated)
            .then(() => updateCard(updated));
        closeModal();
    }

    return (
        <ModalForm card={card} show={show} closeModal={closeModal} saveChanges={updateChanges}/>
    );
}