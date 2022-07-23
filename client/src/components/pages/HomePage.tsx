import React, { useContext } from 'react';
import { Login } from '../Login';
import { Logout } from '../Logout';

export interface IHomePageProps {
}

export function HomePage (props: IHomePageProps) {



  return (
    <div>
      <Login/>
    </div>
  );
}
