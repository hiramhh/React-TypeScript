import {ChangeEvent} from 'react';

function CreateUserLoggin({user, setUser}: {
    user: string;
    setUser: any;
}): JSX.Element {

    const onEmailValueChange = (e: ChangeEvent<HTMLInputElement>)=> {
        setUser(e.target.value)
        console.log(e.target.value)
    };
    return(
        <label htmlFor="User">
            Ingrese su E-mail
            <input
            id='User'
            type='email'
            placeholder='E-mail'
            value={user}
            onChange={onEmailValueChange}
            />
        </label>
    );
}

export {CreateUserLoggin};