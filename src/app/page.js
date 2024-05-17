import HomePage from '../component/home'
import Image from 'next/image';
import HeroSection from '../component/home/heroSection';
import StickerSection from '../component/home/StickerSection';
import AboutSection from '../component/home/aboutSection';

export default function Home() {
  
  return (
    <div className='bg-white font-urbanist'>
    <HeroSection/>
    <StickerSection/>
    </div>
  );
}
