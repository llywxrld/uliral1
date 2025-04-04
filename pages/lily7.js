import React, { useState } from "react";

export default function task4() {
  const [search, setSearch] = useState("");
  console.log("search utga -->", search);
  return (
    <div className="w-full h-screen bg-gray-200 pt-20">
        <div className="w-full h-20 bg-blue-600 flex items-center justify-center text-white text-2xl font-bold">Nest high school</div>
        <div className="mt-8 text-4xl font-bold flex items-center justify-center">Welcome to Nest school</div>
        <div className="mt-8 text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been<br></br> the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</div>
        <div className="flex items-center justify-center pt-4">
        <button className="w-20 h-8 bg-blue-600 rounded-md text-white font-bold text-xs">Click Me</button>
        </div>
        <div className="mt-6 flex items-center justify-center space-x-4">
        <div className="drop-shadow-md w-64 h-48 bg-white rounded-md pt-2 flex justify-center font-bold">Why Choose Us
            <div className="">High Performance</div>
            <div className="">Responsive Design</div>
            <div className="">Easy to Use</div>
            <div className="">Scalable Solutions</div>
            <div className="">24/7 Support</div>
        </div>
        <div className="drop-shadow-md w-64 h-48 bg-white rounded-md pt-2 flex justify-center font-bold">Our Features
            <div className="">Fast and Lightweight</div>
            <div className="">Mobile-First Approach</div>
            <div className="">Customizable UI</div>
            <div className="">Secure and Reliable</div>
            <div className="">Global Reach</div> 
        </div>
        <div className="drop-shadow-md w-64 h-48 bg-white rounded-md pt-2 flex justify-center font-bold">Customer Reviews
            <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</div>
        </div>
        </div>
        
    </div>
    
  )
}