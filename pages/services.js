import Head from 'next/head';
import ServeiceEventHeadSection from '../components/ServiceEventHeadSection'; 
import ServiceEventSection from '../components/ServiceEventSection';
import Contact from '../components/Contact';
import EventSection from '../components/EventSection';

const  Services = () => { 
    return ( 
        <>
        <Head>
        <title>Interwovencare</title>
        <link rel='icon' href='/favicon.ico' />
        </Head>
        <ServeiceEventHeadSection />
        <ServiceEventSection />
        <EventSection />
        <Contact />
        </>
    )
}

export default Services