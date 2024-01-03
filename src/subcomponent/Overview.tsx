

import GitHubCalendar from "react-github-calendar";

import { useProfile } from "../hooks/useprofile";

export function Overview() {
  const { loadingOver, Getuser, repositState } = useProfile({});

  if (loadingOver) {
    return <div className="w-[750px] bg-white  text-xs ">LOADING OVERVIEW</div>;
  }
  return (
    <div className="w-[750px] bg-white  text-xs ">
      <p>Popular repositories</p>
      <div className="flex flex-wrap  ">
        {repositState.map((item, index) => {
          if (index < 6) {
            return (
              <div className="border-2 solid w-[21rem]  h-[6rem] rounded-md mr-[2rem] mb-[2rem] px-2.5 py-2.5">
                <div className="flex justify-between">
                  <a className="text-blue-400">{item.name}</a>
                  <button className="border-2 solid w-[3.4rem] h-[1.2rem] rounded-xl ">
                    {item.visibility}
                  </button>
                </div>
                &nbsp;&nbsp;
                <div className="text-xl">
                  {item.fork ? "forked from" + item.forks_url : ""}
                </div>
                &nbsp;&nbsp;
                <span>{item.description} </span>
                &nbsp;&nbsp;
                <div>
                  {item.language ? (
                    <div className="flex  ">
                      <span className=" solid w-[1rem] h-[1rem] bg-[#f1e05a] rounded-full inline-block"></span>
                      {item.language}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            );
          }
        })}
      </div>
      {Getuser ? <GitHubCalendar username={Getuser.login} /> : null}
    </div>
  );
}
