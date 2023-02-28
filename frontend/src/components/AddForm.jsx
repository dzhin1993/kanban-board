import React from 'react';

import {ModalForm} from './ModalForm';
import ApiService from "../services/ApiService";

export const AddForm = ({show, closeModal, addCard, cardStatus}) => {

    const saveChanges = ({title, description}) => {
        let created = {title, description, status: cardStatus};
        ApiService.create(created)
            .then(res => {
                created.id = res.data.id;
                addCard(created);
            });
        closeModal();
    }

    const emptyCard = {title: "", description: ""}

    return (
        <ModalForm card={emptyCard} show={show} closeModal={closeModal} saveChanges={saveChanges}/>
    );
}