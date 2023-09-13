import React from 'react'
import AboutUs from "@/components/AboutUs"
import CardContainer from "@/components/CardContainer"
import Pov from "@/components/Home"
import SectionDivider from "@/components/SectionDivider"
import BottomNavbar from '@/components/BottomNavbar'
import TopNavbar from '@/components/TopNavbar'


const App = () => {
  return (
    <div>
        <TopNavbar/>
        <BottomNavbar/>
        <Pov/>
        <SectionDivider title="Products"/>
        <CardContainer/>
        <SectionDivider title="About Us"/>
        <AboutUs/>
    </div>
  )
}

export default App