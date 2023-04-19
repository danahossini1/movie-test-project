import React from 'react'
// import './Home.css'
import { useEffect, useState } from "react"
import Header from '../../Components/Header'
import Scroll from '../../Components/Scroll'
import Aside from '../../Components/Aside'
import Footer from '../../Components/Footer'
import Section from '../../Components/Section'
import NewMove from '../../Components/NewMove'




export default function Home() {


  const [isLoading, setIsLoading] = useState(false)



  return (
    <div >
      <div className="container-fluid px-0 ">
        <Scroll />
        {/* Header  */}
        <Header />
        {/* End Header  */}
        {/* Main  */}
        <main style={{ minHeight: '100vh' }} className="container d-flex gap-4 flex-column flex-lg-row align-items-start">
          <div className={`${!isLoading ? '' : 'd-none'}`} style={{ margin: '100px auto', width: 100 }}>
            <div style={{ width: 50, height: 50 }} className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
          <section className={`${isLoading ? '' : 'd-none'} col-12 col-lg-8 mt-5`}>
            <Section />
            <NewMove setIsLoading={setIsLoading}/>
          </section>
          {/* Aside  */}
          <div className={`${isLoading ? '' : 'd-none'} col-lg-4 col-md-12`}>
            <Aside />
          </div>
          {/* End Aside  */}



        </main>
        {/* End Main  */}
        {/* Footer  */}
        <Footer />
      </div>
    </div>
  )
}
