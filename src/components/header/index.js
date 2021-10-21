import { useState } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components'

const Header = () => {
    const [showLink, setShowLink] = useState(false);

    const menuBurger = () => {
        setShowLink(showLink => !showLink)
    }

    return(
        <>
        <HollowHeader/>
        <StyledHeader>
            <LogoMarvel src="./Marvel-Comics-Logo.png" alt="Marvel-Comics-Logo.png" />
            <StyledBurgerMenu onClick={menuBurger}>
                    <StyledBurger></StyledBurger>
                    <StyledBurger></StyledBurger>
                    <StyledBurger></StyledBurger>
            </StyledBurgerMenu>
            <StyledNav> 
                { showLink && <StyledLink to="/characters">Characters</StyledLink>}
                { showLink && <StyledLink to="/">Login</StyledLink>}
                {/* { showLink ? <StyledLink to="/">Login 2</StyledLink> : null} */}

            </StyledNav>
        </StyledHeader>
        </>
    )
}

const LogoMarvel = styled.img`
    width: 100px;
    height: auto;
    margin-left: 20px;
`

const StyledBurgerMenu = styled.div`
    width: 40px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-right: 20px;
    margin-left: auto;
`

const StyledBurger = styled.span`
    height: 3px;
    width: 100%;
    background-color: #ffffff;
`

const StyledHeader = styled.header`
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #f11e22;
    height: 50px;
    width: 100%;
`

const StyledNav = styled.nav`
    position: absolute;
    right: 0;
    top: 100%;
    height: 100%;
    width: 100%;
`
const StyledLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
    height: 100%;
    color: #ffffff;
    background-color: #f11e22;
    text-decoration: none;
`
const HollowHeader = styled.div`
    height: 50px;
    width: 100%;
`

export default Header