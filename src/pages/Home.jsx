/* eslint-disable no-unused-vars */
import React from "react";
import { Property} from "../components";
import PropertyListings from "./PropertyListings";
import Tenants from "../components/Tenants";
import RUlandLord from "../components/RUlandLord";
import Hero from "./Hero";

const PropertyComponent = () => {
  return (
    <>
      <section>
        <Hero />
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
