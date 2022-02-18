import Link from 'next/link';
import styled from 'styled-components';


const Nav = styled.nav`
    height: 80px;
    background: #000;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const StyledLink = styled.a`
    padding: 0rem 2rem;
`
// const Navbar = () => {
//     return (
//     <Nav className="navbar navbar-expand navbar-dark bg-dark mb-4">
//         <div className="container">
//             <a className="navbar-brand" href="#">InterWovenCare</a>
//             <div className="collapse navbar-collapse">
//                 <ul className="navbar-nav ml-auto">
//                     <li className="nav-item">
//                         <Link href="/"><a className="nav-link">Home</a></Link>
//                     </li>
//                     <li className="nav-item">
//                         <Link href="/about"><a className="nav-link">About</a></Link>
//                     </li>
//                 </ul>
//             </div>
//         </div>
//     </Nav>
//     )
// }

const Navbar = () => {
    return (
    <Nav>
        <div>
            <Link href='/'>
                <StyledLink>InterWovenCare</StyledLink>
            </Link>
        </div>
        <div>
            <Link href="/">
                <StyledLink>Home</StyledLink>
            </Link>
            <Link href="/about">
                <StyledLink>About</StyledLink>
            </Link>
        </div>
    </Nav>
    )
}

export default Navbar;
