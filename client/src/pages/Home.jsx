import { CTASection } from '@/components/CTASection'
import { Features } from '@/components/Features'
import { Footer } from '@/components/Footer'
import Hero from '@/components/Hero'
import React from 'react'

const Home = () => {
  return (
  <>
  <Hero/>
  <Features/>
  <CTASection/>
  <Footer/>
  </>
  )
}

export default Home