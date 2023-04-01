import { GoogleLogin } from 'react-google-login';

const client_Id = "619197449057-db5nnko9qdeb8v0b54u7muv6mppasb8j.apps.googleusercontent.com";

function Login({handleLogin}) {

    const onSuccess = (res) => {
        console.log('Login Success!, current user: ', res.profileObj);
        handleLogin(true)
    };

    const onFailure = (res) => {
        return(
            // <div>
            //     <h1>'Login failed! :( res:', res)</h1>
            // </div>
            console.log('Login failed! :( res:', res),
            handleLogin(false)
    )}

    return(
        <div>
            <GoogleLogin 
                clientId={client_Id}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </div>
    )
};

export default Login