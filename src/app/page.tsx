import React from 'react'
import BestSelling from '@/components/BestSelling'
import { Hero } from '@/components/hero'
import Promotions from '@/components/promotions'


export default function Home() {
  return (
    <div className=''>
      <Hero />
      <Promotions/>
      <BestSelling />
    </div>
  )
}


