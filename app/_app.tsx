import React from 'react'
import AboutUs from "@/components/AboutUs"
import CardContainer from "@/components/CardContainer"
import Pov from "@/components/Home"
import SectionDivider from "@/components/SectionDivider"
import { RecoilRoot } from 'recoil'

const App = () => {
  return (
    <div>
        <RecoilRoot>
            <Pov/>
            <SectionDivider title="Products"/>
            <CardContainer/>
            <SectionDivider title="About Us"/>
            <AboutUs/>
        </RecoilRoot>
    </div>
  )
}

export default App