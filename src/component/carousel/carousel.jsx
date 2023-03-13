import React from "react";
import Card from "./firstdiv";
import Bike from '/public/mountain-bike 1.png'
import star from '/public/Star 1.png'
import data from './data.jsx'
export default function Carousel(params) {
    const Data = data.map(
        (Data)=>{
            return <Card
            fimg={Data.img}
            star={Data.secondimg}
            ratings={Data.ratings}
            quote={Data.quote}
            price={Data.price}
            openSpot={Data.openSpots}
            notification={Data.notification}
            />    
        }
    )
    return(
        <section className="flex flex-col  lg:flex-row mx-auto w-3/2 justify-center lg:space-x-8 m-10 space-y-10 lg:space-y-0"> 
            {Data}   
        </section>
    )
}



/*

fimg={Data.fimg}
            star={Data.star}
            ratings={Data.ratings}
            quote={Data.quote}
            price={Data.price}
            openSpot={Data.openSpots}
            notification={Data.notification}




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