import Navbar from '@/components/Navbar'
import WelcomeScreen from '@/components/WelcomeScreen'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Laundry William'
}

export default function Home() {
  return (
    <>
      <Navbar />
      <WelcomeScreen />
    </>
  )
}
