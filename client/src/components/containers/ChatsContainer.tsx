import { useState } from 'react';
import { IMessage } from '../../Interfaces';


function ChatsContainer() {
    const [message, setMessage] = useState<string>("")
    const [username, setUsername] = useState<string>("")
    const [chatHistory, setChatHistory] = useState<IMessage[]>([])
    
        const handleSubmit = (e) => {
            e.preventDefault()
            const messageInfo:IMessage = {
                message: message,
                username: username
            }
            setChatHistory([...chatHistory, messageInfo])
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
                                <span><b>{message.user}: </b></span>
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