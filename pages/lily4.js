import React, {useState} from "react";

const data = [
    {
        id: 1,
        title: "test 1"
    }
]

export default function Lily4(){
    const [grid, setGrid]  = useState(false);
    return(
        <div className="font-bold text-xl">
            <div className="flex justify-between mx-80">
                <p>Нийтлэлүүд</p>
                <button onClick={() => setGrid(!grid)} 
                className=" h-12 w-48  bg-blue-500 rounded-md text-sm font-normal ">{grid == true ? "Жагсаалт харах руу шилжэх" : "Grid-руу шилжэх"}</button>
            </div>
            <div>

            </div>
        </div>
    )    
}                                 