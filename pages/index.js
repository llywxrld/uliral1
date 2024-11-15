import Image from "next/image";
import localFont from "next/font/local";


export default function Home() {
  return <div className="bg-pink-300 space-x-96 text-black flex justify-center items-center h-screen">
    <div className="space-y-4 font-bold">
    <p className="text-2xl ">surname:Batsaikhan</p>
    <p className="text-2xl ">name:Siilen</p>
    <p className="text-2xl ">gmail:lily.batsaikhan@gmail.com</p>
    <p className="text-2xl ">address:Shangri-la mall 3rd floor</p>
    </div>
    <Image src="/zurag.jpg" width={800} height={400} className="rounded-xl border-2" />
  </div>
  
}