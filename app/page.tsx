
import About from "@/components/About"
import CardContainer from "@/components/CardContainer"
import Footer from "@/components/Footer"
import Pov from "@/components/Home"
import SectionDivider from "@/components/SectionDivider"

export default function Home() {
  return (
    <main>
      <Pov/>
      <SectionDivider title="Products"/>
      <CardContainer/>
      {/* <SectionDivider title="About Us"/> */}
      <About/>
      <Footer/>
    </main>
  )
}
