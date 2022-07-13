import { useState, useEffect, useRef } from 'react';
import { IMessage } from '../../Interfaces';
import io from "socket.io-client";
 
import { PageContainer,
        ChatContainer,
        SentMessage,
        RecievedMessage,
        SentContainer,
        RecievedContainer } from './Styles/Chats.Styles'

const socket = io('http://localhost:4000');

function ChatsContainer() {
    const [message, setMessage] = useState<string>("")
    const [messageThread, setMessageThread] = useState<IMessage[]>([]);
    const [username, setUsername] = useState<string>("")

    // const messagesRef = useRef<HTMLDivElement>(null);

    // useEffect(() => scrolltoBottom, [messageThread]);
    

    // const scrolltoBottom = () => {
    //     messagesRef?.current?.scrollIntoView({behavior:'smooth'})
    // }
   
        socket.on("recieve_message", (data) => {
            console.log(data)
            // setRecievedMessages([...recievedMessages, data])
            setMessageThread([...messageThread, data])
            
        })


    socket.on("connect", () => {
        console.log(socket.id, "socket connected: ", socket.connected)
    })
    socket.on("disconnect", () =>{
        console.log(socket.id, "socket disconnected")
    })

    
        const handleSubmit = (e:any) => {
            e.preventDefault()
            const currentTime = new Date()
            const messageInfo:IMessage = {
                message: message, 
                username: username,
                time: currentTime.toLocaleTimeString('en-US'),
                sent: true
            }
            // setSentMessages([...sentMessages, messageInfo])
            setMessageThread([...messageThread, messageInfo])
            socket.emit("message", messageInfo);
        }
    
    
        return (        
            <PageContainer>  
                <div>
                    <input type="text" 
                        placeholder='choose a username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}/>        
                </div>
                <ChatContainer >
                        {messageThread.map((message) => {
                            if(message.sent){
                                return(
                                    <SentContainer>
                                        <SentMessage>
                                            <span><b>{message.username}: </b></span>
                                            <span>{message.message}</span>
                                        
                                        </SentMessage>
                                        <span>{message.time}</span>
                                    </SentContainer>
                                )
                            } else {
                                return(
                                    <RecievedContainer>
                                        <RecievedMessage>
                                            <span><b>{message.username}: </b></span>
                                            <span>{message.message}</span>
                                        </RecievedMessage>
                                        <span>{message.time}</span>
                                    </RecievedContainer>
                                )
                            }
                        })}
                </ChatContainer>
                <form onSubmit={handleSubmit}>
                    <input type='text' 
                        placeholder='Your message here...' 
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}/>
                    <button type='submit'>Send</button>
                </form>
            </PageContainer>
         );
    }
    
    export default ChatsContainer;