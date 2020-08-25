import React, { useEffect,useState } from 'react';
import api from './services/api';

import DevItem from './components/DevItem';
import DevForm from './components/DevForm';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';
/*
  Os três principais conceitos do React:
  - Componente: exemplo, uma funcão é um componente que retorna um conteúdo HTML, CSS e entre outros.
  - Propriedades: Atribultos inseridos nos componentes exemplos, estilização; funções; variáveis e etc.
  - Estado: É uma informação que algum tipo de componente vai manipular. (Obs: React usa o conceito da imutabilidade) 
*/

function App() {

  const [ devs, setDevs ] = useState([]); 

  useEffect(() => {
    async function loadDevs() {

      const response = await api.get('/devs');
      setDevs(response.data);
    }

    loadDevs();
  }, []);

  async function handleAddDev(data) {
    const response = await api.post('/devs', data);

    setDevs([...devs, response.data]);
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev}/>
      </aside>

      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev}/>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
