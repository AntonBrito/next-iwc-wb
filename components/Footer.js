import styled from 'styled-components'

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
      <p class="text-white">Interwovencare 2022 All Rights Reserved</p>
    </FooterSection>
  );
};

export default Footer;
