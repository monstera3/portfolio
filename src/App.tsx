import React, { useEffect, useState } from 'react';
import {createGlobalStyle} from "styled-components";
import { Content } from './components/Content';

export const App = () => {

  const [color,setColor] = useState('#ABCCD0')
  const changeColor = () => {
    const y = window.scrollY;
    if (y < 500) {
      setColor('#ABCCD0');
    } else if (500 <= y && y < 2000) {
      setColor('#FCE5CE');
    } else {
      setColor('#A8C6CA');
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeColor)
    return () => window.removeEventListener('scroll', changeColor)
  }, []);

  return(
    <>
      <GlobalStyle />
      <Content backgroundColor={color}/>
    </>
  );
};


const GlobalStyle = createGlobalStyle`
  #root {
    font-family: Vesterbro, Times, serif;
    margin: 0;
    padding: 0;
  }
  #root li{
    list-style: none;
  }

  a{
    text-decoration: none;
    color: #091B11;
  }

`;

