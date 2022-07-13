import styled from 'styled-components';


export const PageContainer = styled.div`
    width:80%;
    margin: 0 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: space-between; */
    height: 50vh;
`
export const ChatContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height:60vh;
    overflow: scroll;
    /* margin: 5em 0;     */
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
    max-width:8em;
    min-width: 1.5em;
    background-color: #0000ff90;
    border-radius: .4em;
    display: flex;
    align-items: center;
    justify-content: start;
    flex-wrap: wrap;
    /* margin: 1em 0; */
    padding: .3em;

    @media screen {
        
    }
    
`
export const RecievedMessage = styled.div`
    min-height: 1em;
    max-width: 8em;
    background-color: #0000ff59;
    border-radius: .4em;
    display: flex;
    align-items: center;
    justify-content: start;
    flex-wrap: wrap;
    /* margin: 1em 0; */
    padding: .3em;
    
`