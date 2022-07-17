import { createContext, FC, ReactNode, useState } from 'react';


export interface Props {
  children:ReactNode;
}

type IUser = {
  name: string | null;
  email: string | null;
}

type UserContextType = {
  user: IUser | null,
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>
}

const IUserContextState = {
  user: null,
  setUser: () => {}
}

export const UserContext = createContext<UserContextType>(IUserContextState);

export const UserContextProvider:FC<Props> = (props) => {  
    const [user, setUser] = useState<IUser | null>(null);
  
  
    return (
        <UserContext.Provider value={{user, setUser}}>
          {props.children}
        </UserContext.Provider>
  );
}