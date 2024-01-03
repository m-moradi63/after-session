import { Profile } from "./pages/Profile.tsx";
import { Nav } from "./subcomponent/nav-top.tsx";
import { Reposit } from "./subcomponent/Repositories.tsx";

import { Main } from "./compunents/Main.tsx";


export const username = "shahramardalan"
export interface usertype {
  username :string
}

export function App(username:usertype) {
  return (
    <div>
      <Main username={username}/>
     </div>
  );
}
