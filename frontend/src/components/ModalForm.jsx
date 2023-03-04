import React, {useState, useEffect} from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from "react-bootstrap/Form";
import {useDispatch, useSelector} from "react-redux";
import {createCard, updateCard} from "../actions/cardsActions";
import {close} from "../feutures/modalFormSlice";

export const ModalForm = () => {
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

    const [cardValues, updateValues] = useState({
        title: card.title,
        description: card.description,
    });

    useEffect(() => {
        updateValues({title: card.title, description: card.description})
    }, [card])

    const changeTitle = e => {
        updateValues({...cardValues, title: e.target.value});
    }

    const changeDescription = e => {
        updateValues({...cardValues, description: e.target.value});
    }

    const handleClick = () => updateChanges(cardValues);

    return (
        <Modal show={show} onHide={() => dispatch(close())}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter title" value={cardValues.title} onChange={changeTitle} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" placeholder="Enter description" value={cardValues.description} onChange={changeDescription} />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => dispatch(close())}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClick}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
};