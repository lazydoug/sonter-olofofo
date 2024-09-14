import FullImageCard from '@/components/FullImageCard'
import HalfImageCard from '@/components/HalfImageCard'
import HeroSection from '@/components/HeroSection'

const Home = () => {
  return (
    <main className='min-h-screen'>
      <HeroSection />

      <section className='relative z-10 px-4 pb-20'>
       <div className='grid gap-4'>
          <HalfImageCard />
          <FullImageCard />
       </div>
      </section>
    </main>
  )
}

export default Home
