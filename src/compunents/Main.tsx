import { Profile } from "../pages/Profile.tsx";

import { RepoTab } from "../pages/RepoTab.tsx";

import { RepositoryPage } from "../pages/Repository.tsx";

import { Route, Routes, useParams } from "react-router-dom";

import { usertype } from "../App.tsx";



/* const params = useParams() */
export function Main(props:usertype) {
  

    return (
        <div className="max-w-[1024px] m-auto  mt-8 ">
          <Routes>
          <Route index path="/" element={ <Profile username={props.username}/>}/>
            <Route path="/Overview" element={ <Profile username={props.username}/>}/>
            <Route path="/repoTab" element={ <RepoTab username={props.username}/>}/>
            <Route path="/Repository" element={ <RepositoryPage username={props.username}/>}/>
          </Routes>
          
    
        </div>
    )
}