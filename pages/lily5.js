import React, { useState } from "react";

export default function Task4() {
  const [search, setSearch] = useState("");
  console.log("search utga -->", search);
  return (
    <div className="bg-white">
      <div
        className="flex items-center justify-center 
              h-screen flex-col        "
      >
        <div className=" border border-black w-[400px] h-[500px]">
          <div className="flex justify-center items-center mt-2 flex-col ">
            <img className="w-24 h-24" src="https://static.vecteezy.com/system/resources/previews/018/930/468/original/pinterest-logo-pinterest-transparent-free-png.png"/>
            <div>
              <p className="text-3xl mb-20">Log in to see more</p>
            </div>
            <div className="flex ">
              <input
                type="search"
                onChange={(test) => setSearch(test.value)}
                placeholder="Email"
                className="p-2 pr-24 bg-white border-2 border-black rounded-lg   focus:outlinenone focus:ring-2  focus:ring-blue-1   00"
              ></input>
            </div>
            <div>
              <input
                type="search"
                onChange={(test) => setSearch(test.value)}
                placeholder="Password"
                className=" mt-4 p-2 pr-24  bg-white border-2 border-gray-800 rounded-lg  focus:outlinenone focus:ring-2  focus:ring-blue-1   00"
              ></input>
            </div>
            <div className="bg-blue-600 h-8 w-[310px] rounded-xl mt-4  ">
              <h1 className=" flex items-center justify-center mt-1 ">
                Log in
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
