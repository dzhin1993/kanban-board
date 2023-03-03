import React from 'react';

import {ModalForm} from './ModalForm';
import {useDispatch, useSelector} from "react-redux";
import {updateCard} from "../actions/cardsActions";
import {close} from "../feutures/updateModalFormSlice";

export const UpdateForm = () => {
    const dispatch = useDispatch();
    const show = useSelector(state => state.updateModal.show);
    const card = useSelector(state => state.updateModal.currentCard);

    const updateChanges = ({title, description}) => {
        const updated = {...card, title, description};
        dispatch(updateCard(updated));
        dispatch(close());
    }

    return (
        <ModalForm card={card} show={show} closeModal={() => dispatch(close())} saveChanges={updateChanges}/>
    );
}