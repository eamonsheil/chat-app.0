const {io} = require('socket.io-client')

function App() {
  const socket= io()
  return (
    <div className="App">
      Hello
    </div>
  );
}

export default App;
