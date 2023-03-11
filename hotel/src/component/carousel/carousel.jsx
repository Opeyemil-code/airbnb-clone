import React from "react";
import Card from "./firstdiv";
import Bike from '/public/mountain-bike 1.png'
import star from '/public/Star 1.png'
import data from './data.jsx'
export default function Carousel(params) {
    const Data = data.map(
        (Data)=>{
            return <Card
            key={data.item}
            fimg={Data.fimg}
            star={Data.star}
            ratings={Data.ratings}
            quote={Data.quote}
            price={Data.price}
            openSpot={Data.openSpots}
            notification={Data.notification}
            
            />    
        }
    )
    return(
        <section className="flex flex-row mx-auto w-3/2 bg-blac justify-center space-x-8 mt-10"> 
            {Data}   
        </section>
    )
}







/*
<Card
            img={Bike}
            star={star}
            rating='5.0 . USA'
            quote='life lessons with covid'
            price='From $134/ person'/>
            <Card
            img={Bike}
            star={star}
            rating='5.0 . USA'
            quote='life lessons with covid'
            price='From $134/ person'/>
            <Card
            img={Bike}
            star={star}
            rating='5.0 . USA'
            quote='life lessons with covid'
            price='From $134/ person'/>
        </div>

        */