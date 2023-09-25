
import AboutUs from "@/components/AboutUs"
import CardContainer from "@/components/CardContainer"
import Pov from "@/components/Home"
import SectionDivider from "@/components/SectionDivider"

export default function Home() {
  return (
    <main className="bg-slate-100" >
      <Pov/>
      <SectionDivider title="Products"/>
      <CardContainer/>
      <SectionDivider title="About Us"/>
      <AboutUs/>
    </main>
  )
}
