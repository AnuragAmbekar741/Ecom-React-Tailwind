"use client"

import AboutUs from "@/components/AboutUs"
import CardContainer from "@/components/CardContainer"
import Pov from "@/components/Home"
import SectionDivider from "@/components/SectionDivider"
import {RecoilRoot} from 'recoil'


export default function Home() {
  return (
    <main >
      <RecoilRoot>
      <Pov/>
      <SectionDivider title="Products"/>
      <CardContainer/>
      <SectionDivider title="About Us"/>
      <AboutUs/>
      </RecoilRoot>
    </main>
  )
}
