import { useState, useEffect } from 'react';
import { IMessage } from '../../Interfaces';
import io from 'socket.io-client';


function ChatsContainer() {
    const [message, setMessage] = useState<string>("")
    const [username, setUsername] = useState<string>("")
    const [chatHistory, setChatHistory] = useState<IMessage[]>([])


    const socket = io('http://localhost:4000');

    useEffect(() => {
        socket.on("recieve_message", (data) => {
            console.log("frontend: ",data)
            setChatHistory([...chatHistory, data])
        })
    },[socket])



    socket.on("connect", () => {
        // socket.id is a random 20 char identifier that is assigned to each connection
        // the identifier is synced with the value on the server-side
        // socket.connected is a boolean value indicating whether the socket is currently connected
        console.log(socket.id, "socket connected", socket.connected)
    })
    socket.on("disconnect", () =>{
        console.log(socket.id, "socket disconnected")
    })

    
        const handleSubmit = (e:any) => {
            e.preventDefault()
            
            const messageInfo:IMessage = {
                message: message,
                username: username
            }
            
            socket.emit("message", messageInfo);
        }
    
    
        return (        
            <div>  
                <div>
                    <input type="text" 
                        placeholder='choose a username'
                        value={username}
                        onChange={(e) =>setUsername(e.target.value)}/>        
                </div>
                
                <div>
                    {chatHistory.map((message) => {
                        return(
                            <div>
                                <span><b>{message.username}: </b></span>
                                <span>{message.message}</span>
                            </div>
                        )
                    })}
                </div>
                <form onSubmit={handleSubmit}>
                    <input type='text' 
                        placeholder='Your message here...' 
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}/>
                    <button type='submit'>Send</button>
                </form>
            </div>
         );
    }
    
    export default ChatsContainer;