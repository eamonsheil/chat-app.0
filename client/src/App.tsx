// import io from 'socket.io-client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ChatsContainer from './components/containers/ChatsContainer';
import { HomePage } from './components/pages/HomePage';
import { Navbar } from './components/Navbar/Navbar';
import { initializeApp } from 'firebase/app'
import { config } from './config/config'
import { AuthRoute } from './components/AuthRoute';
import { UserContext, UserContextProvider } from './components/context/UserContextProvider';
import userEvent from '@testing-library/user-event';
import { GlobalStyle } from './components/containers/Styles/GlobalStyles';
import { useContext } from 'react';
import { ChatPage } from './components/pages/ChatPage';


initializeApp(config.firebaseConfig);


function App() {

  const {user, setUser} = useContext(UserContext)

  return (
    <div className="App">
      <GlobalStyle/>
      <UserContext.Provider value={{user, setUser}}>
        <Navbar/>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={ <HomePage/>} />
            <Route 
                path='/chat' 
                element={ 
                  <AuthRoute>
                    <ChatPage/>
                  </AuthRoute>} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
