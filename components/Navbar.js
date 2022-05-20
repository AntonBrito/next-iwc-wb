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
    padding: 10px;
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
    <Nav className='mb-8'>
    
        <div className="grid grid-cols-1 flex items-center justify-between p-6 flex-wrap float-left h-60 w-60">
            <div className="flex items-center p-6">
                <div className={styled.topesquerdo}>
                    <Link href='/'className="titulo">
                        <Image src={topesquerdo} />
                    </Link> 
                </div>
            </div> 
            {/* <div className="flex items-center p-1 space-x-6 gap-8 h-60 w-40">
                <div class="flex "className={styled.logo}>
                <Link href='/'className="titulo">
                     <Image src={logo} />
                </Link>
                </div>
            </div> */}
            
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
