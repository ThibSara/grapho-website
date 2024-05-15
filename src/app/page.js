import HeroSection from "../component/heroSection";
import Cursor from '../component/cursor'
import Navbar from "../component/Navbar";

export default function Home() {
  return (
    <main className="bg-background font-urbanist flex-col flex min-h-screen">
      <Navbar />
      <Cursor />
      <div className ="container mx-auto mt-24 px-12 py-4" >
      <HeroSection />
      
      </div>
 </main>
  );
}
