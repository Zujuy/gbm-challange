import { GoogleLogin } from 'react-google-login';

const clientId = "142779115631-1frq23u0od19nkrc5j5g3s8s8on7aco5.apps.googleusercontent.com";

function Login() {

    const onSuccess = (res) => {
        return('Login Success!, current user: ', res.profileObj);
    };

    const onFailure = (res) => {
        return('Login failed! :( res:', res)
    }

    return(
        <div>
            <GoogleLogin 
                clientId={clientId}
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