// import io from 'socket.io-client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ChatsContainer from './components/containers/ChatsContainer';
import { HomeContainer } from './components/containers/HomeContainer';
import { Navbar } from './components/Navbar/Navbar';
import { initializeApp } from 'firebase/app'
import { config } from './config/config'
import { AuthRoute } from './components/AuthRoute';
import { UserContext } from './context/UserContextProvider';
import userEvent from '@testing-library/user-event';
import { GlobalStyle } from './components/containers/Styles/GlobalStyles';


initializeApp(config.firebaseConfig);


function App() {
  // const [user, setUser] = useState<IUser>();
  // create new Manager (manages Engine.io client instance -> the low level engine that establishes the servre connection) 
  // for localhost:4000, and attempts to reuse it for subsequent calls
  // const socket = io('http://localhost:4000');

  // socket.on("connect", () => {
    // socket.id is a random 20 char identifier that is assigned to each connection
    // the identifier is synced with the value on the server-side
    // socket.connected is a boolean value indicating whether the socket is currently connected
  //   console.log(socket.id, "socket connected", socket.connected)
  // })
  // socket.on("disconnect", () =>{
  //   console.log(socket.id, "socket disconnected")
  // })

  return (
    <div className="App">
      <GlobalStyle/>
      {/* <UserContext.Provider value={{user, setUser}}> */}
        <Navbar/>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={ <HomeContainer/>} />
            <Route 
                path='/chat' 
                element={ 
                  <AuthRoute>
                    <ChatsContainer/>
                  </AuthRoute>} />
          </Routes>
        </BrowserRouter>
      {/* </UserContext.Provider> */}
    </div>
  );
}

export default App;
