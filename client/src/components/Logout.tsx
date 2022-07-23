import { getAuth, signOut } from 'firebase/auth';
import * as React from 'react';

export interface ILogoutProps {
}

export function Logout (props: ILogoutProps) {
    const auth = getAuth()

    const logout = () => {
        signOut(auth);
        console.log('logging out...')
    }


  return (
    <div>
      <button onClick={() => logout()}>Sign Out</button>
    </div>
  );
}
