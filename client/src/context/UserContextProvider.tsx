import { createContext, FC, ReactNode, useState } from 'react';


export interface Props {
  children:ReactNode;
}

export interface IUser {
  name: string;
  email: string;
}

export type UserContextType = {
  user?: IUser;
  setUser: (newSession: IUser) => void
}

export const UserContext = createContext<UserContextType | undefined>(undefined);

const UserContextProvider:FC<Props> = (props) => {  
    const [user, setUser] = useState<IUser>();
  
  
    return (
        <UserContext.Provider value={{user, setUser}}>
          {props.children}
        </UserContext.Provider>
  );
}

export default UserContextProvider;