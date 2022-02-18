import Head from 'next/head';
import styled from 'styled-components'




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

const about = () => {
  return ( 
 <>
    <Head>
      <title>About us</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <Hero>
      
      <h1>Site is under Construction. Coming soon!</h1>
    </Hero>
</>
  );
}

export default about