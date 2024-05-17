import HomePage from '../component/home'
import Image from 'next/image';
import AboutSection from '../component/home/aboutSection';
import HeroSection from '../component/home/heroSection';
import StickerSection from '../component/home/StickerSection';

export default function Home() {
  return (
    <div className='bg-white  font-urbanist'>
    <HeroSection/>
    <StickerSection/>
    </div>
  );
}
