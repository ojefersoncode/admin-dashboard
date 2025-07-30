import type { Metadata } from "next";
import React from "react";
import DemographicCard from "@/components/ecommerce/DemographicCard";
import NavBar from "@/components/header/Navbar";

export const metadata: Metadata = {
  title:
    "Mapa demografico",
  description: "This is Next.js",
};

export default function Ecommerce() {
  return (
    <div className="flex flex-col gap-4 md:gap-6">
      <div className="w-full">
        <NavBar />
      </div>

      <div className="col-span-12 xl:col-span-5">
        <DemographicCard />
      </div>
  
    </div>
  );
}
