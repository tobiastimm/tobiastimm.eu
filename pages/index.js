import React from 'react';
import Link from 'next/link';
import Head from '../components/head';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Main from '../components/Main';

const Home = () => (
  <>
    <Head title="Tobias Timm (@TbsTimm)" />
    <Nav />
    <Main />
  </>
);

export default Home;
