import React from 'react'
import "./Home.scss"
import Banner from '../Banner/Banner'
import Row from './Row/Row'


function Home() {
  return (
  <section className='home'>
    <Banner/>
    <Row title={"Popular on Netflix"}/>
  </section>
  )
}

export default Home
