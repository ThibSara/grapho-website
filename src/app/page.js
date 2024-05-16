import Cursor from '../component/cursor'
import HomePage from '../component/home'

export default function Home() {
  return (
    <main className="bg-background font-urbanist flex-col flex min-h-screen">
      <Cursor />
      <div className ="container mx-auto mt-24 px-12 py-4" >
        <HomePage />
      </div>
 </main>
  );
}
