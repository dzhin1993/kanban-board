import React from 'react';

import {ModalForm} from './ModalForm';
import {useDispatch, useSelector} from "react-redux";
import {createCard} from "../actions/cardsActions";
import {close} from "../feutures/createModalFormSlice";

export const AddForm = () => {
    const dispatch = useDispatch();
    const show = useSelector(state => state.createModal.show);
    const status = useSelector(state => state.createModal.currentColumn);

    const saveChanges = ({title, description}) => {
        let created = {title, description, status};
        dispatch(createCard(created));
        dispatch(close());
    }

    const emptyCard = {title: "", description: ""}

    return (
        <ModalForm card={emptyCard} show={show} closeModal={() => dispatch(close())} saveChanges={saveChanges}/>
    );
}