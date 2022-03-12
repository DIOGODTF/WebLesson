import { ChangeEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../contexts/Auth/AuthContext";

export const Login = () => {
    const auth = useContext( AuthContext );     
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleLogin = async () => {
        if(email && password) {
            const isLoged = await auth.signin( email, password );
            if (isLoged) {
                navigate('/');
            } else {
                alert(' Login não autorizado !!! ')
            }
        }
    }
    
    //outra forma de fazer
    const handlePasswordInput = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword( e.target.value );
    }

    return(
       <div>
           <h2> Página Login </h2>
           <input type="text"  value={email} onChange={e=>setEmail(e.target.value)} placeholder="digite o e-mail"/>

           <input type="password" value={password} onChange={ handlePasswordInput } placeholder="digite sua senha" />
           <button onClick={handleLogin}>Logar</button>
       </div>

       
    );
}