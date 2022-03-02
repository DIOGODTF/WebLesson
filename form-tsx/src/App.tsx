import {useState} from 'React';

const App = () => {
  const [nome, setNome] = useState('');
  const [sobreNome, setSobreNome] = useState('');
  const [idade, setIdade] = useState('');

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNome(event.target.value);
    //setSobreNome(event.target.value);
    //setIdade(event.target.value);
  }

  return (
    <div>
      <div>
        Nome:
        <input type="text"  value={nome} onChange={handleInput}/>
      </div>

      <div>
        Sobrenome:
        <input type="text" value={sobreNome} onChange={handleInput}/>
      </div>

      <div>
        Idade:
        <input type="text" value={idade} onChange={handleInput}/>
      </div>

      <hr/>

      Olá {nome} {sobreNome}, tudo bem?<br/>
      Você tem {idade} anos.
    </div>
  );
}

export default App;