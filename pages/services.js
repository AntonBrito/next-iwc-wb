import Head from 'next/head';
import ServeiceEventHeadSection from '../components/ServiceEventHeadSection'; 
import ServiceEventSection from '../components/ServiceEventSection';
import Contact from '../components/Contact';


const  Services = () => { 
    return ( 
        <>
        <Head>
        <title>Interwovencare</title>
        <link rel='icon' href='/favicon.ico' />
        </Head>
        <ServeiceEventHeadSection />
        <ServiceEventSection />
        <Contact />
        </>
    )
}

export default Services