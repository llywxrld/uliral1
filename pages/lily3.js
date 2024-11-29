import React, {useState} from "react";

export default function Lily3(){
    const [search, setSearch]  = useState("");

    console.log("search utag --->", search);

    return(
        <div className="bg-pink-300 space-x-96 text-black flex justify-center items-center h-screen">
    <div className="flex items-center justify-center h-screen flex-col">
        <input
        type="search"
        onChange={(test) => setSearch(test.target.value)}
        className="border-2 border-black rounded"
        />
        <p>search: {search}</p>
    </div>
    </div>
    );
};