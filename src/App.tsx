import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {createGlobalStyle} from "styled-components";

export const App = () => {

  const [isText, setIsText] = useState(true);
  const toggleText = () => {
    window.scrollY < 500 ? setIsText(true) : setIsText(false);
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleText)
    return () => window.removeEventListener('scroll', toggleText)
  }, []);

  return(
    <>
      <GlobalStyle />
      <Container>
        { isText ? <h2>Let's SCROLL</h2> : <h2>😁</h2> }
        <p>JavaScriptでスクロールに合わせて背景色のCSSを変更する方法</p>
      </Container>

    </>
  );
};


const GlobalStyle = createGlobalStyle`
  #root {
    height: 5000px;
    background: #FF4081;
    margin: 0;
    padding: 0;
    transition: 3s;
  }
  #root li{
    list-style: none;
  }

  a{
    text-decoration: none;
    color: #666;
  }
  img{
    width: 100%;
  }

`;


const Container = styled.div`

  h2 {
    position: fixed;
    top: 0;
    padding: 10px;
    color: black;
    font-size: 4rem;
  }
  
`;
