import Head from 'next/head'
import styled from 'styled-components';
import Contact from '../components/Contact';
import HeaderSection from '../components/EventSection';
import EventSection from '../components/HeaderSection';
import ServeiceEventSection from '../components/ServiceEventSection';
const Hero = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
`;

const Heading = styled.h1`
  color: #000;
  font-size: 5rem;
  font-weight: 900;
`;

export default function Home() {
  return ( 
    <>
    <Head>
    <title>Interwovencare</title>
    <link rel='icon' href='/favicon.ico' />
    </Head>
    <EventSection />
    <ServeiceEventSection />
    <HeaderSection />
    <Contact />
    </>
  )
}