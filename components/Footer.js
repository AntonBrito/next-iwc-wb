import styled from 'styled-components'
import logo from '../public/logo.png';
import Image from 'next/image';
import Link from 'next/link';

const FooterSection = styled.div`
height: 60px;
display: flex;
justify-contet: center;
align-items: center;
`;

const Footer = () => {
  return (
    <FooterSection className='bg-gray-800'>
      <div className=''>

      </div>
      <p className="p-4 flex-col text-white text-center">Interwoven Care  &copy; 2022</p>
      <div className="flex items-center p-1 space-x-6 gap-8 h-40 w-40">
                {/* <div className="flex p-1">
                <Link href='/'className="titulo">
                     <Image src={logo} />
                </Link>
                </div> */}
                </div>     
     
    </FooterSection>
  );
};

export default Footer;
