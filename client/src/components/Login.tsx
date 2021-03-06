import React, { useState, useContext } from 'react';
import { getAuth, GoogleAuthProvider, signInWithRedirect, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './context/UserContextProvider';

export interface ILoginProps {
}

export function Login (props: ILoginProps) {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const navigate = useNavigate();
    const [authing, setAuthing] = useState(false);

    const {user, setUser} = useContext(UserContext)

    provider.addScope('profile')
    provider.addScope('email')
 
    const googleSignIn = async () => {
        setAuthing(true)
        signInWithPopup(auth, provider)
            .then((res) => {
                console.log(res.user);
                setUser({name: res.user.displayName, email: res.user.email})
                navigate('/chat');
            })
            .catch(err => {
                console.log(err)
                setAuthing(false)
            }) 



        // try {
        //     const result = await signInWithPopup(auth, provider)
        //     if (result){
        //         const user = result.user;
        //         const credential = GoogleAuthProvider.credentialFromResult(result)
        //         const token = credential?.accessToken
        //         console.log("user: ", user)
        //         console.log("token: ", token)
        //         navigate('/chat')
        //     }

        // } catch (err) {
        //     console.log(err)
        // }
    }
  return (
    <div>
      <button onClick={() => googleSignIn()} disabled={authing}>Sign In with Google</button>
    </div>
  );
}
