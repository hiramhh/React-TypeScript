import React from 'react';
// import './App.css';
import {CreateInputCorreo} from "./CreateInputCorreo"
import {CreateInputPassword} from "./CreateInputPassword";
import {CreateSubmitButton} from "./CreateSubmitButton";

function App() {
  return (
    <React.Fragment>
    <CreateInputCorreo />
    <br/>
    <br/>
    <CreateInputPassword/>

    <CreateSubmitButton/>
  </React.Fragment>
  );
}

export default App;
