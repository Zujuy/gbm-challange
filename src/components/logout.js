import { GoogleLogout } from 'react-google-login';
import {ButtonStyles, GoogleButonStyles } from '../styles/LogoutStyles';

const client_Id = "619197449057-db5nnko9qdeb8v0b54u7muv6mppasb8j.apps.googleusercontent.com";

function Logout({handleLogin}) {

    const onLogoutSuccess = () => {
        return(
            ('Login out ok!'),
            handleLogin(false)
        )
    };

    return(
        <ButtonStyles>
            <GoogleButonStyles>
            <GoogleLogout 
                clientId={client_Id}
                buttonText="Logout"
                onLogoutSuccess={onLogoutSuccess}
            />
            </GoogleButonStyles>
        </ButtonStyles>
    )
};

export default Logout