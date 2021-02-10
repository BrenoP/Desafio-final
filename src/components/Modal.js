import React from "react";
import Modal from 'react-modal';
import CloseIcon from '@material-ui/icons/Close';

import api from "../services/api";

export default function ModalItem({
    activeModal,
    showModal,
    item
}) {

    function save() {

    }

    return(
        <Modal
            isOpen={showModal}
            onRequestClose={() => activeModal()}
            contentLabel="Example Modal"
            style={{
                content : {
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)'
                }
            }}
        >
            <div className="flex-between" style={{ margin: "0 0 1rem 0" }}>
                <h3 style={{ margin: "0 0 .5rem 0", fontSize: "1.5em" }}>Edição de lançamento</h3>
                <button 
                    className="waves-effect waves-light btn red lighten-1" 
                    onClick={() => activeModal()}
                    style={{
                        display: "flex",
                        alignItems: "center"
                    }}
                >
                    <CloseIcon />
                </button>
            </div>
            <div style={{ border: "1px solid black", padding: "1rem" }}>
                <div className="flex-around">
                    <h4 style={{ fontSize: "1.2rem", display: "flex" }}>
                        <span style={{
                            width: "1rem",
                            height: "1rem",
                            border: "1px solid gray",
                            borderRadius: "100%",
                            margin: "0 .5rem 0 0",
                            // backgroundColor: item.despesa ? "gray" : "white"
                        }} /> 
                        Despesa
                    </h4>
                    <h4 style={{ fontSize: "1.2rem", display: "flex" }}>
                        <span style={{
                            width: "1rem",
                            height: "1rem",
                            border: "1px solid gray",
                            borderRadius: "100%",
                            margin: "0 .5rem 0 0",
                            // backgroundColor: item.despesa ? "white" : "gray"
                        }} /> 
                        Receita
                    </h4>
                </div>
                <form>
                    <input type="text" id="autocomplete-input" class="autocomplete" placeholder="Descrição" />
                    <input type="text" id="autocomplete-input" class="autocomplete" placeholder="Categoria" />
                    <div className="flex-around">
                        <input type="text" id="autocomplete-input" class="autocomplete" placeholder="Valor" />
                        <input />
                    </div>
                </form>
            </div>
            <div class="right" style={{ margin: "1rem 0 0 0" }}>
                <button className="waves-effect waves-light btn right-align" onClick={() => save()}>Salvar</button>
            </div>
        </Modal>
    );
}