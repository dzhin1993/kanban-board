import React from 'react';

import {ModalForm} from './ModalForm';
import {useDispatch} from "react-redux";
import {updateCard} from "../actions/cardsActions";

export const UpdateForm = ({card, show, closeModal}) => {
    const dispatch = useDispatch();

    const updateChanges = ({title, description}) => {
        const updated = {...card, title, description};
        dispatch(updateCard(updated));
        closeModal();
    }

    return (
        <ModalForm card={card} show={show} closeModal={closeModal} saveChanges={updateChanges}/>
    );
}