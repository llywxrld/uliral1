import React, {useEffect, useState} from "react";

export default function Lily2(){
    const [color, setColor]  = useState("");
    const [data, setData]  = useState();


    useEffect(() => {
        const fetchData = async () =>{
            return await fetch("https://mongol-api-rest.vercel.app/clothes")
            .then((res) => {
                setData(res.json());
            })
            .then((json) => setData(json));
        };
        fetchData();
    }, []);
    console.log(data);


    return(                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
    <div className={`flex space-x-4 w-full h-screen bg-${color}-800`}>
        <p>ungu solih:</p>
        <button
        className=" w-24 h-24 border bg-red-800 py-4 px-6"
        onClick={() => {
            setColor("red");
        }}
        >
            Red
        </button>
        <button
        className="w-24 h-24 border bg-blue-800 py-4 px-5"
        onClick={() => {
        setColor("blue");
        }}>
            Blue
        </button>
        <button
        className="w-24 h-24 border bg-green-800 py-4 px-5"
        onClick={() => {
        setColor("green");
        }}>
            Green
        </button>
    </div>
    );
};
