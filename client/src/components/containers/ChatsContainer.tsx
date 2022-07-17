import { useState, useLayoutEffect, createRef, useRef } from 'react';
import { IMessage } from '../../Interfaces/Interfaces';
import io from "socket.io-client";
 
import { PageContainer,
        ChatContainer,
        SentMessage,
        RecievedMessage,
        SentContainer,
        RecievedContainer,
        MessageInput, 
        ChatSearch} from './Styles/Chats.Styles'

const socket = io('http://localhost:4000');

function ChatsContainer() {
    const [message, setMessage] = useState<string>("")
    const [messageThread, setMessageThread] = useState<IMessage[]>([]);
    const [username, setUsername] = useState<string>("")

    const dummyDiv = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        scrolltoBottom()
        console.log(dummyDiv.current)
    }, [messageThread]);
    

    const scrolltoBottom = () => {
        console.log('scrolling')
        dummyDiv.current?.scrollIntoView({ behavior:"smooth" })
    }
   
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
    
        const searchChatHistory = (e:any) => {
            e.preventDefault()
            console.log("searchin")
        }
    
        return (        
            <PageContainer>
                <ChatSearch onSubmit={searchChatHistory}>
                    <input type='text'/>
                    <button type='submit'>Search Chat</button>
                </ChatSearch>
                <ChatContainer>
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
                        <div ref={dummyDiv}/>
                </ChatContainer>
                <MessageInput onSubmit={handleSubmit}>
                    <input type='text' 
                        placeholder='Your message here...' 
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}/>
                    <button type='submit'>Send</button>
                </MessageInput>
            </PageContainer>
         );
    }
    
    export default ChatsContainer;