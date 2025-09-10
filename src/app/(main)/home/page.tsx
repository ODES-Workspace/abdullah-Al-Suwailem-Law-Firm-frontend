import { Features, Fields, HomeHero, PresidentsMessage } from "@/shared";
import HomeServices from "@/shared/HomeServices";
import React from "react";

export default function page() {
  return (
    <>
      <HomeHero />
      <PresidentsMessage />
      <Features />
      <HomeServices />
      <Fields />
    </>
  );
}
