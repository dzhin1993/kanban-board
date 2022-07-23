import React, {useState} from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from "react-bootstrap/Form";

export const ModalForm = ({card, show, closeModal, saveChanges}) => {
    const [cardValues, updateValues] = useState({
        title: card.title,
        description: card.description,
    });

    const changeTitle = e => {
        updateValues({...cardValues, title: e.target.value});
    }

    const changeDescription = e => {
        updateValues({...cardValues, description: e.target.value});
    }

    const clear = () => {
      updateValues({
          title: "",
          description: ""
      })
    }

    const handleClick = () => {
        saveChanges(cardValues)
        clear();
    };

    return (
        <Modal show={show} onHide={closeModal}>
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
                <Button variant="secondary" onClick={closeModal}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClick}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
};