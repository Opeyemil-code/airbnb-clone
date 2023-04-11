import React from "react";

export default function Card(props) {
   console.log(props.data)
     let badgeText
     if (props.Agba.openSpots === 0) {
        badgeText = 'Sold out'
     } else if (props.Agba.openSpots > 0) {
        badgeText = 'Online' 
     }
     
    return(
      <div className="flex flex-col  lg:mx-0 mx-auto  lg:w-64 w-72 text-center">
            <img src={props.Agba.img} className="w-56 h-72 rounded-lg mx-auto" />
            <div className="flex flex-row space-x- text-center mx-auto mt-2">
                <img src={props.Agba.secondimg} className="w-5 h-5" />
                <span className=''></span>
                <span className=""> • </span>
                <span className="">{props.Agba.ratings}</span>
            </div>
            <p className="font-mono">{props.Agba.quote}</p>
            <p><span className="font-mono"> {props.Agba.price} </span></p>
            <div className="border absolute bg-white px-3 py-1 rounded ml-10 text-sm font-mono font-bold ">{badgeText}</div>
        </div>
    )
}


