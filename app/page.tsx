import CardContainer from "@/components/CardContainer"
import Pov from "@/components/Home"
import SectionDivider from "@/components/SectionDivider"

export default function Home() {
  return (
    <main >
      <Pov/>
      <SectionDivider title="Products"/>
      <CardContainer/>
    </main>
  )
}
