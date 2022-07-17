import styled from 'styled-components';


// Left/Right Sidebar
export const SidebarContainer = styled.div`
    display:flex;
    flex-direction: column;
    /* align-items: ; */
    height: 90vh;
    width: 20%;
    min-width: 15em;
    border: 1px solid green;
    /* background-color: yellow; */
    margin: 0;
    overflow: scroll;
`

export const ChatLink = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    /* align-items: center; */
    min-height: 2em;
    margin: .5em; 
    background-color: green;
    border-radius: .5em;
    /* z-index:9134; */

    &:hover {
        box-shadow: -10px 5px 5px red;
    }
`

export const ChatInfo = styled.div`
    height: 15em;
    border: 2px solid red;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`