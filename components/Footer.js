import styled from 'styled-components'
import logo from '../public/logo.png';
import Image from 'next/image';
import Link from 'next/link';

const FooterSection = styled.div`
background: #000;
height: 60px;
display: flex;
justify-contet: center;
align-items: center;
`;

const Footer = () => {
  return (
    <FooterSection>
      <div className="float-left flex items-center p-1 space-x-6 gap-8 h-60 w-40">
                <div className="flex p-1">
                <Link href='/'className="titulo">
                     <Image src={logo} />
                </Link>
                </div>
            </div>
      <p class="text-white text-center">2022 All Rights Reserved</p>
    </FooterSection>
  );
};

export default Footer;
