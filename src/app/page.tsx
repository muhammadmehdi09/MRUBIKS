import { Hero } from '@/components/hero'
import Promotions from '../components/promotions'
import BestSelling from '../components/BestSelling'



export default function Home() {
  return (
    <div className='vh-[4000px]'>
      <Hero />
      <Promotions />
      <BestSelling />
      <br />
    </div>
  )
}

