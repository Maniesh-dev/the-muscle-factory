"use client"
import MembershipSlider from './MembershipSlider'

const Membership = () => {
  return (
    <section id='prices' className='py-8 lg:h-screen bg-membership bg-cover bg-center relative before:bg-black/50 before:absolute before:top-0 before:w-full before:h-full px-3 overflow-hidden'>
      <div className="container mx-auto px-0 text-white h-full flex flex-col md:pt-18 relative z-20">
        <h2 className="h2 text-white text-center mb-5">Membership Plans</h2>
        <div>
          <MembershipSlider/>
        </div>
      </div>
    </section>
  )
}

export default Membership