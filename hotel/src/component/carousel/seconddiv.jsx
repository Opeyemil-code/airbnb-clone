import React from "react";
import wedding from '/wedding-photography 1.png'
import star from '/Star 1.png'
export default function Sdiv(params) {
    return(
        <div className="flex flex-col space-y-4 p-8">

            <div>
            <img className="w-64 h-96" src={wedding} alt="" />
            </div>


            <div className="flex flex-col space-y-1">

             <div className="flex flex-row space-x-2">
             <img className="w-auto" src={star} alt="" />
             <p className="text-sm">5.0 (6) . USA</p>
             </div>
             
             <p className="font-bolder font-mono">Life lessons with Katie Zaferes</p>
             <p className=""> <span className="font-bold text-xl">From $136</span> / person</p>

            </div>
        </div>
    ) 
}