import React, {useState, useEffect} from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export interface IAuthRouteProps {
    children: React.ReactNode
}

export function AuthRoute (props: IAuthRouteProps) {
    const { children } = props;
    const auth = getAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      const AuthCheck = onAuthStateChanged(auth, (user) => {
        if (user) {
            setLoading(false);
        } else {
            console.log('unauthorized');
            navigate('/');
        }
    });

    return () => AuthCheck();
    },[auth])

  if (loading) return <p>loading... </p>
        
  return (
    <>
      {children}
    </>
  );
}
