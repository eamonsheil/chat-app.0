import * as React from 'react';
import { Logout } from '../Logout';
import { ChatInfo, SidebarContainer } from './Styles/Sidebar.Styles';

export interface IRightSidebarProps {
}

export function RightSidebar (props: IRightSidebarProps) {

  return (
    <SidebarContainer>
      <Logout/>
      <ChatInfo>
        
      </ChatInfo>

    </SidebarContainer>
  );
}
