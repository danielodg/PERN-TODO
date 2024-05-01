import React,{ Fragment, useState} from "react";

//chikos, no se pq  no me funcionaba la base de datos creo que es problema de mi compu anyways hice un poco de logica basado
// en lo que investigue y unos videos random, dejo notas de todo lo que agregue, mañana no se si estre en mi casa so dejo este aporte y 
// voy a estar pendiente cualquier cosa :)

import './App.css';
//components
import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodo";
//Axios es una libreria de react para manejar el llamado de datos o algo asi se supone que es buena se tiene que instalar con npm i axios
import axios from 'axios';

function App() {

  //mantener estos valores predeterminados hasta que ocurran cambios :)
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [errorMessage, setErrorMessage] = useState('');
const [authenticated, setAuthenticated] = useState(false);

//el async ese si no se es syntaxis creo
const handleLogin = async (e) => {
  //que no haga nada si no hay cambios
  e.preventDefault();
  try {
    const response = await fetch('http://localhost:5000/login', { method: 'POST', headers: { 'Content-Type': 'application/json', }, body: JSON.stringify({ username, password }), });
    if (response.ok) {
      setAuthenticated(true);
    } else {
      setErrorMessage('Nombre de usuario o contraseña incorrectos');
    }
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    setErrorMessage('Error al iniciar sesión');
  }
};
  
  //ya me dio hueva, en fin despues creo que solo hay que hacer un if de si hace bien el login que entre y el front end de como seria el login
  return  <Fragment>
           <div className="container">
              <InputTodo />
              <ListTodos />
           </div>
         </Fragment>;
  
}

export default App;
