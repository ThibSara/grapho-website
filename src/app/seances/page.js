import HeroSection from "@/components/seances/HeroSection";
import ParralaxHeader from "@/components/seances/ParralaxHeader";
import BeforeAfterSection from "@/components/seances/BeforeAfterSection";   
import  PriceCard  from "@/components/seances/PriceCard";

export default function Seances() {
  return (
<main className="bg-background font-urbanist mx-auto">
  <div className="h-screen items-center pt-20" >
    <ParralaxHeader />
    <div className="pt-20">
    <BeforeAfterSection/>
    </div>

    </div>
    <PriceCard/>

</main>
  );
}
