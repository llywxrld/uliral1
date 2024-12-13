import React, { useState } from "react";

export default function Lily4() {
    const [grid, setGrid] = useState(false);
const data = [
    {
        id: 1,
        title: "Test 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis nulla eu eros vestibulum tristique. Duis et quam et dolor condimentum."
    },
    {
        id: 2,
        title: "Test 2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis nulla eu eros vestibulum tristique. Duis et quam et dolor condimentum."
    },
    {
        id: 3,
        title: "Test 3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis nulla eu eros vestibulum tristique. Duis et quam et dolor condimentum."
    },
    {
        id: 4,
        title: "Test 4",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis nulla eu eros vestibulum tristique. Duis et quam et dolor condimentum."
    },
    {
        id: 5,
        title: "Test 5",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis nulla eu eros vestibulum tristique. Duis et quam et dolor condimentum."
    },
    {
        id: 6,
        title: "Test 6",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis nulla eu eros vestibulum tristique. Duis et quam et dolor condimentum."
    },
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
    )
} 