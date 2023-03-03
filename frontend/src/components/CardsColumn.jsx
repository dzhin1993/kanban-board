import React from 'react';
import {useDrop} from 'react-dnd';
import {useDispatch, useSelector} from 'react-redux'

import {CardItem} from "./CardItem";
import {CardStatus} from "../models/CardStatus";
import {updateStatus} from "../actions/cardsActions";
import {open} from "../feutures/createModalFormSlice";

export const CardsColumn = ({columnType}) => {
    const dispatch = useDispatch();
    const cards = useSelector(state => {
        const {cards} = state.cards
        return cards[columnType];
    });

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
            <div className="col-12 col-lg-6 col-xl-3" ref={dropRef}>
                <div className="card card-border-primary">
                    <div className="card-header">
                        <h5 className="card-title">{CardStatus[columnType]}</h5>
                        <h6 className="card-subtitle text-muted">Upcoming new tasks</h6>
                    </div>
                    <div className="card-body p-3">
                        {cards && cards.map(card => <CardItem key={card.id} card={card} />)}
                        <a href="#" className="btn btn-primary btn-block" onClick={() => dispatch(open(columnType))}>Add new</a>
                    </div>
                </div>
            </div>
        </>
    )
};
