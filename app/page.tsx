import About from '@/src/components/About'
import Blog from '@/src/components/Blog'
import Brands from '@/src/components/Brands'
import Classes from '@/src/components/Classes'
import Hero from '@/src/components/Hero'
import Membership from '@/src/components/Membership'
import Team from '@/src/components/Team'
import Testimonial from '@/src/components/Testimonial'

const Home = () => {
  return (
    <main>
      <Hero/>
      <About/>
      <Classes/>
      <Team/>
      <Membership/>
      <Testimonial/>
      <Blog/>
      <Brands/>
    </main>
  )
}

export default Home