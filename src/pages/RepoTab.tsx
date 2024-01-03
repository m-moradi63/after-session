
import { Sidebar } from "../compunents/Sidebar.tsx";
import { RepoTabs } from "../subcomponent/repoTab.tsx";
import { usertype } from "../App.tsx";

import { Menu } from "../subcomponent/Menu.tsx";

import { Reposit } from "../subcomponent/Repositories.tsx";
import { Nav } from "../subcomponent/nav-top.tsx";

export function RepoTab(props: usertype) {
  return (
    <div className="max-w-[1024px] m-auto  mt-8 ">
      <Nav />
      <Menu />
       <div className="flex box-border w-[1024px]">
        <RepoTabs username={props.username} />
        
        
        </div>
    </div>
  );
}
