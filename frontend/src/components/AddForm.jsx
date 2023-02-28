import React from 'react';
import axios from 'axios';

import {ModalForm} from './ModalForm';

export const AddForm = ({show, closeModal, addCard, cardStatus}) => {


    const saveChanges = ({title, description}) => {
        let created = {title, description, status: cardStatus};
        axios.post(`http://localhost:8080/api/items`, created)
            .then(res => {
                created.id = res.data.id;
                addCard(created);
            })
            .catch(err => console.log(err));
        closeModal();
    }

    const emptyCard = {title: "", description: ""}

    return (
        <ModalForm card={emptyCard} show={show} closeModal={closeModal} saveChanges={saveChanges} />
    );
}