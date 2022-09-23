import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

function Header(){



  const HeadingStyle = styled.h1`
    color: aliceblue;
    background-color: transparent;
    font-family:  ;
    font-size: 40pt;
    `;



  return (
 <HeadingStyle>
       <Link to="/"> <h1>Unionize</h1></Link>
      <ul>
      <h />
         <Link to="/Login">Login</Link>
         <span><p>Need to Join? <sp />
         <Link to="/sign-in">Sign Up Here!</Link></p></span>
  
         </ul>
</HeadingStyle>
  );
}


export default Header;