import React from 'react'
import Hero from './Hero'
import Cards from './Cards'
import GadgetDetails from './GadgetDetails'
import GadgetsList from './GadgetsList'

export default function Home() {
  return (
    <div className='bg-slate-300'>
        <Hero></Hero>
        <GadgetsList/>
    </div>
  )
}
