import HeroSection from '../components/home/HeroSection';
import StickerSection from '../components/home/StickerSection';
import AboutSection from '@/components/home/AboutSection';
import DiscoverSection from '@/components/home/discoverSection';

export default function Home() {
  
  return (
    <div className='bg-white text-black'>
    <HeroSection/>
  <AboutSection/>
  <DiscoverSection/>
  
    </div>
    );
}
