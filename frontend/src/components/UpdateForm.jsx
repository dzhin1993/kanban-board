import React from 'react';

import {ModalForm} from './ModalForm';
import {useDispatch, useSelector} from "react-redux";
import {createCard, updateCard} from "../actions/cardsActions";
import {close} from "../feutures/modalFormSlice";

export const UpdateForm = () => {
    const dispatch = useDispatch();
    const show = useSelector(state => state.modal.show);
    const card = useSelector(state => state.modal.currentCard);

    const updateChanges = ({title, description}) => {
        const updated = {...card, title, description};
        if (updated?.id) {
            dispatch(updateCard(updated));
        } else {
            dispatch(createCard(updated))
        }

        dispatch(close());
    }

    return (
        <ModalForm card={card} show={show} closeModal={() => dispatch(close())} saveChanges={updateChanges}/>
    );
}