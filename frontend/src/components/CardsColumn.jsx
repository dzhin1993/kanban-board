import React, {useState} from 'react';

import {CardItem} from "./CardItem";
import {ModalForm} from "./ModalForm";

export const CardsColumn = ({cards, columnType}) => {
    const [showModal, setShowModal] = useState(false);
    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    return (
        <>
            <ModalForm show={showModal} closeModal={closeModal}/>
            <div className="col-12 col-lg-6 col-xl-3">
                <div className="card card-border-primary">
                    <div className="card-header">
                        <h5 className="card-title">{columnType}</h5>
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

ModalForm.defaultProps = {
    card: {
        title: "",
        description: ""
    }
};
