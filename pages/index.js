import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Main from '../components/Main'

const Home = () => (
  <div>
    <Head title="Tobias Timm (@TbsTimm)" />
    <Nav />
    <Main />
    <Footer />
  </div>
)

export default Home
