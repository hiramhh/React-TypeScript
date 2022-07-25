import { ChangeEvent } from 'react';
import React from 'react';

function CreateUserPassword ({password, setPassword}:{
    password: string;
    setPassword: any;
}): JSX.Element {

    const onPasswordValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
        console.log(e.target.value)
    };

    return(
        <label htmlFor="Password"> Ingrese su contraseña
            <input 
            id='Password'
            type='password'
            placeholder='Password'
            value={password}
            onChange={onPasswordValueChange}
            />
        </label>
        );
    }
    
    export {CreateUserPassword};