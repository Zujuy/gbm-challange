import { GoogleLogin } from 'react-google-login';
import {ButtonStyles, Title, GoogleButonStyles} from '../styles/LoginStyles';

const client_Id = "619197449057-db5nnko9qdeb8v0b54u7muv6mppasb8j.apps.googleusercontent.com";

function Login({handleLogin}) {

    const onSuccess = (res) => {
        console.log('Login Success!, current user: ', res.profileObj);
        handleLogin(true)
    };

    const onFailure = (res) => {
        return(('Login failed! :( res:', res),
            handleLogin(false)
    )}

    return(
        <ButtonStyles>
            <Title>
                Please log in with you google email to see the chart
            </Title> 
            <GoogleButonStyles>  
            <GoogleLogin 
                clientId={client_Id}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
            </GoogleButonStyles> 
        </ButtonStyles>
    )
};

export default Login