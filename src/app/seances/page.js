import HeroSection from "@/components/seances/HeroSection";
import ParralaxHeader from "@/components/seances/ParralaxHeader";
import BeforeAfterSection from "@/components/seances/BeforeAfterSection";   
import  PriceCard  from "@/components/seances/PriceCard";

export default function Seances() {
  return (
<main className="bg-background font-urbanist">
    <ParralaxHeader/>
    <BeforeAfterSection/>
    <PriceCard/>

</main>
  );
}
