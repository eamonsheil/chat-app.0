import React, { useContext } from 'react';
import ChatsContainer from '../containers/ChatsContainer';
import { ChatSidebar } from '../containers/LeftSidebar';
import { RightSidebar } from '../containers/RightSidebar';

export interface IChatPageProps {
}

export function ChatPage (props: IChatPageProps) {



  return (
    <div style={{display:"flex"}}>
      <ChatSidebar/>
      <ChatsContainer/>
      <RightSidebar/>
    </div>
  );
}
