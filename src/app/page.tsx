import HeroSection from "@/components/hero"
import Subhero from "@/components/subhero"
import Product from "@/components/product"
import Page1 from "@/components/product1"
import Section from "@/components/pic"


export default function Home (){
  return (
    <>
    {/* HEADER */}
  <HeroSection/>
  <Subhero/>
  <Product/>
  <Page1/>
  <Section/>
  {/* FOOTER */}
    </>
  )
}