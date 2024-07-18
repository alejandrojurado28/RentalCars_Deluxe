import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Navbar } from "@/components/Shared/Navbar";
import { FirstBlock } from "./components/FirstBlock";
import { SliderBrans } from "./components/SliderBrands";
import { Features } from "./components/Features";
import { OurFleet } from "./components/OurFleet";

export default function Home() {
  return (
    <div>
      <Navbar />
      <FirstBlock />
      <SliderBrans />
      <Features />
      <OurFleet />
    </div>
  );
}
