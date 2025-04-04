import React, { useState } from "react";

export default function Task4() {
  const [grid, setGrid] = useState("");
  const data = [
    {id:1,  firstname: "Ariunbayar",Lastname:"Odbayar"},
    {id:2,  firstname: "Badraa",Lastname:"Tsogtbaatar"},
    {id:3,  firstname: "Bilguuntugs",Lastname:"Amarbat"},
    {id:4,  firstname: "Gan-Erdene",Lastname:"Undrakhtamir"},
    {id:5,  firstname: "Gunbilig",Lastname:"Bat-Enkh"},
    {id:6,  firstname: "Delgermurun",Lastname:"Ganbold"},
    {id:7,  firstname: "Jargal",Lastname:"Bayandalai"},
    {id:8,  firstname: "Munkhbaysgalan",Lastname:""},
    {id:9,  firstname: "Munkhnaran",Lastname:"Ulziibayar"},
    {id:10, firstname: "Nomindari",Lastname:"Enkhtur"},
    {id:11, firstname: "Siilen",Lastname:"Batsaikhan"},
    {id:12, firstname: "Tuvshin",Lastname:"Bulgan"},
    {id:13, firstname: "Temuuge",Lastname:"Teluun"},
    {id:14, firstname: "Temuulen",Lastname:"Temuujin"},
    {id:15, firstname: "Undrakh",Lastname:"Sukhbaatar"},
    {id:16, firstname: "Khangarid",Lastname:"Jargalsaikhan"},
    {id:17, firstname: "Chinbiligt",Lastname:"Dovchinbazar"},
    {id:18, firstname: "Erdenebold",Lastname:"Erdenetugs"},
    {id:19, firstname: "Erdenejargal",Lastname:"Batragchaa"},
];
 
  
  return(
    <div className="w-full h-screen bg-white px-80 ">
    <div className="flex justify-between mt-4 mx-8">
        <p className="text-2xl font-bold">Нийтлэлүүд</p>
        <button className="border-2 border-red-300 rounded-lg p-4 mb-4 text-2xl text-blue-500 font-bold" onClick={() => setGrid(!grid)}>{grid == false ? "Grid-руу шилжих" : "Жагсаалтруу шилжих"}</button>
    </div>
    
    <div className={(grid ==false ? "w-full text-black mt-4" : "w-full text-black grid grid-cols-2 gap-x-8 mt-4" )}>
        {data?.map((data, index) => (
            <div key={index}>
                <div className="border-2 border-black rounded-lg p-4 mb-4">
                    <p className="text-sm font-bold">{data.title}</p>
                    <p className="mt-4">{data.description}</p>
                </div>
            </div>
        ) )}
    </div>
</div>
  );
}