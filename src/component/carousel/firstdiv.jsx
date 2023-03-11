import React from "react";

export default function Card(props) {
     let badgeText
     if (props.Data.openSpots === 0) {
        badgeText = 'Sold out'
     } else if (props.Data.openSpots > 0) {
        badgeText = 'Online' 
     }
     console.log(props.Data.badgeText)
    return(
      <div className="flex flex-col  lg:mx-0 mx-auto">
            <img src={props.Data.img} className="w-56 h-72 rounded-lg" />
            <div className="flex flex-row space-x-2">
                <img src={props.Data.secondimg} className="w-5 h-5" />
                <span className=''></span>
                <span className=""> • </span>
                <span className="">{props.Data.ratings}</span>
            </div>
            <p className="font-mono">{props.Data.quote}</p>
            <p><span className="font-mono"> {props.Data.price} </span></p>
           <div className="border absolute bg-white px-3 py-1 rounded ml-2 text-sm font-mono font-bold">{badgeText}</div>
        </div>
    )
}


