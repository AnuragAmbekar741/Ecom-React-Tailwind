
import About from "@/components/About"
import AboutUs from "@/components/AboutUs"
import CardContainer from "@/components/CardContainer"
import Pov from "@/components/Home"
import SectionDivider from "@/components/SectionDivider"

export default function Home() {
  return (
    <main>
      <Pov/>
      <SectionDivider title="Products"/>
      <CardContainer/>
      <SectionDivider title="About Us"/>
      <About/>
      {/* <AboutUs/> */}
    </main>
  )
}
