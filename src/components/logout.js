import { GoogleLogout } from 'react-google-login';

const client_Id = "619197449057-db5nnko9qdeb8v0b54u7muv6mppasb8j.apps.googleusercontent.com";

function Logout({handleLogin}) {

    const onLogoutSuccess = () => {
        return(
            // <div>
            //     <h1>'Log out successfull!'</h1>
            // </div>
            // );
            console.log('Login out ok!'),
            handleLogin(false)
        )
    };

    return(
        <div>
            <GoogleLogout 
                clientId={client_Id}
                buttonText="Logout"
                onLogoutSuccess={onLogoutSuccess}
            />
        </div>
    )
};

export default Logout