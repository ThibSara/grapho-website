import HeroSection from '../components/home/HeroSection';
import StickerSection from '../components/home/StickerSection';
import AboutSection from '../components/home/AboutSection';

export default function Home() {
  
  return (
    <div className='bg-white text-black font-urbanist'>
    <HeroSection/>
          <p className='text-4xl md:text-4xl text-secondary font-semibold'>Grapho 78</p>

    <StickerSection/>
    <AboutSection/>
    </div>
  );
}
