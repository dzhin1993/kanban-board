import React from 'react';
import {useDrag} from 'react-dnd'
import {useDispatch} from "react-redux";

import {deleteCard, removeFromColumn} from "../actions/cardsActions";
import {open} from "../feutures/modalFormSlice";

export const CardItem = ({card}) => {
    const dispatch = useDispatch();

    const [{didDrop}, dragRef] = useDrag({
        type: "cardItem",
        item: card,
        collect: (monitor) => ({
            didDrop: monitor.didDrop()
        }),
        end: (card) => {
            if (didDrop) {
                dispatch(removeFromColumn(card.id, card.status))
            }
        }
    })

    const {title, description} = card;
    return (
        <>
            <div className="container" ref={dragRef}>
                <div className="card mb-3 bg-light">
                    <div className="card-header">
                        <div className="row">
                            <div className="col-sm"/>
                            <div className="col-sm">
                                <h5 className="card-title text-muted">{title}</h5>
                            </div>
                            <div className="col-sm">
                                <button type="button" className="btn-close" aria-label="Close" onClick={
                                    () => dispatch(deleteCard(card.id, card.status))
                                }/>
                            </div>
                        </div>
                    </div>
                    <div className="card-body p-3">
                        <p>{description}</p>
                        <a className="btn btn-outline-primary btn-sm" href="#" onClick={() => dispatch(open(card))}>View</a>
                    </div>
                </div>
            </div>
        </>
    );
};