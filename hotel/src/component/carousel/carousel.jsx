import React from "react";
import Fdiv from "./firstdiv";
import Sdiv from "./seconddiv";
import Tdiv from "./thirddiv";

export default function Carousel(params) {
    return(
        <div className="flex mx-auto bg-blac w-2/3">
           <Fdiv/>
           <Sdiv/>
           <Tdiv/>
        </div>
    )
}