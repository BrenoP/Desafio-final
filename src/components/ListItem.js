import React from "react";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import api from "../services/api";

export default function ListItem({ item, activeModal, listItems }) {

    function editItem() {

    }

    function deleteItem() {

    }

    return(
        <div 
            className={item.type === "receita" ? 
            "card-panel teal lighten-2" : 
            "card-panel red lighten-1"}
        >
            <div className="flex-between" style={{ padding: "0 2rem" }}>
            <div className="flex-align">
                <span>01</span>
                <div style={{ margin: "0 0 0 1rem" }}>
                    <h4 style={{ margin: "0", fontSize: "1.2rem" }}>{item.title}</h4>
                    <p style={{ margin: "0" }}>{item.description}</p>
                </div>
            </div>
            <div className="flex">
                <span style={{ margin: "0 1rem 0 0" }}>R$ {item.value}</span>
                <div>
                    <EditIcon onClick={() => editItem()} />
                    <DeleteIcon onClick={() => deleteItem()} />
                </div>
            </div>
            </div>
        </div>
    );
}