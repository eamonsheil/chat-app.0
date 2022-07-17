import styled from 'styled-components';


export const PageContainer = styled.div`
    width:60%;
    /* margin: 0 20%; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 90vh;
    border:1px solid red;

`
export const ChatContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    /* justify-content: flex-end; */
    /* flex-flow: column nowrap; */
    height:80%;
    overflow: auto;
    border:1px solid black;
    /* margin: 5em 0;     */

    &:nth-child(1) {
        margin-top: auto;
    }
`

export const SentContainer = styled.div`
    display:flex;
    flex-direction: column;
    /* background-color: red; */
    width: 100%;
    align-items: flex-end;
`
export const RecievedContainer = styled.div`
    display:flex;
    flex-direction: column;
    /* background-color: yellow;  */
    width: 100%;
    align-items: flex-start;
`

export const SentMessage = styled.div`
    min-height: 1em;
    max-width:60%;
    min-width: 1.5em;
    background-color: #0000ff90;
    border-radius: .4em;
    display: flex;
    align-items: center;
    justify-content: start;
    flex-wrap: wrap;
    /* margin: 1em 0; */
    padding: .3em;

    
`
export const RecievedMessage = styled.div`
    min-height: 1em;
    max-width: 60%;
    background-color: #0000ff59;
    border-radius: .4em;
    display: flex;
    align-items: center;
    justify-content: start;
    flex-wrap: wrap;
    /* margin: 1em 0; */
    padding: .3em;
    
`

export const MessageInput = styled.form`
    height:15%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ChatSearch = styled.form`
    height:5%;
    display: flex;
    justify-content: center;
    align-items: center;
`