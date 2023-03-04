import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from "react-bootstrap/Form";
import {createCard, updateCard} from "../actions/cardsActions";
import {close, updateProperty} from "../feutures/modalFormSlice";

export const ModalForm = () => {
    const dispatch = useDispatch();
    const show = useSelector(state => state.modal.show);
    const card = useSelector(state => state.modal.currentCard);

    const updateChanges = () => {
        if (card?.id) {
            dispatch(updateCard(card));
        } else {
            dispatch(createCard(card));
        }
        dispatch(close());
    }

    const handleChange = ({target}) => {
        dispatch(updateProperty({name: target.name, value: target.value}));
    }

    return (
        <Modal show={show} onHide={() => dispatch(close())}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            name="title" type="text"
                            placeholder="Enter title"
                            value={card.title}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            name="description"
                            type="text"
                            placeholder="Enter description"
                            value={card.description}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => dispatch(close())}>
                    Close
                </Button>
                <Button disabled={card.title === ""} variant="primary" onClick={() => updateChanges()}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
};