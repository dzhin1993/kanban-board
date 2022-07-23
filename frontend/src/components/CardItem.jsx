import React, {useState} from 'react';
import axios from 'axios';
import { useDrag } from 'react-dnd'

import {UpdateForm} from "./UpdateForm";

export const CardItem = ({card, updateCard, removeCard}) => {
    const [showModal, setShowModal] = useState(false);
    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    const handleRemove = () => {
        axios.delete(`http://localhost:8080/api/items/${card.id}`)
            .catch(err => {
                console.log(err);
            })
        removeCard(card.id);
    }

    const [{ didDrop }, dragRef] = useDrag({
        type: "cardItem",
        item: card,
        collect: (monitor) => ({
            didDrop: monitor.didDrop()
        }),
        end: (card) => {
            if (didDrop) {
                console.log("didDrop");
                removeCard(card.id)
            }
        }
    })

    const {title, description} = card;
    return (
        <>
            <UpdateForm card={card} show={showModal} closeModal={closeModal} updateCard={updateCard}/>
            <div className="container" ref={dragRef}>
                <div className="card mb-3 bg-light">
                    <div className="card-header">
                       <div className="row">
                           <div className="col-sm"/>
                           <div className="col-sm">
                               <h5 className="card-title text-muted">{title}</h5>
                           </div>
                           <div className="col-sm">
                               <button type="button" className="btn-close" aria-label="Close" onClick={handleRemove}/>
                           </div>
                       </div>
                    </div>
                    <div className="card-body p-3">
                        <p>{description}</p>
                        <a className="btn btn-outline-primary btn-sm" href="#" onClick={openModal}>View</a>
                    </div>
                </div>
            </div>
        </>
    );
};