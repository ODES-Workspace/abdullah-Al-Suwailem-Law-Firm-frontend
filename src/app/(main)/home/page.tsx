import { Features, Fields, HomeHero, PresidentsMessage } from "@/shared";
import Accreditations from "@/shared/Accreditations";
import HomeServices from "@/shared/HomeServices";
import Partners from "@/shared/Partners";
import React from "react";

export default function page() {
  return (
    <>
      <HomeHero />
      <PresidentsMessage />
      <Features />
      <HomeServices />
      <Fields />
      <Accreditations />
      <Partners />
    </>
  );
}
