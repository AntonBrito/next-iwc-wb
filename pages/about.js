import Head from 'next/head';
import styled from 'styled-components'


const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 25em;
  background: papayawhip;
  
`;

const StyledTopesquerdo = styled.div`
    height: 100px;
    width: 100px;
    

`

// const Hero = styled.div`
//   height: 90vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background: #fff;
// `;

// const Heading = styled.h1`
//   color: #000;
//   font-size: 5rem;
//   font-weight: 900;
// `;

const about = () => {
  return ( 
 <>
    <Head>
      <title>About us</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    
  <Wrapper>
    
  </Wrapper>

</>
  );
}

export default about