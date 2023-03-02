import React, {useState} from 'react';
import {useDrop} from 'react-dnd';
import {useDispatch, useSelector} from 'react-redux'

import {CardItem} from "./CardItem";
import {AddForm} from "./AddForm";
import {CardStatus} from "../models/CardStatus";
import {updateStatus} from "../actions/cardsActions";

export const CardsColumn = ({columnType}) => {
    const dispatch = useDispatch();
    const cards = useSelector(state => {
        const {cards} = state.cards
        return cards[columnType];
    });

    const [showModal, setShowModal] = useState(false);
    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    const [, dropRef] = useDrop({
        accept: "cardItem",
        canDrop: (item => item.status !== columnType),
        drop: (item) => {
            dispatch(updateStatus(item.id, columnType));
        },
        collect: (monitor) => ({
            isOver: monitor.didDrop()
        })
    });

    return (
        <>
            <AddForm show={showModal} closeModal={closeModal} cardStatus={columnType}/>
            <div className="col-12 col-lg-6 col-xl-3" ref={dropRef}>
                <div className="card card-border-primary">
                    <div className="card-header">
                        <h5 className="card-title">{CardStatus[columnType]}</h5>
                        <h6 className="card-subtitle text-muted">Upcoming new tasks</h6>
                    </div>
                    <div className="card-body p-3">
                        {cards && cards.map(card => <CardItem key={card.id} card={card} />)}
                        <a href="#" className="btn btn-primary btn-block" onClick={openModal}>Add new</a>
                    </div>
                </div>
            </div>
        </>
    )
};
