
import { Sidebar } from "../compunents/Sidebar.tsx";
import { usertype } from "../App.tsx";
import { Nav } from "../subcomponent/nav-top.tsx";
import { Menu } from "../subcomponent/Menu.tsx";
import { Overview } from "../subcomponent/Overview.tsx";

export function Profile(props: usertype) {
  return (
    <div className="max-w-[1024px] m-auto  mt-8 ">
      <Nav />
      <Menu />
      <div className="flex box-border w-[1024px]   ">
        <Sidebar username={props.username} />
        <Overview username={props.username} />
      </div>
    </div>
  );
}
