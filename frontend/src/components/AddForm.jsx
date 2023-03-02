import React from 'react';

import {ModalForm} from './ModalForm';
import {useDispatch} from "react-redux";
import {createCard} from "../actions/cardsActions";

export const AddForm = ({show, closeModal, cardStatus}) => {
    const dispatch = useDispatch();

    const saveChanges = ({title, description}) => {
        let created = {title, description, status: cardStatus};
        dispatch(createCard(created))
        closeModal();
    }

    const emptyCard = {title: "", description: ""}

    return (
        <ModalForm card={emptyCard} show={show} closeModal={closeModal} saveChanges={saveChanges}/>
    );
}