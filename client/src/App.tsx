import { io } from 'socket.io-client';
import Emitter from 'component-emitter';

function App() {
  // create new Manager (manages Engine.io client instance -> the low level engine that establishes the servre connection) 
  // for localhost:4000, and attempts to reuse it for subsequent calls
  const socket= io('http://localhost:4000');

  socket.on("connect", () => {
    // socket.id is a random 20 char identifier that is assigned to each connection
    // the identifier is synced with the value on the server-side
    // socket.connected is a boolean value indicating whether the socket is currently connected
    console.log(socket.id, "socket connected", socket.connected)
  })
  socket.on("disconnect", () =>{
    console.log(socket.id, "socket disconnected")
  })

  return (
    <div className="App">
      Hello
    </div>
  );
}

export default App;
