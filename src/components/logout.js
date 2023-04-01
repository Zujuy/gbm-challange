import { GoogleLogout } from 'react-google-login';

const clientId = "142779115631-1frq23u0od19nkrc5j5g3s8s8on7aco5.apps.googleusercontent.com";

function Logout() {

    const onSuccess = () => {
        return('Log out successfull!');
    };

    return(
        <div>
            <GoogleLogout 
                clientId={clientId}
                buttonText={"Logout"}
                onSuccess={onSuccess}
            />
        </div>
    )
};

export default Logout