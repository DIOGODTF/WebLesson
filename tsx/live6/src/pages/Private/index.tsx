import { useContext } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";

export const Private = () => {
    const auth = useContext( AuthContext)
    return(
        <div>
            Pagina Private

            Olá {auth.user?.name}, você está logado.
        </div>
    );
}