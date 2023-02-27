import React from "react";
import Firstbox from "./firstbox";
import Secondbox from "./secondbox";
import Thirdbox from "./thirdbox";
import Fourthbox from "./fourthbox";
import Fifthbox from "./fifthbox";

export default function Section(params) {
    return(
        <section className="flex  w-2/3 mx-auto justify-center flex-row space-x-4 mt-8">
          <Firstbox />
          <Secondbox />
          <Thirdbox />
          <Fourthbox />
          <Fifthbox />
        </section>
    )
}