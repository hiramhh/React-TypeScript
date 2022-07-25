import React, {useEffect} from 'react';
import {CreateLoggin} from './CreateLogin';
import {CreateUserLoggin} from './CreateUserLoggin';
import {CreateUserPassword} from './CreateUserPassword';
import {CreateLogginButton} from './CreateLogginButton';
// import './App.css';


function App() {
  const [user, setUser] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [validate, setValidate] = React.useState <boolean> (false);


const submit = (event: any) => {
  event.preventDefault();

  if (validate === true) {
    return true;
  } else {

    let mensaje = "El campo";
    if( "" === user ){ mensaje += " Usuario" }
    if( "" === password ){ mensaje += ", password" }
    mensaje += " no puede estar vacio"; 
    
    alert(mensaje);
    return false;
  }
}


  useEffect(() => {
    if("" !== user && "" !== password){
      setValidate(true);
      console.log("LLeno");
    } else {
      setValidate(false);
      console.log("Vacio");
    }

  }, [user,password]);


  return (
    <form
    onSubmit={submit}>

      <CreateLoggin/>

      <CreateUserLoggin
        user = {user}
        setUser = {setUser}
      />

      <CreateUserPassword
        password = {password}
        setPassword = {setPassword}
      />
      <CreateLogginButton/>
       
    
    </form>
  );
}

export default App;