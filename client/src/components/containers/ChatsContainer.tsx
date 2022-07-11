import { useState, useEffect } from 'react';
import { IMessage } from '../../Interfaces';
import io from "socket.io-client";
import styled from 'styled-components';
const socket = io('http://localhost:4000')!;
 

const PageContainer = styled.div`
    width:80%;
    margin: 0 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: space-between; */
    height: 50vh;
`
const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    
`
const SentMessage = styled.div`
    height: 1em;
    width:7em;
    background-color: #00800036;
    border-radius: 5em;
    display: flex;
    align-items: center;
    justify-content: start;
    flex-wrap: wrap;
    /* margin: 1em 0; */
    padding: .3em;
    
`
const RecievedMessage = styled.div`
    height: 1em;
    width: 7em;
    background-color: #0000ff59;
    border-radius: 5em;
    display: flex;
    align-items: center;
    justify-content: start;
    flex-wrap: wrap;
    /* margin: 1em 0; */
    padding: .3em;
    
`




function ChatsContainer() {
    const [message, setMessage] = useState<string>("")
    // const [messageRecieved, setMessageRecieved] = useState<string>("");
    const [username, setUsername] = useState<string>("")
    const [sentMessages, setSentMessages] = useState<IMessage[]>([])
    const [recievedMessages, setRecievedMessages] = useState<IMessage[]>([])


    

    useEffect(() => {
        socket.on("recieve_message", (data) => {
            setRecievedMessages([...recievedMessages, data])
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
            const currentTime = new Date()
            const messageInfo:IMessage = {
                message: message, 
                username: username,
                time: currentTime.toLocaleTimeString('en-US')
            }
            setSentMessages([...sentMessages, messageInfo])
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
                <Container>
                <div>
                    <h4>Sent Messages</h4>
                    {sentMessages.map((message) => {
                        return(
                            <div>
                                <SentMessage>
                                    <span><b>{message.username}: </b></span>
                                    <span>{message.message}</span>
                                
                                </SentMessage>
                                <span>{message.time}</span>
                            </div>
                        )
                    })}
                </div>
                <div>
                    <h4>Recieved Messages</h4>
                    {recievedMessages.map((message) => {
                        return(
                            <div>
                                <RecievedMessage>
                                    <span><b>{message.username}: </b></span>
                                    <span>{message.message}</span>
                                </RecievedMessage>
                                <span>{message.time}</span>
                            </div>
                        )
                    })}
                </div>
                </Container>
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