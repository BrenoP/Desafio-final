import React, { useState } from "react";
import M from 'materialize-css';

function App() {

  const [list, setList] = useState([{
    title: "Lazer"
  }]);

  return (
    <div className="App">
      <h2>Bootcamp Full Stack - Desafio Final</h2>
      <h2>Controle Financeiro Pessoal</h2>
      <a class="waves-effect waves-light btn">a</a>
      <select class="browser-default">
        <option value="" disabled selected>Choose your option</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </select>
      <a class="waves-effect waves-light btn">a</a>

      <div class="collection">
        <a href="#!" class="collection-item">
          <span class="badge">1</span>
          Alan  
          <span class="badge">1</span>
          Alan  
          <span class="badge">1</span>
          Alan  
          <span class="badge">1</span>
          Alan  
        </a>
      </div>

      <div>
        <a class="waves-effect waves-light btn">Novo lançamento</a>
        <input type="text" id="autocomplete-input" class="autocomplete" />
        <label for="autocomplete-input">Autocomplete</label>
      </div>

    </div>
  );
}

export default App;
