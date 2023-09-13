"use client"
import App from "./_app";
import { RecoilRoot } from 'recoil'

export default function Home() {
  return (
    <main >
      <RecoilRoot>
      <App/>
      </RecoilRoot>
    </main>
  )
}
