import React, { useState } from "react";

import Resources from "./Resources";
import { Property, RentIcon } from "../components";
import PropertyListings from "./PropertyListings";
import Tenants from "../components/Tenants";
import RUlandLord from "../components/RUlandLord";
import Hero from "./Hero";


const PropertyComponent = () => {
 

  return (
    <>
       <section>
        <Hero/>
       </section>
      <section>
        <Property />
      </section>
      <section>
        <PropertyListings />
      </section>
      <section>
        <Tenants />
      </section>
      <section>
        <RUlandLord />
      </section>
      
    </>
  );
};

export default PropertyComponent;
