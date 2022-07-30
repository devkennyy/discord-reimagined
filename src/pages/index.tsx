import * as React from 'react';

import Chat from "@/components/Chat";
import MemberList from "@/components/MemberList";
import Seo from "@/components/Seo";
import ServerList from "@/components/ServerList";
import ServerNavbar from "@/components/ServerNavbar";
import Sidebar from "@/components/Sidebar";


export default function HomePage() {
  return (
      <>
      <Seo />
      <ServerList />
      <ServerNavbar />
      <Sidebar />
      <Chat />
      <MemberList />
      </>
  );
}
