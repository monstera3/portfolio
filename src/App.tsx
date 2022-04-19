import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {createGlobalStyle} from "styled-components";

export const App = () => {

  const [color,setColor] = useState('#FF4081')
  const changeColor = () => {
    const y = window.scrollY;
    if (y < 500) {
      setColor('#FF4081');
    } else if (500 <= y && y < 1000) {
      setColor('red');
    } else {
      setColor('green');
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeColor)
    return () => window.removeEventListener('scroll', changeColor)
  }, []);

  return(
    <>
      <GlobalStyle />
      <Container>
        <h2>{color}</h2>
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
