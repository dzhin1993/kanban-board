import React, {useState, useEffect} from 'react';
import {useDrop} from 'react-dnd';
import {useDispatch, useSelector} from 'react-redux'

import {CardItem} from "./CardItem";
import {AddForm} from "./AddForm";
import {CardStatus} from "../models/CardStatus";
import ApiService from "../services/ApiService";
import {updateStatus} from "../actions/cardsActions";

export const CardsColumn = ({initialState, columnType}) => {
    const dispatch = useDispatch();
    const cards = useSelector(state => {
        const {cards} = state.cards
        return cards[columnType];
    });

    const [showModal, setShowModal] = useState(false);
    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    const changeStatus = (id) => {
        ApiService.updateStatus(id, columnType)
            .catch(err => {
                console.error(err);
            })
    }

    const [, dropRef] = useDrop({
        accept: "cardItem",
        canDrop: (item => item.status !== columnType),
        drop: (item) => {
            dispatch(updateStatus(item.id, columnType));
        },
        collect: (monitor) => ({
            isOver: monitor.didDrop()
        })
    })

    useEffect(() => {
       /* if (initialState) {
            setCard(initialState);
        }*/
    }, [initialState])

    const addCard = (card) => {
      /*  setCard(current => [...current, card]);*/
    }

    const updateCard = (card) => {
       /* const newState = cards.map(item => {
            return item.id === card.id ? card : item;
        });
        setCard(newState);*/
    }

    const removeCard = (id) => {
       /* setCard(current => {
            return current.filter(card => card.id !== id);
        })*/
    }

    return (
        <>
            <AddForm show={showModal} closeModal={closeModal} addCard={addCard} cardStatus={columnType}/>
            <div className="col-12 col-lg-6 col-xl-3" ref={dropRef}>
                <div className="card card-border-primary">
                    <div className="card-header">
                        <h5 className="card-title">{CardStatus[columnType]}</h5>
                        <h6 className="card-subtitle text-muted">Upcoming new tasks</h6>
                    </div>
                    <div className="card-body p-3">
                        {cards && cards.map(card => <CardItem key={card.id} card={card} updateCard={updateCard}
                                                              removeCard={removeCard}/>)}
                        <a href="#" className="btn btn-primary btn-block" onClick={openModal}>Add new</a>
                    </div>
                </div>
            </div>
        </>
    )
};
