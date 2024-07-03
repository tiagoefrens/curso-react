import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {

  const nome = 'Maria'
  
   return (
    
    <div className="App">
    
      <HelloWorld/>
      <SayMyName nome = "Tiago"/>
      <SayMyName nome = "João"/>
      <SayMyName nome = {nome}/>
      <Pessoa
        nome = "Tiago"
        idade = "28"
        profissao = "Programador"
        foto = "https://via.placeholder.com/150"
      />


    </div>
  )
}

export default App;
