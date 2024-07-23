import { useState } from 'react';
import './App.css';
import './styles.css'
import viacep from './services/viacep';


function App() {
  const [input, setInput] = useState('');
  const [cep, setCep] = useState({});
async function search(){
  if(input === ""){
    alert('Digite algum CEP.')
      return;
  }

  try{
    const response = await viacep.get(`${input}/json`);
    setCep(response.data);
    setInput("");

  }catch{
    alert('Erro na busca. Verifice o CEP fornecido e tente novamente.');
    setInput("")
  }
}

  return (
    

    <div className='container'>
      <h1 className='title'>Buscar CEP</h1>

    <div className='containerInput'>
      <input type='text' 
      placeholder='Digite o CEP...'
      value={input}
      onChange={(e) => setInput(e.target.value)}  
      maxLength={8}></input>
    </div>

    <button className='busca' onClick={search}>
      Buscar
    </button>

    {Object.keys(cep).length > 0 && (
            <main className='main'>
            <h2> CEP: {cep.cep}</h2>
            <span>{cep.logradouro}</span>
            <span>Complemento: {cep.complemento}</span>
            <span>{cep.bairro}</span>
            <span>{cep.localidade}</span>
            <span>DDD da Cidade: {cep.ddd} </span>
          </main>
    )}

    </div>
  );
}

export default App;
