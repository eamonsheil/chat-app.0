import * as React from 'react';
import { ChatLink, SidebarContainer } from './Styles/Sidebar.Styles';
import CreateIcon from '@mui/icons-material/Create';

export interface IChatSidebarProps {
}

export function ChatSidebar (props: IChatSidebarProps) {
  return (
    <SidebarContainer>
        <h3>Channels</h3>
        <ChatLink>
            
        </ChatLink>
        <ChatLink>
            

        </ChatLink>
        <h3>Chats</h3>
        <ChatLink>

        </ChatLink>
        <ChatLink>

        </ChatLink>
        <ChatLink>

        </ChatLink>
        <ChatLink>

        </ChatLink>
        <ChatLink>

        </ChatLink>
        <ChatLink>

        </ChatLink>
    </SidebarContainer>
  );
}
