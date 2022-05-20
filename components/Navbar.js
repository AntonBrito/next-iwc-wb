import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';
import topesquerdo from '../public/toplogo.png'
import logo from '../public/logo.png';

const Nav = styled.nav`
    height: 100px;
    background: #000;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const StyledLink = styled.a`
    padding: 0rem 2rem;
`

// const Styledopesquerdo= styled.div`
//     padding: 0rem 2rem;
//     height: 150px;
// `

const Navbar = () => {
    return (
    <Nav>
    
        <div class="grid grid-cols-2 flex items-center justify-between p-6 flex-wrap float-left h-80 w-80">
            <div class="flex items-center p-6">
                <div  className={styled.topesquerdo}>
                    <Link href='/'className="titulo">
                        <Image src={topesquerdo} />
                    </Link>
                </div>
            </div> 
            <div class="flex items-center p-1 space-x-6 gap-8">
                <div class="flex "className={styled.logo}>
                <Link href='/'className="titulo">
                     <Image src={logo} />
                </Link>
                </div>
            </div>
            
        </div>
        <div>

            
        </div>
        <div>
            <Link href="/">
                <StyledLink>Home</StyledLink>
            </Link>
            <Link href="/about">
                <StyledLink>About us</StyledLink>
            </Link>
            <Link href="/about">
                <StyledLink>Events</StyledLink>
            </Link>
        </div>
    </Nav>
    )
}

export default Navbar;
