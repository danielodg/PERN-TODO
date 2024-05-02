import React,{ Fragment} from "react";
import { useLocation } from "react-router-dom";
import './App.css';
//components
import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodo";
function App() {
  const location = useLocation();
  const tipo = location.state ? location.state.tipo : null;
  return  <Fragment>
           <div className="container">
              <InputTodo tipo={tipo} />
              <ListTodos />
           </div>
         </Fragment>;

}

export default App;

