import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';
import topesquerdo from '../public/toplogo.png'


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
    <Nav className='mb-8 grid grid-cols-1 p-10'>
    
        <div className=" flex items-center justify-between py-5 p-6 flex-wrap float-left h-60 w-60">
            <div className="flex items-center p-6">
                <div className={styled.topesquerdo}>
                    <Link href='/'className="titulo">
                        <Image src={topesquerdo} />
                    </Link> 
                </div>
            </div> 
    
            
        </div>
        
        <div className="text-2xl">
            
            {/* <Link href="/about">
                <StyledLink>About</StyledLink>
            </Link> */}
            <Link href="/services">
                <StyledLink>Services</StyledLink>
            </Link>
        </div>
    </Nav>
    )
}

export default Navbar;
