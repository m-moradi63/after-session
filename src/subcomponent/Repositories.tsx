

import { RenderCateg } from "./renderCateg.tsx";


import { useProfile } from "../hooks/useprofile.ts";

export function Reposit() {
  const { repositState, loadingREPO, filter, setfilter } = useProfile({});
 console.log(repositState, filter)
  if (loadingREPO) {
    return (
      <div className="w-[750px] bg-white  text-xs ">LOADING REPOSITORIES</div>
    );
  }
  return (
    <div className="w-[750px]   text-xs  ">
      <div className="flex justify-between w-[45rem] border-b mb-[1rem] h-[3rem]">
        <input
          className="border-2 border-solid w-[30rem] rounded-lg h-[2rem]"
          placeholder="Find a repository..."
        ></input>
        <select
          onChange={(e) => {
            setfilter(e.target.value);
          }}
          className="border-2 border-solid  rounded-lg h-[2rem] bg-[#fff]"
          id="type"
        >
          <option className="border-b" hidden>
            Type
          </option>
          <option className="" disabled value="">
            Select Type
          </option>
          <option
            className="border-2 border-solid"
            value="All"
            selected={filter == "All" ? true : false}
          >
            All
          </option>
          <option className="border-b" value="Sources">
            Sources
          </option>
          <option className="border-b" value="Forks">
            Forks
          </option>
          <option className="border-b" value="Archived">
            Archived
          </option>
          <option
            className="border-b"
            value="Can be sponsored"
            selected={filter == "Can be sponsored" ? true : false}
          >
            Can be sponsored
          </option>
          <option
            className="border-b"
            value="Mirrors"
            selected={filter == "Mirrors" ? true : false}
          >
            Mirrors
          </option>
          <option
            className="border-b"
            value="Templates"
            selected={filter == "Templates" ? true : false}
          >
            Templates
          </option>
        </select>

        {
          <button className="flex h-[2rem] items-center p-1  w-18 border-solid border-2 border-slate-300 border-indigo-600 ... rounded-lg">
            <span>Language</span>
            <svg
              aria-hidden="true"
              height="16"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              data-view-component="true"
              className="inline-block octicon octicon-triangle-down"
            >
              <path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path>
            </svg>
          </button>
        }
        <button className="flex h-[2rem] items-center p-1  w-14 border-solid border-2 border-slate-300 border-indigo-600 ... rounded-lg">
          <span>Sort</span>
          <svg
            aria-hidden="true"
            height="16"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            data-view-component="true"
            className="inline-block octicon octicon-triangle-down"
          >
            <path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path>
          </svg>
        </button>
      </div>

      <RenderCateg reposit={repositState} />
    </div>
  );
}
