import React, { useEffect, useState } from "react";
import 'materialize-css';
import "./App.css";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import ModalItem from "./components/Modal";
import ListItem from "./components/ListItem";
import api from "./services/api";

function App() {

  const [listItems, setListItems] = useState([
    {
      type: "receita",
      title: "Titulo",
      description: "aaaaa",
      value: "1000"
    }
  ]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    listItems()
  }, []);

  function activeModal() {
    setShowModal(!showModal);
  }

  function listItems() {

  }

  function createItem() {

  }

  return (
    <div className="App">
      <ModalItem 
        activeModal={activeModal}
        showModal={showModal}
      />
      <div className="flex-align" style={{ flexDirection: "column" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: "bold" }}>Bootcamp Full Stack - Desafio Final</h2>
        <h2 style={{ fontSize: "1.5rem", fontWeight: "400", margin: "0 0 2rem 0" }}>Controle Financeiro Pessoal</h2>
      </div>
      <div className="flex-align" style={{
        width: "20%",
        margin: "0 auto 1rem auto"
      }}>
        <a className="flex-align waves-effect waves-light btn">
          <ArrowBackIosIcon />
        </a>
        <select class="browser-default">
          <option value="" disabled selected>Choose your option</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </select>
        <a className="flex-align waves-effect waves-light btn">
          <ArrowForwardIosIcon />
        </a>
      </div>

      <div class="collection" style={{
        padding: "1rem",
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr"
      }}>
        <span><strong>Lançamento: </strong> 10000</span>
        <span><strong>Lançamento: </strong> 10000</span>
        <span><strong>Lançamento: </strong> 10000</span>
        <span><strong>Lançamento: </strong> 10000</span>
      </div>

      <div className="flex-align" style={{ margin: "2rem 0" }}>
        <a 
          class="waves-effect waves-light btn" 
          style={{
            width: "20%",
            marginRight: "1rem"
          }}
          onClick={() => createItem()}
        >
          Novo lançamento
        </a>
        <input type="text" id="autocomplete-input" class="autocomplete" placeholder="Filtro"/>
      </div>

      <div>
        {
          listItems.map((item) => <ListItem item={item} activeModal={activeModal} listItems={listItems} />)
        }
      </div>

    </div>
  );
}

export default App;
