import { User, getUser} from "../api/users.ts";
import { getRepos, Repositoryes } from "../api/reposotires.ts";
import { useEffect, useState } from "react";

const username = "shahramardalan";
export function useProfile({}) {
  const [Getuser, setGetuser] = useState<User>();
  const [loading, setloading] = useState(true);
  const [repositState, setrepositState] = useState<Array<Repositoryes>>([]);
  const [loadingREPO, setloadingREPO] = useState(true);
  const [loadingOver, setloadingOver] = useState(true);
  const [filter, setfilter] = useState<string>("");
  useEffect(() => {
    getRepos(username)
      .then(function (data) {
        setrepositState(data);
      })
      .finally(() => {
        setloadingOver(false);
      });
  }, []);
  useEffect(() => {
    getUser(username)
      .then(function (data) {
        setGetuser(data);
      })
      .finally(() => {
        setloadingOver(false);
      });
  }, []);
  useEffect(() => {
    getUser(username)
      .then(function (data) {
        setGetuser(data);
      })
      .finally(() => {
        setloading(false);
      });
  }, []);
  useEffect(() => {
    getRepos(username)
      .then(function (data) {
        setrepositState(data);
        /* console.log("contributions is :", repositState) */
      })
      .finally(() => {
        setloadingREPO(false);
      });
  }, []);
  

  return {
    Getuser: Getuser,
    loading: loading,
    repositState: applyFilter(repositState , filter),
    loadingREPO: loadingREPO,
    filter: filter,
    setfilter: setfilter,
    loadingOver: loadingOver,
  };
}

function applyFilter(list:Array<Repositoryes> , filter:string){
return list.filter((elmn)=>{
  if(filter === "Forks"){
  return elmn.fork === true;
  }
  else if (filter === "Archived") {
    return elmn.archived === true;
  }
  return true
})
}